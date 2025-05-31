let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Atualiza contador do carrinho
function updateCartCount() {
    document.getElementById('cart-count').textContent = cartItems.length;
}

// Abre/fecha modal do carrinho
function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('active');
    renderCartItems();
}

// Renderiza itens no modal do carrinho
function renderCartItems() {
    const cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = "";

    let total = 0;

    cartItems.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
            <button onclick="removeItem(${index})">❌</button>
        `;
        cartBody.appendChild(div);
        total += item.preco;
    });

    document.getElementById("cart-total").textContent = `R$ ${total.toFixed(2)}`;
}

// Remove item do carrinho
function removeItem(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartCount();
    renderCartItems();
}

// Abrir modal de checkout
function checkout() {
    if (cartItems.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }
    document.getElementById('checkout-modal').style.display = 'block';
}

// Fechar modal de checkout
function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Enviar pedido para o WhatsApp
function submitCheckout() {
    const form = document.getElementById("checkout-form");

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const address = form.address.value.trim();
    const neighborhood = form.neighborhood.value;
    const delivery = form.delivery.value;
    const payment = form.payment.value;

    if (!firstName || !lastName || !address || !neighborhood || !payment) {
        alert("Preencha todos os campos.");
        return;
    }

    let total = cartItems.reduce((sum, item) => sum + item.preco, 0);
    let frete = 0;

    if (delivery === "entregar") {
        frete = 10;
        total += frete;
    }

    const itemsList = cartItems.map(item => `• ${item.nome} - R$ ${item.preco.toFixed(2)}`).join("\n");

    const message = `
*Pedido via Loja Online Redemac Rochas*
👤 *Cliente:* ${firstName} ${lastName}
📍 *Endereço:* ${address}, ${neighborhood}
🚚 *Entrega:* ${delivery === "entregar" ? "Entregar no endereço (R$ 10,00)" : "Retirar no local"}
💳 *Pagamento:* ${payment}

🛒 *Itens:*
${itemsList}

📦 *Frete:* R$ ${frete.toFixed(2)}
💰 *Total:* R$ ${total.toFixed(2)}
`.trim();

    const phone = "555199999999"; // Substitua pelo número da empresa
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Limpa carrinho e redireciona
    localStorage.removeItem('cart');
    window.location.href = url;
}

// Inicializa carrinho ao carregar a página
updateCartCount();
