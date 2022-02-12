from django.urls import path, include
from . import views
from .views import (
    CustomerView,
    CustomerList,
    CustomerDetail,
    CustomerUpdate,
    CustomerDelete,
)
from rest_framework import routers

router = routers.DefaultRouter()
router.register("customers", CustomerView)

urlpatterns = [
    path("hello/", views.say_hello),
    # path("customers/", views.Customers),
    # path('insert_customer', views.insert_customer_item, name='insert_customer_item'),
    # path('create/', CustomerView.as_view(), name='create-customer'),
    path("", include(router.urls)),
    # path('<int:pk>/', CustomerDetail.as_view(), name='retreieve-customer'),
    # path('update/<int:pk>/', CustomerUpdate.as_view(), name='update-customer'),
    # path('delete/<int:pk>/', CustomerDelete.as_view(), name='delete-customer'),
]