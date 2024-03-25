from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken 
from django.contrib.auth import authenticate,login
from rest_framework.permissions import IsAuthenticated
from django.views import generic as View


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

    


    
   