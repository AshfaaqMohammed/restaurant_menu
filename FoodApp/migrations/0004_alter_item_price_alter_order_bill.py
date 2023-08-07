# Generated by Django 4.2.3 on 2023-08-04 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("FoodApp", "0003_alter_item_price_alter_order_bill"),
    ]

    operations = [
        migrations.AlterField(
            model_name="item",
            name="price",
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name="order",
            name="bill",
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]