import Header from "@/Components/Layout/header/header";
import HomeSections from "@/Components/sections/HomeSections.jsx";
import useFadeUp from "@/hooks/useFadeUp.js";
import "@/Components/ui/modal/CartModal.jsx";
import CartModal from "@/Components/ui/modal/CartModal.jsx";



function App() {
  useFadeUp();
  return (
    <div>
      <Header/>
      <CartModal/>
      <HomeSections  />
    </div>
  );
}

export default App;
