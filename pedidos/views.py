from django.shortcuts import render

# Create your views here.

def lista_pedidos(request):
    return render(request, 'pedidos/lista.html')