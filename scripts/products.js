         // Array de produtos
        const products = [
            {
                id: 1,
                name: "Cimento Portland CP-II",
                category: "construcao",
                price: 28.90,
                description: "Cimento de alta qualidade para construção civil, ideal para obras residenciais e comerciais.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23ddd' width='200' height='200'/%3E%3Ctext fill='%23999' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ECimento%3C/text%3E%3C/svg%3E",
                badge: "Mais Vendido"
            },
            {
                id: 2,
                name: "Tijolo Cerâmico 8 Furos",
                category: "construcao",
                price: 0.65,
                description: "Tijolo cerâmico tradicional de 8 furos, perfeito para alvenaria de vedação.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23b85450' width='200' height='200'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ETijolo%3C/text%3E%3C/svg%3E"
            },
            {
                id: 3,
                name: "Tinta Acrílica Premium 18L",
                category: "acabamento",
                price: 185.50,
                description: "Tinta acrílica de alta cobertura e durabilidade, disponível em diversas cores.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%234a90e2' width='200' height='200'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ETinta%3C/text%3E%3C/svg%3E",
                badge: "Promoção"
            },
            {
                id: 4,
                name: "Cabo Flexível 2,5mm²",
                category: "eletrica",
                price: 4.90,
                description: "Cabo flexível para instalações elétricas residenciais e comerciais.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f5a623' width='200' height='200'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ECabo%3C/text%3E%3C/svg%3E"
            },
            {
                id: 5,
                name: "Tubo PVC 100mm",
                category: "hidraulica",
                price: 45.30,
                description: "Tubo PVC para esgoto e águas pluviais, 6 metros de comprimento.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%236c757d' width='200' height='200'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ETubo PVC%3C/text%3E%3C/svg%3E"
            },
            {
                id: 6,
                name: "Furadeira de Impacto 500W",
                category: "ferramentas",
                price: 189.90,
                description: "Furadeira de impacto profissional com maleta e brocas incluídas.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23dc3545' width='200' height='200'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EFuradeira%3C/text%3E%3C/svg%3E",
                badge: "Novo"
            },
            {
                id: 7,
                name: "Cerâmica 45x45cm",
                category: "acabamento",
                price: 24.90,
                description: "Cerâmica esmaltada para piso e parede, design moderno e elegante.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23e9ecef' width='200' height='200'/%3E%3Ctext fill='%23495057' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ECerâmica%3C/text%3E%3C/svg%3E"
            },
            {
                id: 8,
                name: "Areia Lavada - 1m³",
                category: "construcao",
                price: 45.00,
                description: "Areia lavada de qualidade superior para construção e acabamento.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23ffc107' width='200' height='200'/%3E%3Ctext fill='%23212529' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EAreia%3C/text%3E%3C/svg%3E"
            },
            {
                id: 9,
                name: "Interruptor Simples",
                category: "eletrica",
                price: 12.50,
                description: "Interruptor simples de sobrepor, padrão brasileiro com garantia.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23fff' stroke='%23dee2e6' stroke-width='2' width='200' height='200'/%3E%3Ctext fill='%23495057' font-family='Arial' font-size='12' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EInterruptor%3C/text%3E%3C/svg%3E"
            },
            {
                id: 10,
                name: "Martelo Unha 25mm",
                category: "ferramentas",
                price: 35.90,
                description: "Martelo unha com cabo de madeira, ideal para carpintaria e construção.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%236f42c1' width='200' height='200'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EMartelo%3C/text%3E%3C/svg%3E"
            },
            {
                id: 11,
                name: "Registro Esfera 3/4",
                category: "hidraulica",
                price: 28.70,
                description: "Registro esfera em bronze para controle de fluxo de água.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%2320c997' width='200' height='200'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ERegistro%3C/text%3E%3C/svg%3E"
            },
            {
                id: 12,
                name: "Massa Corrida 25kg",
                category: "acabamento",
                price: 42.80,
                description: "Massa corrida para preparação de paredes antes da pintura.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23fd7e14' width='200' height='200'/%3E%3Ctext fill='%23fff' font-family='Arial' font-size='12' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EMassa Corrida%3C/text%3E%3C/svg%3E"
            }
        ];

        // Carrinho de compras
        let cart = [];
        let currentFilter = 'todos';

        // Funções de formatação
        function formatPrice(price) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(price);
        }

        // Renderizar produtos
        function renderProducts(productsToRender = products) {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = '';

            productsToRender.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image" style="background-image: url('${product.image}')">
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    </div>
                    <div class="product-info">
                        <div class="product-category">${getCategoryName(product.category)}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${formatPrice(product.price)}</div>
                        <div class="product-actions">
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">
                                🛒 Adicionar
                            </button>
                            <button class="btn btn-secondary" onclick="viewProduct(${product.id})" title="Ver detalhes">
                                👁️
                            </button>
                        </div>
                    </div>
                `;
                grid.appendChild(productCard);
            });
        }

        // Filtrar produtos
        function filterProducts(category) {
            currentFilter = category;
            
            // Atualizar botões ativos
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Filtrar e renderizar
            const filteredProducts = category === 'todos' 
                ? products 
                : products.filter(product => product.category === category);
            
            renderProducts(filteredProducts);
        }

        // Obter nome da categoria
        function getCategoryName(category) {
            const categories = {
                'construcao': 'Construção',
                'acabamento': 'Acabamento',
                'eletrica': 'Elétrica',
                'hidraulica': 'Hidráulica',
                'ferramentas': 'Ferramentas'
            };
            return categories[category] || category;
        }

        // Adicionar ao carrinho
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }

            updateCartUI();
            showAddedToCartMessage(product.name);
        }

        // Mostrar mensagem de produto adicionado
        function showAddedToCartMessage(productName) {
            // Criar um toast simples
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background-color: #28a745;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 5px;
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
            `;
            toast.innerHTML = `✅ ${productName} adicionado ao carrinho!`;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }

        // Atualizar interface do carrinho
        function updateCartUI() {
            const cartCount = document.getElementById('cart-count');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;

            renderCartItems();
            updateCartTotal();
        }

        // Renderizar itens do carrinho
        function renderCartItems() {
            const cartBody = document.getElementById('cart-body');
            
            if (cart.length === 0) {
                cartBody.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛒</div>
                        <p>Seu carrinho está vazio</p>
                        <p>Adicione alguns produtos para começar!</p>
                    </div>
                `;
                return;
            }

            cartBody.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remover">🗑️</button>
                </div>
            `).join('');
        }

        // Atualizar quantidade
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        // Remover do carrinho
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        // Atualizar total do carrinho
        function updateCartTotal() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('cart-total').textContent = formatPrice(total);
        }

        // Toggle do modal do carrinho
        function toggleCart() {
            const modal = document.getElementById('cart-modal');
            modal.classList.toggle('active');
        }

        // Ver detalhes do produto
        function viewProduct(productId) {
            const product = products.find(p => p.id === productId);
            alert(`Detalhes do produto:\n\n${product.name}\n${product.description}\nPreço: ${formatPrice(product.price)}\nCategoria: ${getCategoryName(product.category)}`);
        }

        // Finalizar compra
        function checkout() {
            if (cart.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const itemsList = cart.map(item => `${item.name} (${item.quantity}x)`).join('\n');
            
            const message = `Finalizar compra:\n\n${itemsList}\n\nTotal: ${formatPrice(total)}\n\nObrigado pela preferência! Em breve você será redirecionado para o pagamento.`;
            
            alert(message);
            
            // Limpar carrinho após "compra"
            cart = [];
            updateCartUI();
            toggleCart();
        }

        // Fechar modal ao clicar fora
        document.getElementById('cart-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                toggleCart();
            }
        });

        // Adicionar estilos de animação
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        // Inicializar a página
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            updateCartUI();
        });

        // Renderizar produtos na inicialização
        renderProducts();