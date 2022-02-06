from rest_framework import serializers
from .models import Customer


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = [
            "id",
            "url",
            "username",
            "first_name",
            "last_name",
            "email",
            "email_verified",
            "address",
        ]
