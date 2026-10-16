
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Perfil


class UsuarioForm(UserCreationForm):
    nome = forms.CharField(max_length=150, label='Nome')
    email = forms.EmailField(label='E-mail')
    contato = forms.CharField(max_length=20, label='Contato')

    class Meta:
        model = User
        fields = ['username', 'nome', 'email']

    def save(self, commit=True):
        usuario = super().save(commit=False)
        usuario.first_name = self.cleaned_data['nome']
        usuario.email = self.cleaned_data['email']

        if commit:
            usuario.save()
            Perfil.objects.create(
                usuario=usuario,
                contato=self.cleaned_data['contato']
            )

        return usuario
