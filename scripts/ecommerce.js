// Produtos
const products = [
  {
    id: 1,
    name: "Cimento Portland CP-II",
    category: "construcao",
    price: 28.90,
    description: "Cimento de alta qualidade para construção civil, ideal para obras residenciais e comerciais.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5f5f5' width='200' height='200'/%3E%3Crect fill='%23666' width='160' height='140' x='20' y='30' rx='5'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='12' x='50%25' y='45%25' text-anchor='middle' dy='.3em'%3ECimento%3C/text%3E%3Ctext fill='%23fff' font-family='Arial' font-size='10' x='50%25' y='55%25' text-anchor='middle' dy='.3em'%3EPortland%3C/text%3E%3C/svg%3E",
    badge: "Mais Vendido",
    rating: 4.8
  },
  {
    id: 2,
    name: "Tijolo Cerâmico 8 Furos",
    category: "construcao",
    price: 0.65,
    description: "Tijolo cerâmico tradicional de 8 furos, perfeito para alvenaria de vedação.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5f5f5' width='200' height='200'/%3E%3Crect fill='%23b85450' width='160' height='80' x='20' y='60' rx='3'/%3E%3Ccircle fill='%23a04643' cx='60' cy='85' r='8'/%3E%3Ccircle fill='%23a04643' cx='100' cy='85' r='8'/%3E%3Ccircle fill='%23a04643' cy='85' cx='140' r='8'/%3E%3Ccircle fill='%23a04643' cx='60' cy='115' r='8'/%3E%3Ccircle fill='%23a04643' cx='100' cy='115' r='8'/%3E%3Ccircle fill='%23a04643' cx='140' cy='115' r='8'/%3E%3C/svg%3E",
    rating: 4.5
  },
  {
    id: 3,
    name: "Tinta Acrílica Premium 18L",
    category: "acabamento",
    price: 185.50,
    description: "Tinta acrílica de alta cobertura e durabilidade, disponível em diversas cores.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5f5f5' width='200' height='200'/%3E%3Crect fill='%234a90e2' width='120' height='140' x='40' y='30' rx='5'/%3E%3Crect fill='%23357abd' width='120' height='20' x='40' y='30' rx='5'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='12' x='50%25' y='55%25' text-anchor='middle' dy='.3em'%3ETinta%3C/text%3E%3Ctext fill='%23fff' font-family='Arial' font-size='10' x='50%25' y='65%25' text-anchor='middle' dy='.3em'%3E18L%3C/text%3E%3C/svg%3E",
    badge: "Promoção",
    rating: 4.7
  },
  {
    id: 4,
    name: "Cabo Flexível 2,5mm²",
    category: "eletrica",
    price: 4.90,
    description: "Cabo flexível para instalações elétricas residenciais e comerciais.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5f5f5' width='200' height='200'/%3E%3Ccircle fill='%23333' cx='100' cy='100' r='70'/%3E%3Ccircle fill='%23f5a623' cx='100' cy='100' r='50'/%3E%3Ccircle fill='%23333' cx='100' cy='100' r='25'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='8' x='50%25' y='45%25' text-anchor='middle' dy='.3em'%3ECabo%3C/text%3E%3Ctext fill='%23fff' font-family='Arial' font-size='8' x='50%25' y='55%25' text-anchor='middle' dy='.3em'%3E2.5mm²%3C/text%3E%3C/svg%3E",
    rating: 4.6
  },
  {
    id: 5,
    name: "Tubo PVC 100mm",
    category: "hidraulica",
    price: 45.30,
    description: "Tubo PVC para esgoto e águas pluviais, 6 metros de comprimento.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5f5f5' width='200' height='200'/%3E%3Crect fill='%236c757d' width='140' height='30' x='30' y='85' rx='15'/%3E%3Crect fill='%23495057' width='140' height='15' x='30' y='85' rx='7'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='10' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EPVC 100mm%3C/text%3E%3C/svg%3E",
    rating: 4.4
  },
  {
    id: 6,
    name: "Furadeira de Impacto 500W",
    category: "ferramentas",
    price: 189.90,
    description: "Furadeira de impacto profissional com maleta e brocas incluídas.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5f5f5' width='200' height='200'/%3E%3Crect fill='%23dc3545' width='120' height='60' x='40' y='70' rx='5'/%3E%3Crect fill='%23333' width='60' height='15' x='140' y='90' rx='3'/%3E%3Ccircle fill='%23666' cx='70' cy='100' r='15'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='10' x='45%25' y='50%25' text-anchor='middle' dy='.3em'%3EFuradeira%3C/text%3E%3Ctext fill='%23fff' font-family='Arial' font-size='8' x='45%25' y='58%25' text-anchor='middle' dy='.3em'%3E500W%3C/text%3E%3C/svg%3E",
    badge: "Novo",
    rating: 4.9
  },
  {
    id: 7,
    name: "Cerâmica 45x45cm",
    category: "acabamento",
    price: 24.90,
    description: "Cerâmica esmaltada para piso e parede, design moderno e elegante.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5f5f5' width='200' height='200'/%3E%3Crect fill='%23e9ecef' width='140' height='140' x='30' y='30' rx='3'/%3E%3Cline stroke='%23adb5bd' stroke-width='1' x1='100' y1='30' x2='100' y2='170'/%3E%3Cline stroke='%23adb5bd' stroke-width='1' x1='30' y1='100' x2='170' y2='100'/%3E%3Ctext fill='%23495057' font-family='Arial' font-size='10' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E45x45cm%3C/text%3E%3C/svg%3E",
    rating: 4.3
  },
  {
    id: 8,
    name: "Areia Lavada - 1m³",
    category: "construcao",
    price: 45.00,
    description: "Areia lavada de qualidade superior para construção e acabamento.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5f5f5' width='200' height='200'/%3E%3Cpath fill='%23ffc107' d='M30 120 Q100 80 170 120 L170 160 Q100 120 30 160 Z'/%3E%3Ccircle fill='%23f8b500' cx='60' cy='130' r='3'/%3E%3Ccircle fill='%23f8b500' cx='140' cy='125' r='4'/%3E%3Ccircle fill='%23f8b500' cx='100' cy='140' r='2'/%3E%3Ctext fill='%23212529' font-family='Arial' font-size='12' x='50%25' y='40%25' text-anchor='middle' dy='.3em'%3EAreia Lavada%3C/text%3E%3Ctext fill='%23212529' font-family='Arial' font-size='10' x='50%25' y='48%25' text-anchor='middle' dy='.3em'%3E1m³%3C/text%3E%3C/svg%3E",
    rating: 4.2
  }
];

const categories = {
  'todos': 'Todos os Produtos',
  'construcao': 'Construção',
  'acabamento': 'Acabamento',
  'eletrica': 'Elétrica',
  'hidraulica': 'Hidráulica',
  'ferramentas': 'Ferramentas'
};

// Estado da aplicação
let cart = [];
let filteredProducts = products;
let selectedCategory = 'todos';

// Carregar carrinho do localStorage
function loadCart() {
  const savedCart = localStorage.getItem('redemac-cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartBadge();
  }
}

// Salvar carrinho no localStorage
function saveCart() {
  localStorage.setItem('redemac-cart', JSON.stringify(cart));
}

// Formatar preço
function formatPrice(price) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
}

// Criar estrelas de avaliação
function createStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.floor(rating);
    stars += `<svg class="star" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
    </svg>`;
  }
  return stars;
}

// Renderizar produtos
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  filteredProducts.forEach(product => {
    const badge = product.badge ? 
      `<span class="product-badge badge-${product.badge === 'Mais Vendido' ? 'bestseller' : product.badge === 'Promoção' ? 'promotion' : 'new'}">${product.badge}</span>` : '';
    
    const rating = product.rating ? 
      `<div class="product-rating">
        <div class="stars">${createStars(product.rating)}</div>
        <span class="rating-text">(${product.rating})</span>
      </div>` : '';

    const productCard = `
      <div class="product-card">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          ${badge}
        </div>
        
        <div class="product-content">
          <div class="product-category">${categories[product.category]}</div>
          <h3 class="product-name">${product.name}</h3>
          ${rating}
          <p class="product-description">${product.description}</p>
          
          <div class="product-footer">
            <span class="product-price">${formatPrice(product.price)}</span>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
              <svg class="plus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
    
    grid.innerHTML += productCard;
  });
}

// Filtrar produtos
function filterProducts(category) {
  selectedCategory = category;
  
  // Atualizar botões ativos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Filtrar produtos
  if (category === 'todos') {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(product => product.category === category);
  }
  
  renderProducts();
}

// Adicionar ao carrinho
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart();
  updateCartBadge();
  renderCartItems();
}

// Atualizar quantidade
function updateQuantity(productId, change) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity += change;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  
  saveCart();
  updateCartBadge();
  renderCartItems();
  renderSummaryItems();
}

// Remover do carrinho
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
  renderSummaryItems();
}

// Atualizar badge do carrinho
function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Calcular total
function getTotalPrice() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Renderizar itens do carrinho
function renderCartItems() {
  const cartContent = document.getElementById('cart-content');
  const cartFooter = document.getElementById('cart-footer');
  
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        <svg class="empty-cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Seu carrinho está vazio</p>
      </div>
    `;
    cartFooter.style.display = 'none';
  } else {
    const itemsHtml = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-price">${formatPrice(item.price)}</p>
          <div class="cart-item-controls">
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button class="quantity-btn remove" onclick="removeFromCart(${item.id})">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3,6 5,6 21,6"></polyline>
                <path d="m19,6v14a2,2 0 0,1-2,2H7a2,2 0 0,1-2-2V6m3,0V4a2,2 0 0,1,2-2h4a2,2 0 0,1,2,2v2"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="cart-item-total">
          <p class="cart-item-total-price">${formatPrice(item.price * item.quantity)}</p>
        </div>
      </div>
    `).join('');
    
    cartContent.innerHTML = `<div class="cart-items">${itemsHtml}</div>`;
    cartFooter.style.display = 'block';
    
    document.getElementById('total-price').textContent = formatPrice(getTotalPrice());
  }
}

// Toggle carrinho
function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.classList.toggle('show');
  
  if (cartModal.classList.contains('show')) {
    renderCartItems();
  }
}

// Ir para checkout
function goToCheckout() {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }
  
  document.getElementById('cart-modal').classList.remove('show');
  document.getElementById('checkout-page').style.display = 'block';
  renderSummaryItems();
}

// Voltar à loja
function backToStore() {
  document.getElementById('checkout-page').style.display = 'none';
}

// Renderizar itens do resumo
function renderSummaryItems() {
  const summaryItems = document.getElementById('summary-items');
  const summaryPrice = document.getElementById('summary-price');
  
  const itemsHtml = cart.map(item => `
    <div class="summary-item">
      <img src="${item.image}" alt="${item.name}" class="summary-item-image">
      <div class="summary-item-details">
        <h4 class="summary-item-name">${item.name}</h4>
        <p class="summary-item-qty">Qtd: ${item.quantity}</p>
      </div>
      <div class="summary-item-price">${formatPrice(item.price * item.quantity)}</div>
    </div>
  `).join('');
  
  summaryItems.innerHTML = itemsHtml;
  summaryPrice.textContent = formatPrice(getTotalPrice());
}

// Finalizar compra
function finalizePurchase() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const cep = document.getElementById('cep').value;
  const rua = document.getElementById('rua').value;
  const numero = document.getElementById('numero').value;
  const bairro = document.getElementById('bairro').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  
  if (!nome || !telefone || !rua || !numero || !bairro || !cidade || !estado) {
    alert('Por favor, preencha todos os campos obrigatórios!');
    return;
  }

  const itemsList = cart.map(item => 
    `• ${item.name} - Qtd: ${item.quantity} - ${formatPrice(item.price * item.quantity)}`
  ).join('\n');

  const total = formatPrice(getTotalPrice());

  const message = `🛒 *PEDIDO REDEMAC*

👤 *DADOS DO CLIENTE:*
Nome: ${nome}
Telefone: ${telefone}
${email ? `Email: ${email}` : ''}

📍 *ENDEREÇO DE ENTREGA:*
${rua}, ${numero}
${bairro} - ${cidade}/${estado}
CEP: ${cep}

🧱 *ITENS DO PEDIDO:*
${itemsList}

💰 *TOTAL: ${total}*

Aguardando confirmação do pedido!`;

  const whatsappUrl = `https://wa.me/5551985851247?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // Limpar carrinho
  cart = [];
  localStorage.removeItem('redemac-cart');
  updateCartBadge();
  alert('Pedido enviado via WhatsApp! Obrigado pela preferência.');
  backToStore();
}

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
  loadCart();
  renderProducts();
  updateCartBadge();
});

// Fechar modal clicando fora
document.getElementById('cart-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    toggleCart();
  }
});
