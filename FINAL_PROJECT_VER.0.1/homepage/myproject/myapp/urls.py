from . import views

from django.contrib import admin
from django.urls import path
from django.conf import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('theory/', views.theory, name='theory'),
    path('simulation/', views.simulation, name='simulation'),
    path('game/', views.game, name='game'),
    path('baitap/', views.baitap, name='baitap'),
    path('tailieu/', views.tailieu, name='tailieu'),
    path('video/', views.video, name='video'),
]
