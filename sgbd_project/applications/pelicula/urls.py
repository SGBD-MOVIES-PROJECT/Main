from django.urls import path
from . import views
from rest_framework import routers
from .api import projectViewSet
from .views import PeliculaListAPIView, PeliculaSearchAPIView, InfoAPIList, PeliculaListView
from django.urls import include, re_path 
#router = routers.DefaultRouter()

#router.register('api/pelicula',  PeliculaListAPIView, 'pelicula')

#urlpatterns = router.urls   
urlpatterns = [
    path("api/pelicula", PeliculaListAPIView.as_view()),
    path("api/pelicula/filter/", PeliculaSearchAPIView.as_view()),
    path("api/pelicula/info", InfoAPIList.as_view()),
    path("", PeliculaListView.as_view()),

  
]