from django.db import models

class User(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=50)

class Customer(models.Model):
    name = models.TextField()
    address = models.TextField()
    order_id = models.BigIntegerField()