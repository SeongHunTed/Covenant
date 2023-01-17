from django.http import JsonResponse
from accounts.models import User
import requests, json, re
from django.contrib.auth.hashers import check_password
from rest_framework import status
from django.contrib import auth
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token

# Kakao Login
from rest_framework.views import APIView, View
from django.conf import settings
from django.shortcuts import redirect
from rest_framework.response import Response

BASE_URL = "http://127.0.0.1:8000/" 

@api_view(['POST'])
def signup(request):
    try:
        data = json.loads(request.body)

        id          = data['id']
        password    = data['password']
        name        = data['name']
        cell        = data['cell']
        digit       = data['digit']
        birth       = data['birth']

        if User.object.filter(id=id).exists():
            return JsonResponse({'message' : 'ALREADY_EXIST'}, status = 400)

        user = User.object.create_user(id=id, password=password, name=name, digit=digit, birth=birth, cell=cell)

        token = Token.objects.create(user=user)
        return JsonResponse({'message' : 'SUCCESS', 'token' : token.key}, status=200)

    except KeyError:
        return JsonResponse({'message' : 'KEY_ERROR'}, status=400)

@api_view(['POST'])
def login(request):
    try:
        data = json.loads(request.body)

        id = data['id']
        password = data['password']

        user = User.object.filter(id=id)

        if not check_password(password, user.get().password):
            return JsonResponse({'message' : 'WRONG_PASSWORD'})
        
        token = Token.objects.get(user=user.get())

        is_leader = user.get().is_staff
        
        return JsonResponse({'message' : 'LOGIN_SUCCESS', 'token' : token.key, 'is_leader' : is_leader, "name" : user.get().name, 
        "cell" : user.get().cell}, status=200)
    except:
        return JsonResponse({'message' : 'LOGIN_FAILED'})

@api_view(['POST'])
def logout(request):
    auth.logout(request)
    return redirect(BASE_URL)
