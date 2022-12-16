from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import User

from .models import *

from django.db import models

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    
    class Meta:

        model = User
        fields = (
            'username',
            'fullName',
            'email',
            'password', 
            'password2',
        )
        extra_kwargs = {
            'username': {'required': True},
            'fullName': {'required': True},
            'password': {'required': True},
            'password2': {'required': True},
        }

    
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            fullName=validated_data['fullName'],
            email=validated_data['email'],
        )
       
        user.set_password(validated_data['password'])
        user.save()

        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:

        model = Review
        fields = (
            'user',
            'titleReview',
            'review',
            'nota',
        )
    def save_review(request):
       
        review = {
            'user': request.user.id,
            'titleReview': request.POST['itleReview'],
            'review': request.POST['post'],
            'nota': request.POST['nota']
        }
       
        return review


        
