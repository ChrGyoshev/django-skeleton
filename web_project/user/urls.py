from django.urls import path

from web_project.user.views import  LoginView, RegisterView, RestrictedView


urlpatterns = [
    
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/restricted/', RestrictedView.as_view(), name='restricted'),
   
]