from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Pizza(models.Model):
    name = models.CharField(max_length=250, unique=True)
    description = models.CharField(max_length=1000)
    priceM = models.DecimalField(max_digits=6, decimal_places=2)
    priceL = models.DecimalField(max_digits=6, decimal_places=2)
    pImage = models.URLField()
    veg_nonveg = models.URLField()


class Rice(models.Model):
    name = models.CharField(max_length=250, unique=True)
    priceM = models.DecimalField(max_digits=6, decimal_places=2)
    priceL = models.DecimalField(max_digits=6, decimal_places=2)
    pImage = models.URLField()
    veg_nonveg = models.URLField()


class Dessert(models.Model):
    name = models.CharField(max_length=250, unique=True)
    description = models.CharField(max_length=1000)
    dPrice = models.DecimalField(max_digits=6, decimal_places=2)
    pImage = models.URLField()


class Drinks(models.Model):
    name = models.CharField(max_length=250, unique=True)
    bPrice = models.DecimalField(max_digits=6, decimal_places=2)
    bImage = models.URLField()


class MainCourse(models.Model):
    name = models.CharField(max_length=250, unique=True)
    description = models.CharField(max_length=1000)
    priceM = models.DecimalField(max_digits=6, decimal_places=2)
    priceL = models.DecimalField(max_digits=6, decimal_places=2)
    pImage = models.URLField()
    veg_nonveg = models.URLField()


class Starter(models.Model):
    name = models.CharField(max_length=250, unique=True)
    description = models.CharField(max_length=1000)
    sPrice = models.DecimalField(max_digits=6, decimal_places=2)
    sImage = models.URLField()
    veg_nonveg = models.URLField()


class Bread(models.Model):
    name = models.CharField(max_length=250, unique=True)
    bPrice = models.DecimalField(max_digits=6, decimal_places=2)
    bImage = models.URLField()


class Order(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    number = models.CharField(max_length=60)
    bill = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(auto_now_add=True, blank=True)
    note = models.TextField(blank=True, null=True)


class Item(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    size = models.CharField(max_length=60)
