from django.db import models

# Create your models here.
class Movie(models.Model):
    budget = models.IntegerField()
    genre = models.TextField(max_length=32)
    original_language = models.TextField(max_length=16)
    original_title = models.CharField(max_length=128)
    overview = models.CharField(max_length=1024)
    production_company = models.CharField(max_length=128)
    production_country = models.CharField(max_length=128)
    release_date = models.DateField()
    revenue = models.DecimalField(max_digits=12, decimal_places=2)
    runtime = models.DecimalField(max_digits=6, decimal_places=2)
    
    def __str__(self):
        return str(self.original_title)
    