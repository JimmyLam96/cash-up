from django.contrib import admin
from .models import User, Customer

# Register your models here.
models = [User, Customer]

admin.site.register(Customer)
