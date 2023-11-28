from django.shortcuts import render
from django.http import request

def index(request):
    return render(request, 'index.html')


def request_to_detail(request, id):
    return render(request, 'index.html')

# Create your views here.
