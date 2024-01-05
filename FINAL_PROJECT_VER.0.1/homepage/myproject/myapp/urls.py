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
    path('sel_theory/',views.sel_theory,name='sel_theory'),
    path('theory_DFS/',views.theory_DFS,name='theory_DFS'),
    path('baitap_DFS/', views.baitap_DFS, name='baitap_DFS'),
    path('tailieu_DFS/', views.tailieu_DFS, name='tailieu_DFS'),
    path('video_DFS/', views.video_DFS, name='video_DFS'),
]
