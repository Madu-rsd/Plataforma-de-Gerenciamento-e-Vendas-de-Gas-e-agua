from django.urls import path
from . import views


urlpatterns = [
    path('', views.dashboard, name='tela_inicial'),
    path('login/', views.login_view, name='login'),
    path('cadastro/', views.cadastro_view, name='cadastro')
]