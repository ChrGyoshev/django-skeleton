from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken 
from django.contrib.auth import authenticate,login
from rest_framework.permissions import IsAuthenticated
from django.views import generic as View

from web_project.user.models import User



class RegisterView(APIView):
    def post(self,request):
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(email=email).exists():
            return JsonResponse({
                'error':'Email already registered'
            })
        
        user = User.objects.create_user(email=email, password=password)
        return JsonResponse({'success':'user registration successful'})





class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)
        if user is not None:
            login(request,user)
            refresh = RefreshToken.for_user(user)
            return JsonResponse({
                'refreshToken': str(refresh),
            'accessToken':str(refresh.access_token),
            "user": request.user.email
        })
    

class RestrictedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        user = request.user

        return JsonResponse({'response': "YOU ARE ALLOWED HERE",
                             "user": user.email})

    


    
   