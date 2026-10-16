from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import UsuarioForm


def dashboard(request):
    return render(request, 'usuarios/dashboard.html')


def painel_usuario(request):
    if not request.user.is_authenticated:
        return redirect('login')

    tipo = request.user.perfil.tipo

    if tipo == 'cliente':
        return render(request, 'usuarios/painel_cliente.html')

    elif tipo == 'entregador':
        return render(request, 'usuarios/painel_entregador.html')

    elif tipo == 'administrador':
        return render(request, 'usuarios/painel_administrador.html')

    return redirect('dashboard')


def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        from django.contrib.auth.models import User

        usuario_cadastrado = User.objects.filter(
            email__iexact=email
        ).first()

        if usuario_cadastrado:
            usuario = authenticate(
                request,
                username=usuario_cadastrado.username,
                password=senha
            )

            if usuario is not None:
                login(request, usuario)
                return redirect('painel_usuario')

        return render(request, 'usuarios/login.html', {
            'erro': 'E-mail ou senha inválidos.'
        })

    return render(request, 'usuarios/login.html')



def cadastro_view(request):
    if request.method == 'POST':
        form = UsuarioForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UsuarioForm()

    return render(request, 'usuarios/cadastro.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('login')


