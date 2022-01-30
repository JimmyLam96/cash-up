from django.shortcuts import render
from django.http import HttpResponse
from playground.models import User, Customer

# Create your views here.
def say_hello(request):
    x = 1
    y = 2
    return render(request, "hello.html", {"name": "jimmy"})


def Customers(request):
    return render(request, "customers.html")
