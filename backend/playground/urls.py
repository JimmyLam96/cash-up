from django.urls import path, include
from . import views
from .views import CustomerCreate, CustomerList, CustomerDetail, CustomerUpdate, CustomerDelete

urlpatterns = [
    path('hello/', views.say_hello),
    path("list/", views.Customers), 
    #path('insert_customer', views.insert_customer_item, name='insert_customer_item'),
    path('create/', CustomerCreate.as_view(), name='create-customer'),
    path('', CustomerList.as_view()),
    path('<int:pk>/', CustomerDetail.as_view(), name='retreieve-customer'),
    path('update/<int:pk>/', CustomerUpdate.as_view(), name='update-customer'),
    path('delete/<int:pk>/', CustomerDelete.as_view(), name='delete-customer'),
]
