import inspect

from django.apps import apps
from django.db.models.fields import NOT_PROVIDED

from api_basebone.core import const
from api_basebone.core import gmeta
from api_basebone.utils.meta import (
    get_concrete_fields, get_export_apps, get_reverse_fields,
    get_field_by_reverse_field,
)

from .specs import FIELDS

# 默认的 django 字段类型
DEFAULT_DJANOG_FIELD_TYPE = 'Text'

DJANGO_FIELD_TYPE_MAP = {
    'AutoField': 'Integer',
    'BooleanField': 'Bool',
    'CharField': 'String',
    'SlugField': 'String',
    'DateField': 'Date',
    'EmailField': 'String',
    'DateTimeField': 'DateTime',
    'FloatField': 'Float',
    'DecimalField': 'Decimal',
    'GenericIPAddressField': 'String',
    'IntegerField': 'Integer',
    'BigIntegerField': 'Integer',
    'PositiveIntegerField': 'Integer',
    'TextField': 'Text',
    'TimeField': 'Time',
    'URLField': 'String',
    'ForeignKey': 'Ref',
    'OneToOneField': 'Ref',
    'ManyToManyField': 'RefMult',
    'BoneRichTextField': 'RichText',
    'BoneImageUrlField': 'Image',
}


def get_attr_in_gmeta_class(model, config_name, default_value=None):
    """获取指定模型 GMeta 类中指定的属性

    Params:
        model class django 模型类
        config_name string GMeta 类中配置项的名称
        default_value 任何数据类型 默认数据
    """

    gmeta_class = getattr(model, 'GMeta', None)
    if not gmeta_class:
        return default_value
    return getattr(gmeta_class, config_name, default_value)


class FieldConfig:

    def reset_field_config(self, field, data_type=None):
        """根据 Gmeta 中声明的字段的配置进行重置"""
        field_config = get_attr_in_gmeta_class(field.model, gmeta.GMETA_FIELD_CONFIG, {}).get(field.name, {})
        if not field_config:
            return field_config

        # 做 django 中的写法和输出的配置的转换
        result = {
            gmeta.GMETA_FIELD_CONFIG_MAP[key] if key in gmeta.GMETA_FIELD_CONFIG_MAP else key: value
            for key, value in field_config.items()
        }
        return result

    def _get_common_field_params(self, field, data_type):
        """获取字段的通用的配置"""
        config = {
            'name': field.name,
            'displayName': field.verbose_name,
            'required': not field.blank,
            'type': data_type,
            'help': field.help_text
        }

        if field.choices:
            config['choices'] = field.choices

        if not field.editable:
            config['editable'] = field.editable

        if field.default is not NOT_PROVIDED:
            if inspect.isclass(field.default):
                config['default'] = field.default()
            elif not inspect.isfunction(field.default):
                config['default'] = field.default
        return config

    def normal_field_params(self, field, data_type):
        """通用普通字段的配置获取"""
        base = self._get_common_field_params(field, data_type)
        base.update(self.reset_field_config(field, data_type))
        return base

    def string_params(self, field, data_type):
        """字符型字段的配置获取"""
        base = self._get_common_field_params(field, data_type)
        base['maxLength'] = field.max_length
        base.update(self.reset_field_config(field, data_type))
        return base

    def decimal_params(self, field, data_type):
        """小数类型的配置获取
        """
        base = self._get_common_field_params(field, data_type)
        base['precision'] = field.decimal_places
        base['maxDigits'] = field.max_digits
        base.update(self.reset_field_config(field, data_type))
        return base

    def ref_params(self, field, data_type):
        """外键关联字段的配置获取"""
        base = self._get_common_field_params(field, data_type)
        meta = field.related_model._meta
        base['ref'] = '{}__{}'.format(meta.app_label, meta.model_name)
        base.update(self.reset_field_config(field, data_type))
        return base

    def refmult_params(self, field, data_type):
        """多对多字段的配置获取"""
        base = self._get_common_field_params(field, data_type)
        meta = field.related_model._meta
        base['ref'] = '{}__{}'.format(meta.app_label, meta.model_name)
        base.update(self.reset_field_config(field, data_type))
        return base


field_config_instance = FieldConfig()


def get_model_field_config(model):
    """获取指定模型的字段配置, 字段输出所有的字段，包含反向字段

    Params:
        model class django 模型类
    """
    fields = get_concrete_fields(model)
    key = '{}__{}'.format(model._meta.app_label, model._meta.model_name)

    title_field = get_attr_in_gmeta_class(model, gmeta.GMETA_TITLE_FIELD, 'id')

    config = []
    for item in fields:
        field_type = None

        # 抓取 internal_type
        field_type_func = getattr(item, 'get_bsm_internal_type', None)
        if field_type_func:
            field_type = DJANGO_FIELD_TYPE_MAP.get(item.get_bsm_internal_type())
        else:
            field_type = DJANGO_FIELD_TYPE_MAP.get(item.get_internal_type())

        if field_type is not None:
            data_type = FIELDS.get(field_type)['name']
            function = getattr(field_config_instance, '{}_params'.format(field_type.lower()), None)
            if function is not None:
                config.append(function(item, data_type))
            else:
                config.append(field_config_instance.normal_field_params(item, data_type))

    # 添加反转字段
    reverse_fields = get_reverse_fields(model)
    if reverse_fields:
        for item in reverse_fields:
            field = get_field_by_reverse_field(item)
            if not field:
                continue

            reverse_config = {
                'name': item.name,
                'required': False,
                'type': 'bref',
            }

            if field.many_to_many:
                reverse_config['type'] = 'mref'

            meta = item.related_model._meta
            model_verbose_name = meta.verbose_name if meta.verbose_name else meta.model_name

            reverse_config['displayName'] = model_verbose_name
            reverse_config['ref'] = '{}__{}'.format(meta.app_label, meta.model_name)
            reverse_config.update(
                field_config_instance.reset_field_config(item)
            )
            config.append(reverse_config)

    return {
        key: {
            'name': key,
            'displayName': model._meta.verbose_name,
            'titleField': title_field,
            'fields': config
        }
    }


def get_app_field_schema():
    """输出应用模型配置"""
    config, export_apps = {}, get_export_apps()
    if not export_apps:
        return config

    for item in export_apps:
        app = apps.get_app_config(item)
        for model in app.get_models():
            config.update(get_model_field_config(model))
    return config
