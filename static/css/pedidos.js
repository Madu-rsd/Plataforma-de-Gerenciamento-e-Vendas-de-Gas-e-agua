// Fernando Água e Gás — lógica da tela "Realizar Pedido"
(function () {
    // ===== Catálogo de produtos por categoria =====
    const PRODUTOS = {
      gas: [
        { id: 'g13', nome: 'Botijão P13', preco: 120.00 },
        { id: 'g20', nome: 'Botijão P20', preco: 185.00 },
        { id: 'g45', nome: 'Botijão P45', preco: 410.00 },
      ],
      agua: [
        { id: 'a20', nome: 'Galão 20L', preco: 15.00 },
        { id: 'a10', nome: 'Galão 10L', preco: 10.00 },
        { id: 'am1', nome: 'Água mineral 1,5L', preco: 4.50 },
      ],
      promocoes: [
        { id: 'pk1', nome: 'Kit 1 botijão P13 + 1 galão 20L', preco: 130.00 },
        { id: 'pk2', nome: 'Kit 2 galões 20L', preco: 27.00 },
      ],
    };
  
    const estado = {
      categoriaAtiva: 'gas',
      itens: {}, // { produtoId: { produto, qtd } }
    };
  
    const tabs = document.querySelectorAll('.pedido .tab');
    const categoriaBtns = document.querySelectorAll('.pedido .categoria-btn');
    const listaProdutos = document.getElementById('lista-produtos');
    const corpoItens = document.getElementById('corpo-itens');
    const estadoVazio = document.getElementById('estado-vazio');
    const totalPedidoEl = document.getElementById('total-pedido');
    const valorTotalEl = document.getElementById('valor-total');
  
    function formatarMoeda(valor) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  
    function setCategoria(categoria) {
      estado.categoriaAtiva = categoria;
  
      [...tabs, ...categoriaBtns].forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.categoria === categoria ? 'true' : 'false');
      });
  
      renderizarProdutos();
    }
  
    function renderizarProdutos() {
      const produtos = PRODUTOS[estado.categoriaAtiva] || [];
      listaProdutos.innerHTML = produtos.map(p => `
        <div class="produto-card">
          <div class="produto-info">
            <strong>${p.nome}</strong>
            <span>${formatarMoeda(p.preco)}</span>
          </div>
          <button type="button" class="produto-add" data-id="${p.id}">Adicionar</button>
        </div>
      `).join('');
    }
  
    function encontrarProduto(id) {
      for (const categoria in PRODUTOS) {
        const achado = PRODUTOS[categoria].find(p => p.id === id);
        if (achado) return achado;
      }
      return null;
    }
  
    function adicionarItem(id) {
      const produto = encontrarProduto(id);
      if (!produto) return;
  
      if (estado.itens[id]) {
        estado.itens[id].qtd += 1;
      } else {
        estado.itens[id] = { produto, qtd: 1 };
      }
      renderizarItens();
    }
  
    function alterarQtd(id, delta) {
      const item = estado.itens[id];
      if (!item) return;
      item.qtd += delta;
      if (item.qtd <= 0) {
        delete estado.itens[id];
      }
      renderizarItens();
    }
  
    function removerItem(id) {
      delete estado.itens[id];
      renderizarItens();
    }
  
    function renderizarItens() {
      const ids = Object.keys(estado.itens);
  
      if (ids.length === 0) {
        corpoItens.innerHTML = '';
        estadoVazio.hidden = false;
        totalPedidoEl.hidden = true;
        return;
      }
  
      estadoVazio.hidden = true;
      totalPedidoEl.hidden = false;
  
      let total = 0;
  
      corpoItens.innerHTML = ids.map(id => {
        const { produto, qtd } = estado.itens[id];
        const subtotal = produto.preco * qtd;
        total += subtotal;
  
        return `
          <tr>
            <td>${produto.nome}</td>
            <td>
              <div class="qtd-controle">
                <button type="button" class="qtd-btn" data-acao="menos" data-id="${id}" aria-label="Diminuir quantidade">−</button>
                <span>${qtd}</span>
                <button type="button" class="qtd-btn" data-acao="mais" data-id="${id}" aria-label="Aumentar quantidade">+</button>
              </div>
            </td>
            <td>${formatarMoeda(produto.preco)}</td>
            <td>${formatarMoeda(subtotal)}</td>
            <td class="col-acao">
              <button type="button" class="remover-btn" data-acao="remover" data-id="${id}" aria-label="Remover item">✕</button>
            </td>
          </tr>
        `;
      }).join('');
  
      valorTotalEl.textContent = formatarMoeda(total);
    }
  
    // ===== Eventos =====
    [...tabs, ...categoriaBtns].forEach(btn => {
      btn.addEventListener('click', () => setCategoria(btn.dataset.categoria));
    });
  
    listaProdutos.addEventListener('click', (e) => {
      const btn = e.target.closest('.produto-add');
      if (btn) adicionarItem(btn.dataset.id);
    });
  
    corpoItens.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-acao]');
      if (!btn) return;
      const { acao, id } = btn.dataset;
      if (acao === 'mais') alterarQtd(id, 1);
      if (acao === 'menos') alterarQtd(id, -1);
      if (acao === 'remover') removerItem(id);
    });
  
    document.getElementById('form-pedido').addEventListener('submit', (e) => {
      e.preventDefault(); // integrar com seu envio real (fetch/API) aqui
    });
  
    // Estado inicial
    setCategoria('gas');
  })();