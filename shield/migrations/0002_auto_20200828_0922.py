# Generated by Django 2.2.9 on 2020-08-28 01:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shield', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rule',
            name='model',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meta.Model', verbose_name='关联模型'),
        ),
    ]