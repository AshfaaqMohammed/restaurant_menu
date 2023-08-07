from django.contrib import admin
from .models import Pizza, Order, Item, Starter, Bread, MainCourse, Rice, Dessert, Drinks
# Register your models here.


class PizzaAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')


class DessertAdmin(admin.ModelAdmin):
    list_display = ('name', 'dPrice')


class RiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')


class MainCourseAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')


class StarterAdmin(admin.ModelAdmin):
    list_display = ('name', 'sPrice')


class BreadAdmin(admin.ModelAdmin):
    list_display = ('name', 'bPrice')


class DrinkAdmin(admin.ModelAdmin):
    list_display = ('name', 'bPrice')


admin.site.register(Pizza, PizzaAdmin)
admin.site.register(Dessert, DessertAdmin)
admin.site.register(MainCourse, MainCourseAdmin)
admin.site.register(Rice, RiceAdmin)
admin.site.register(Starter, StarterAdmin)
admin.site.register(Bread, BreadAdmin)
admin.site.register(Drinks, DrinkAdmin)


admin.site.register(Order)
admin.site.register(Item)
