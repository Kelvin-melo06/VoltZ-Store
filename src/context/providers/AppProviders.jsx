import  CartProvider  from "../CartContext"
import  ModalProvider  from "../ModalContext"

const AppProviders = ({children}) => {
  return (
    
    <CartProvider>
        <ModalProvider>
            {children}
        </ModalProvider>
    </CartProvider>
  )
}

export default AppProviders