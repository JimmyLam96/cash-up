from ipaddress import ip_address
from django.db import models


class User(models.Model):
    username = models.CharField(max_length=50, default="DEFAULT")
    email = models.EmailField()
    first_name = models.TextField(default="DEFAULT")
    last_name = models.TextField(default="DEFAULT")
    ip_address = models.CharField(max_length=20, default="DEFAULT")
    password = models.CharField(max_length=50, default="DEFAULT")


class Customer(models.Model):
    username = models.CharField(max_length=50, default="DEFAULT")
    first_name = models.TextField(default="DEFAULT")
    last_name = models.TextField(default="DEFAULT")
    email = models.TextField(default="DEFAULT")
    email_verified = models.BooleanField(default=None)
    address = models.TextField(default="DEFAULT")

class Product(models.Model):
    name = models.TextField(default="DEFAULT")
    price = models.DecimalField(max_digits=5, decimal_places=2, default="DEFAULT")
    description = models.TextField(default="DEFAULT")
    tax_percentage = models.IntegerField(default="DEFAULT")
    category = models.TextField(default="DEFAULT")
    in_stock = models.BooleanField(default="DEFAULT")
