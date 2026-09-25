from django.shortcuts import render

# Create your views here.

def dashboard(request):
    return render(request, 'usuarios/dashboard.html')

def login_view(request):
    return render(request, 'usuarios/login.html')

def cadastro_view(request):
    return render(request, 'usuarios/cadastro.html')