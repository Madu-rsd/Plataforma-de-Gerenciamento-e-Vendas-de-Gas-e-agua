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

## Instalação e execução

Siga os passos abaixo para configurar e executar o projeto em seu computador.

### 1. Clonar o repositório

Abra o terminal ou o Git Bash e execute:

```bash
git clone 
```

Substitua `URL_DO_REPOSITORIO` pelo endereço HTTPS do repositório no GitHub.

### 2. Acessar a pasta do projeto

Entre no diretório criado após a clonagem:

```bash
cd nome-da-pasta
```

### 3. Criar um ambiente virtual

O ambiente virtual permite instalar as dependências do projeto de maneira isolada, evitando conflitos com outros projetos Python.

Execute:

```bash
python -m venv venv
```

### 4. Ativar o ambiente virtual

**No Windows (PowerShell):**

```powershell
.\venv\Scripts\Activate.ps1
```

**No Windows (Prompt de Comando):**

```cmd
venv\Scripts\activate
```

**No Linux ou macOS:**

```bash
source venv/bin/activate
```

Após a ativação, o nome do ambiente virtual geralmente aparecerá no início da linha do terminal.

### 5. Instalar as dependências

Com o ambiente virtual ativado, instale as dependências do projeto:

```bash
pip install -r requirements.txt
```

O arquivo `requirements.txt` deve estar disponível na pasta principal do repositório e conter as bibliotecas necessárias para executar a aplicação.

**Caso o arquivo ainda não exista**, ele deverá ser criado no ambiente de desenvolvimento e enviado ao GitHub. Para isso, com as dependências instaladas, execute:

```bash
pip freeze > requirements.txt
```

### 6. Aplicar as migrações do banco de dados

Execute o comando abaixo para preparar o banco de dados conforme as configurações e os modelos definidos no projeto:

```bash
python manage.py migrate
```

### 7. Criar um usuário administrador (opcional)

Caso seja necessário acessar a área administrativa do Django, crie um superusuário:

```bash
python manage.py createsuperuser
```

Em seguida, informe os dados solicitados pelo terminal, como nome de usuário, e-mail e senha.

### 8. Iniciar o servidor

Para executar a aplicação localmente, utilize:

```bash
python manage.py runserver
```

### 9. Acessar o sistema

Após iniciar o servidor, abra o navegador e acesse:

**Aplicação:**
http://127.0.0.1:8000/

**Área administrativa do Django (quando configurada):**
http://127.0.0.1:8000/admin/

Para encerrar a execução do servidor, pressione `CTRL + C` no terminal.

## Estrutura do projeto

O projeto utiliza a organização de arquivos do Django, com templates para as páginas HTML e arquivos estáticos para a estilização.

A estrutura geral inclui:

```text
Fernando-Agua-e-Gas/
│
├── manage.py
│
├── nome_do_projeto/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── nome_do_app/
│   ├── migrations/
│   ├── templates/
│   ├── views.py
│   ├── urls.py
│   ├── models.py
│   └── admin.py
│
├── static/
│   └── css/
│       └── style.css
│
├── requirements.txt
└── README.md
```

*Observação: os nomes dos diretórios `nome_do_projeto` e `nome_do_app` são ilustrativos e devem corresponder aos nomes utilizados na estrutura real do repositório.*

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
