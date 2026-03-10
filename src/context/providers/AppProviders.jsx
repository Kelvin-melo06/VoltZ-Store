import  CartProvider  from "../CartContext"
import  ModalProvider  from "../ModalContext"

const AppProviders = () => {
  return (
    
    <CartProvider>
        <ModalProvider>
            {children}
        </ModalProvider>
    </CartProvider>
  )
}

export default AppProviders