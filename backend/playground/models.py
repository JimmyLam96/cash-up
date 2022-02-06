from ipaddress import ip_address
from django.db import models


class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField()
    first_name = models.TextField()
    last_name = models.TextField()
    ip_address = models.CharField(max_length=20)
    password = models.CharField(max_length=50)

class Customer(models.Model):
    name = models.TextField()
    address = models.TextField()
    order_id = models.BigIntegerField()
