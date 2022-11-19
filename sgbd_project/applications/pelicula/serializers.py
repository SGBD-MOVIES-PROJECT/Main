from rest_framework import serializers
from .models import Movie

class projectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'
        
        
class InfoSerializer(serializers.Serializer):
    categoryList = serializers.CharField(max_length=200)
    languageList = serializers.CharField(max_length=200)
    