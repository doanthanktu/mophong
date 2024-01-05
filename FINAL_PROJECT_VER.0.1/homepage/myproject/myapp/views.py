from django.shortcuts import render, redirect

# Create your views here.
import sys
sys.path.append('myproject/myproject')


def index(request):
    return render(request, 'myapp/index.html')


def theory(request):
    return render(request, 'myapp/theory.html')


def simulation(request):
    return render(request, 'myapp/simulation.html')


def game(request):
    return render(request, 'myapp/game.html')


def baitap(request):
    return render(request, 'myapp/baitap.html')


def tailieu(request):
    return render(request, 'myapp/tailieu.html')


def video(request):
    return render(request, 'myapp/video.html')

def sel_theory(request):
    return render(request, 'myapp/sel_theory.html')

def theory_DFS(request):
    return render(request, 'myapp/theory_DFS.html')

def baitap_DFS(request):
    return render(request, 'myapp/baitap_DFS.html')


def tailieu_DFS(request):
    return render(request, 'myapp/tailieu_DFS.html')


def video_DFS(request):
    return render(request, 'myapp/video_DFS.html')
