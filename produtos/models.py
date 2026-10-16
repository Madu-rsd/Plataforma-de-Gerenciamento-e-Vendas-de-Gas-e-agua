from django.db import models
from django.db import models


class Produtos(models.Model):
    nome = models.CharField(max_length=50, unique=True)
    preco = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.nome