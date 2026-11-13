# Fernando Água e Gás — Plataforma de Gerenciamento e Vendas de Gás e Água

## Sobre o projeto

O **Fernando Água e Gás** é um projeto de desenvolvimento de uma plataforma web voltada para o gerenciamento e a comercialização de água e gás. A aplicação busca facilitar a visualização dos produtos disponíveis, a realização de pedidos pelos clientes e o gerenciamento das atividades do estabelecimento.

O projeto está sendo desenvolvido como atividade acadêmica do curso Técnico em Informática do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN).

## Objetivo

Desenvolver uma plataforma web que facilite o processo de compra de água e gás, oferecendo uma interface organizada para os clientes e recursos que auxiliem no gerenciamento comercial do estabelecimento.

## Funcionalidades

### Funcionalidades implementadas

Até o momento, foi desenvolvida a parte visual (front-end) do sistema, contemplando as seguintes páginas e elementos:

### 1. Barra de navegação e rodapé

- Identificação do estabelecimento pelo nome Fernando Água e Gás.
- Menu de navegação com as opções Início, Meus Pedidos, Produtos e Contato.
- Botão de acesso à página de login.
- Rodapé com informações de direitos reservados e contato.

### 2. Tela inicial (Home)

- Mensagem de boas-vindas aos visitantes.
- Apresentação da proposta de realização de pedidos de água e gás.
- Botão de acesso ao catálogo de produtos.
- Seção informativa sobre os serviços e as entregas realizadas na cidade.

### 3. Tela de login

- Interface de autenticação com campos para e-mail e senha.
- Identidade visual com elementos relacionados à água e ao gás.
- Mensagem de validação para situações de e-mail ou senha inválidos.
- Botão para realizar o acesso.
- Link para direcionamento à página de cadastro.

### 4. Catálogo de produtos

A página apresenta os produtos comercializados pelo estabelecimento, organizados em cards com seus respectivos nomes e preços.

| **Produto** | **Preço** |
|---|---|
| Botijão de Gás P13 | R$ 120,00 |
| Botijão de Gás P45 | R$ 335,00 |
| Garrafão de Água 10L | R$ 11,00 |
| Garrafão de Água 20L | R$ 15,00 |

### 5. Tela de realização de pedidos

- Seção destinada ao preenchimento dos dados do cliente.
- Área para seleção dos produtos.
- Exibição do valor unitário dos produtos.
- Painel de resumo do pedido, apresentando os itens selecionados e o valor total.

### Funcionalidades previstas

Como o projeto ainda está em desenvolvimento, algumas funcionalidades serão implementadas nas próximas etapas, incluindo:

- Desenvolvimento da parte lógica e dinâmica do sistema.
- Integração com banco de dados.
- Implementação do cadastro e gerenciamento de produtos.
- Gerenciamento e acompanhamento dos pedidos.
- Consulta e edição de informações.
- Desenvolvimento da área administrativa e geração de relatórios.

## Tecnologias utilizadas

- **HTML5:** estruturação das páginas web.
- **CSS3:** estilização e organização visual da interface.
- **Python:** linguagem utilizada no desenvolvimento da aplicação.
- **Django:** framework utilizado para o desenvolvimento web.

*Outras tecnologias serão adicionadas à documentação conforme forem utilizadas no desenvolvimento do sistema.*

## Pré-requisitos

Para instalar e executar o projeto localmente, é necessário possuir:

- Python instalado (em versão compatível com o projeto).
- pip, gerenciador de pacotes do Python.
- Git instalado.
- Visual Studio Code ou outro editor de código (opcional).
- Navegador web atualizado.

Para verificar se o Python e o Git estão instalados, utilize os comandos:

```bash
python --version
pip --version
git --version
```

No Windows, caso o comando `python` não funcione, tente:

```bash
py --version
```

## Como configurar o projeto na sua máquina

### 1. Clone o repositório

```bash
git clone https://github.com/Madu-rsd/Plataforma-de-Gerenciamento-e-Vendas-de-Gas-e-agua.git
cd Plataforma-de-Gerenciamento-e-Vendas-de-Gas-e-agua
```

O comando `git clone` baixa uma cópia completa do projeto para a sua máquina.

### 2. Crie o ambiente virtual

O ambiente virtual isola as dependências do projeto do resto do sistema:

```bash
python -m venv ./venv
```

Ative o ambiente.

No Windows (Prompt de Comando):

```cmd
venv\Scripts\activate
```

No Windows (PowerShell):

```powershell
.\venv\Scripts\Activate.ps1
```

No Linux ou Mac:

```bash
source venv/bin/activate
```

Quando ativar, o terminal passa a mostrar `(venv)` no início da linha.

### 3. Instale as dependências

O arquivo `requirements.txt` lista tudo o que o projeto precisa. Com a venv ativada, execute:

```bash
pip install -r requirements.txt
```

Isso instala o Django e o python-dotenv de uma só vez.

### 4. Crie o arquivo `.env`

Copie o arquivo modelo e renomeie para `.env`:

```bash
cp .env.example .env
```

No Windows, se o comando `cp` não funcionar:

```cmd
copy .env.example .env
```

Abra o `.env`. Ele contém:

```
SECRET_KEY=
DEBUG=True
```

A `SECRET_KEY` está vazia de propósito. Ela precisa ser gerada por cada pessoa, porque nunca é enviada para o GitHub.

### 5. Gere a sua `SECRET_KEY`

Com o ambiente ativado, execute:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

O terminal imprime uma chave aleatória, parecida com esta:

```
django-insecure-9x#k2$m4v@q7w8e9r1t2y3u4i5o6p7a8s9d0f1g2h3j4k5l6
```

### 6. Cole a chave no `.env`

Copie a chave impressa e cole no arquivo, sem aspas e sem espaços:

```
SECRET_KEY=django-insecure-9x#k2$m4v@q7w8e9r1t2y3u4i5o6p7a8s9d0f1g2h3j4k5l6
DEBUG=True
```

Cada pessoa pode usar a sua própria chave. O projeto funciona normalmente com chaves diferentes, pois ela serve apenas para assinar sessões e cookies.

### 7. Crie o banco de dados

O arquivo `db.sqlite3` também não vai para o GitHub. Cada máquina precisa criar o seu banco local:

```bash
python manage.py migrate
```

### 8. Crie um usuário administrador (opcional)

Caso seja necessário acessar a área administrativa do Django, crie um superusuário:

```bash
python manage.py createsuperuser
```

Informe nome de usuário, e-mail e senha quando o terminal solicitar.

### 9. Rode o projeto

```bash
python manage.py runserver
```

Acesse http://localhost:8000/ no navegador.

A área administrativa fica em http://localhost:8000/admin/ (quando configurada).

Para encerrar o servidor, pressione `CTRL + C` no terminal.

## Estrutura do projeto

O projeto utiliza a organização de arquivos do Django, com templates para as páginas HTML e arquivos estáticos para a estilização.

A estrutura geral inclui:

```text
Plataforma-de-Gerenciamento-e-Vendas-de-Gas-e-agua/
│
├── pedidos/
├── produtos/
├── usuarios/
│
├── setup/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── static/
│   └── css/
│       └── style.css
│
├── Templates/
│
├── venv/
│
├── .gitignore
├── db.sqlite3
├── manage.py
├── README.md
└── requirements.txt
```

## Integrantes

- Maria Clara Pinheiro Alves
- Anny Gabriele Militão de Paulo
- Maria Eduarda Rosendo de Paulo

## Instituição

Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN).

Curso Técnico em Informática.

## Status do projeto

**Em desenvolvimento.**

Atualmente, o projeto conta com a estrutura visual das principais páginas da plataforma. As funcionalidades dinâmicas, a integração com banco de dados e os demais recursos do sistema serão desenvolvidos nas próximas etapas.
