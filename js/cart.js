console.log("cart.js carregado");

// --- Lista de produtos do carrinho no localStorage ---
function loadCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// --- Adiciona produto ao carrinho ---
function addToCart(product) {
  if(!product || !product.id){
     console.error("addToCart: product inválido", product);
     return;
   }

  const cart = loadCart();
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  console.log(`Produto adicionado: ${product.name} (id ${product.id})`, cart);
}

// --- Remove produto pelo ID ---
function removeFromCart(productId) {
  let cart = loadCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  console.log("Produto removido do carrinho:", productId, "novo carrinho:", cart);
}

// --- Calcula total do carrinho ---
function getCartTotal() {
  const cart = loadCart();

  let total = 0;

  for(let item of cart){
    total += (item.price || 0) * (item.quantity || 0);
  }

  return total.toFixed(2);
}
