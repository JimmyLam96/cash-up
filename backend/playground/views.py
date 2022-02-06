from django.shortcuts import render, redirect
from .models import Customer
from rest_framework import generics
from .serializers import CustomerSerializer

# Create your views here.
def say_hello(request):
    x = 1
    y = 2
    return render(request, "hello.html", {"name": "jimmy"})


def Customers(request):
    return render(request, "customers.html")

# def insert_customer_item(request:HttpRequest):
#     customer = Customer(content = request.POST['content'])
#     customer.save()
#     return redirect('/customer/list/')

class CustomerCreate(generics.CreateAPIView):
    #API endpoint that allows creation of a new customer
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerList(generics.ListAPIView):
    #API endpoint that allows customer to be viewed
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerDetail(generics.RetrieveAPIView):
    #API endpoiny that returns a single customer by pk.
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerUpdate(generics.RetrieveUpdateAPIView):
    #API endpoint that allows a customer record to be updated
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerDelete(generics.RetrieveDestroyAPIView):
    #API endpoint that allows a customer record to be deleted
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
