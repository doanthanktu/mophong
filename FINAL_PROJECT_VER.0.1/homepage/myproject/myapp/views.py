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
