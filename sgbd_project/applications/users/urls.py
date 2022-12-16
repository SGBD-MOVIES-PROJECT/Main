#
from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import MyObtainTokenPairView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views

app_name = "users_app"
    
urlpatterns = [
    
    #apiURLs
     path(
        'api/user/list/',
        views.UserListApiView.as_view(),
        name='user-list'
    ),
    path(
        'api/user/detail/<pk>', 
        views.UserDetailView.as_view(),
        name='user-detail-api',
    ),
    path(
        'api/user/delete/<pk>', 
        views.UserDetailView.as_view(),
        name='user-delete-api',
    ),
    path(
        'api/user/update/<pk>', 
        views.UserUpdateView.as_view(),
        name='user-update-api',
    ),
    path(
        'api/user/modify/<pk>', 
        views.UserRetrieveView.as_view(),
        name='user-modify-api',
    ),
      path(
        'api/register/', 
        views.UserRegisterApiView.as_view(),
        name='auth_register',
    ),
     path(
        'api/login/', 
        MyObtainTokenPairView.as_view(), 
        name='token_obtain_pair'
    ),
    path(
        'api/login/refresh/', 
        TokenRefreshView.as_view(), 
        name='token_refresh'
    ),
    path('api/logout/', 
        views.LogoutView.as_view(), 
        name='auth_logout'
    ),
     path('api/review/', 
        views.ReviewView.as_view(), 
        name='post'
    ),
     path('api/perfil/', 
        views.UserProfile.as_view(), 
        name='post'
    ),
    
]
