from django.conf import settings
from django.shortcuts import render
from .models import Customer
from rest_framework import generics, viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CustomerSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.middleware import csrf


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


class LoginView(APIView):
    def post(self, request, format=None):
        data = request.data
        response = Response()
        username = data.get("username", None)
        password = data.get("password", None)

        user = authenticate(username=username, password=password)

        # if the user does not exist
        if not user:
            return Response(
                {
                    "status": "error",
                    "detail": "No active account found with the given credentials",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        # if the user exists but the password is incorrect
        if not user.is_active:
            return Response(
                {
                    "status": "error",
                    "detail": "Given password was incorrect, please try again",
                },
                status=status.HTTP_401_UNAUTHORIZED,
            )

        # if the user exists and the password is correct
        tokens = get_tokens_for_user(user)

        # set the JWT token as a cookie
        response.set_cookie(
            key=settings.SIMPLE_JWT["AUTH_COOKIE"],
            value=tokens["access"],
            expires=settings.SIMPLE_JWT["ACCESS_TOKEN_LIFETIME"],
            secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
            httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
            samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"],
        )
        csrf.get_token(request)

        response.data = {"status": "success", "detail": "Successfully signed in"}

        return response


class CustomerView(viewsets.ModelViewSet):
    # API endpoint that allows creation of a new customer
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerList(generics.ListAPIView):
    # API endpoint that allows customer to be viewed
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerDetail(generics.RetrieveAPIView):
    # API endpoiny that returns a single customer by pk.
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerUpdate(generics.RetrieveUpdateAPIView):
    # API endpoint that allows a customer record to be updated
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class CustomerDelete(generics.RetrieveDestroyAPIView):
    # API endpoint that allows a customer record to be deleted
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
