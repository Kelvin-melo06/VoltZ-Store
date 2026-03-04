import "./App.css";
import Header from "./Components/Layout/header/header";
import HomeSections from "./Components/sections/HomeSections.jsx";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

  const saveCartToLocalStorage = (cart) =>{
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const handleAddToCart = (product) => {
    console.log("Produto adicionado ao carrinho:", product);
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Atualiza a quantidade do produto existente
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Adiciona o novo produto com quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Header cart={cart} setCart={setCart} />
      <HomeSections handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;