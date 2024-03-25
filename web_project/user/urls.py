from django.urls import path

from web_project.user.views import index


urlpatterns = [
    path('', index, name='home'),
]