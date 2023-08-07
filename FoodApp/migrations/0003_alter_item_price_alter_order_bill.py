# Generated by Django 4.2.3 on 2023-08-04 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("FoodApp", "0002_order_item"),
    ]

    operations = [
        migrations.AlterField(
            model_name="item",
            name="price",
            field=models.DecimalField(decimal_places=1, max_digits=4),
        ),
        migrations.AlterField(
            model_name="order",
            name="bill",
            field=models.DecimalField(decimal_places=1, max_digits=4),
        ),
    ]