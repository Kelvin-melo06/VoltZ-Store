import "./App.css";
import Header from "./Components/Layout/header/header";
import HomeSections from "./Components/sections/HomeSections.jsx";
import { useEffect } from "react";
import { CartContext } from "./context/CartContext.jsx";
import { useContext } from "react";

function App() {
  const { cart } = useContext(CartContext);

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    console.log("Carrinho atualizado:", cart);
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <div>
      <Header/>
      <HomeSections  />
    </div>
  );
}

export default App;
