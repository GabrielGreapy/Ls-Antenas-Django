from django.shortcuts import render


def index(request):
    return render(request, 'Nucleo/index.html')
# Create your views here.
