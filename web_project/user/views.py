from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)
        refresh = RefreshToken.for_user(user)
        return JsonResponse({
            'refreshToken': str(refresh),
            'accessToken':str(refresh.access_token),
        })



class RestrictedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        return JsonResponse({'response': "YOU ARE ALLOWED HERE"})

    
        
    
   