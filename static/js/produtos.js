// static/js/produtos.js
// Controla a seleção de produtos, quantidades e o resumo do pedido
// (RF01 Criar Pedido, RF02 Selecionar Produto, RF03 Informar Quantidade, RN02)

document.addEventListener('DOMContentLoaded', function () {

    // Guarda os itens já adicionados ao pedido: { id: { nome, preco, quantidade } }
    const pedido = {};

    const grid = document.getElementById('grid-produtos');
    const listaResumo = document.getElementById('resumo-itens');
    const totalValor = document.getElementById('resumo-total-valor');
    const btnFinalizar = document.getElementById('btn-finalizar');

    // Formata número para moeda brasileira (ex: 1234.5 -> "R$ 1.234,50")
    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    // Botões de + e - dentro de cada card de produto
    grid.querySelectorAll('.produto-card').forEach(function (card) {
        const spanQtd = card.querySelector('.qtd-valor');
        const btnMenos = card.querySelector('[data-acao="diminuir"]');
        const btnMais = card.querySelector('[data-acao="aumentar"]');
        const btnAdicionar = card.querySelector('.btn-adicionar');

        btnMais.addEventListener('click', function () {
            spanQtd.textContent = parseInt(spanQtd.textContent, 10) + 1;
        });

        btnMenos.addEventListener('click', function () {
            const atual = parseInt(spanQtd.textContent, 10);
            if (atual > 0) {
                spanQtd.textContent = atual - 1;
            }
        });

        btnAdicionar.addEventListener('click', function () {
            const quantidade = parseInt(spanQtd.textContent, 10);

            if (quantidade === 0) {
                alert('Escolha uma quantidade maior que zero antes de adicionar.');
                return;
            }

            const id = card.dataset.id;
            const nome = card.dataset.nome;
            const preco = parseFloat(card.dataset.preco);

            pedido[id] = { nome: nome, preco: preco, quantidade: quantidade };

            atualizarResumo();

            // Zera a quantidade do card depois de adicionar
            spanQtd.textContent = '0';
        });
    });

    function atualizarResumo() {
        const ids = Object.keys(pedido);
        listaResumo.innerHTML = '';

        if (ids.length === 0) {
            listaResumo.innerHTML = '<li class="resumo-vazio">Nenhum produto adicionado ainda.</li>';
            btnFinalizar.disabled = true;
            totalValor.textContent = formatarMoeda(0);
            return;
        }

        let total = 0;

        ids.forEach(function (id) {
            const item = pedido[id];
            const subtotal = item.preco * item.quantidade;
            total += subtotal;

            const li = document.createElement('li');
            li.innerHTML = '<span>' + item.quantidade + 'x ' + item.nome + '</span>' +
                           '<span>' + formatarMoeda(subtotal) + '</span>';
            listaResumo.appendChild(li);
        });

        totalValor.textContent = formatarMoeda(total);
        btnFinalizar.disabled = false; // RN02: só libera com pelo menos 1 produto
    }

    btnFinalizar.addEventListener('click', function () {
        // Aqui, futuramente, os dados de "pedido" serão enviados para a etapa
        // de endereço e forma de pagamento (RF04, RF05, RF06).
        console.log('Pedido montado:', pedido);
        alert('Produtos selecionados! Próxima etapa: endereço e pagamento.');
    });

});