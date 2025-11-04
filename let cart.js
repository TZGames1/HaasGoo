function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    icon.textContent = '🌞';
  } else {
    body.classList.add('dark-mode');
    icon.textContent = '🌙';
  }
}

let cart = [];

function addToCart(title, price) {
  cart.push({ title, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} — ${item.price} papers`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: ${total} papers`;
}

function placeOrder(event) {
  event.preventDefault();
  const name = document.getElementById('buyer-name').value;
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  let summary = `Order for ${name}:\n`;
  cart.forEach(item => {
    summary += `- ${item.title} (${item.price} papers)\n`;
  });

  summary += `Total: ${cart.reduce((sum, item) => sum + item.price, 0)} papers`;

  alert(summary);
  cart = [];
  updateCart();
  document.getElementById('buyer-name').value = '';
}

