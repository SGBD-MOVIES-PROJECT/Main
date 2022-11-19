from django.urls import path
from . import views
from rest_framework import routers
from .api import projectViewSet
from .views import PeliculaListAPIView, PeliculaSearchAPIView,book

#router = routers.DefaultRouter()

#router.register('api/pelicula',  PeliculaListAPIView, 'pelicula')

#urlpatterns = router.urls   
urlpatterns = [
    path("api/pelicula", PeliculaListAPIView.as_view()),
    path("api/pelicula/filtro/<kword>", PeliculaSearchAPIView.as_view()),
    path("api/pelicula/f", book.as_view({'get': 'list'})),
]