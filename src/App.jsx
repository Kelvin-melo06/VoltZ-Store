import "./App.css";
import Header from "./Components/Layout/header/header";
import HomeSections from "./Components/sections/HomeSections.jsx";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    
    setCart((prevCart) =>{
      const existingProduct = prevCart.find(item => item.id === product.id);
      if(existingProduct){
        return prevCart.map(item =>{
          return item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        });
      }else{
        return [...prevCart, {...product, quantity: 1}];
      }
    })
  }
  return (
    <div>
      <Header cart={cart} setCart={setCart} />
      <HomeSections handleAddToCart = {handleAddToCart} />
    </div>
  );
}

export default App;
