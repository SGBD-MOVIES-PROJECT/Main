from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
#
from .managers import UserManager

from django.db import models

from django.utils.text import slugify

from applications.pelicula.models import Movie


class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=10, unique=True)
    fullName = models.CharField(max_length=30, blank=True)
    email = models.EmailField()
    
    
    #
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'username'

    REQUIRED_FIELDS = ['email',]

    objects = UserManager()

    def get_short_name(self):
        return self.username
    
    def get_full_name(self):
        return self.nombres + ' ' + self.apellidos
   
  

class Review(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amic = models.ForeignKey(User, on_delete=models.CASCADE, related_name='amic')
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

        
    titleReview = models.CharField(max_length=30)
    review = models.CharField(max_length=300)

    STARS = (
    (0, '0 Stars'),
    (1, '1 Stars'),
    (2, '2 Stars'),
    (3, '3 Stars'),
    (4, '4 Stars'),
    (5, '5 Stars'),
  )
    nota = models.IntegerField(default=0, choices=STARS)
   
    created = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ('user',)


    def __str__(self):
        """Return title and username."""
        return '{} by @{}'.format(self.titleReview, self.user.username)


    def save(self, *args, **kwargs):
        self.url = slugify(self.titleReview)
        super(Review, self).save(*args, **kwargs)



