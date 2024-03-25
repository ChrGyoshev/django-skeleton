from django.urls import path

from web_project.user.views import  LoginView, RestrictedView


urlpatterns = [
    
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/restricted/', RestrictedView.as_view(), name='restricted'),
   
]