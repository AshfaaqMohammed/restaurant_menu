# Generated by Django 4.2.3 on 2023-08-05 09:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("FoodApp", "0006_bread"),
    ]

    operations = [
        migrations.RenameField(
            model_name="bread",
            old_name="sImage",
            new_name="bImage",
        ),
        migrations.RenameField(
            model_name="bread",
            old_name="sPrice",
            new_name="bPrice",
        ),
    ]
