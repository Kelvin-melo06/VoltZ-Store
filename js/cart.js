function loadCart(){
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
}

function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId){
    let cart = loadCart();
    const product = products.find(p => p.id === productId);

    const existingItem = cart.find(item => item.id === productId);

    if(existingItem){
        existingItem.quantity += 1;
    }else{
        cart.push({...products, quantity:1});
    }

    saveCart(cart);
    renderCart(cart);
}