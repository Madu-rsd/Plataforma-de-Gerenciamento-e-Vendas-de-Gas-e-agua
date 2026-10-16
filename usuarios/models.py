from django.db import models
from django.contrib.auth.models import User


class Perfil(models.Model):
    TIPOS_USUARIO = [
        ('cliente', 'Cliente'),
        ('entregador', 'Entregador'),
        ('administrador', 'Administrador'),
    ]

    usuario = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )
    contato = models.CharField(max_length=20)
    tipo = models.CharField(
        max_length=20,
        choices=TIPOS_USUARIO,
        default='cliente'
    )

    def __str__(self):
        return self.usuario.username
