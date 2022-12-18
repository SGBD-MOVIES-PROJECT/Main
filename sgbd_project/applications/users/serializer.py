from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import User
from applications.pelicula.models import Movie
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
            'fullName': {'required': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs
    
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
            'movie',
            'amic',
            'titleReview',
            'review',
            'nota',
            
        )
    def create(self, validated_data):
        review = Review.objects.create(
            movie = validated_data['movie'],
            amic = validated_data['amic'],
            user = self.context['request'].user,
            titleReview=validated_data['titleReview'],
            review=validated_data['review'],
            nota=validated_data['nota'],
        )
        return review






        
