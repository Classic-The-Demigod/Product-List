// import Image from "./assets/image-waffle-desktop.jpg";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";
import OrderModal from "./components/OrderModal";
import { useState } from "react"
// import { useCart } from "./CartContext";


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { resetCart } = useCart()
  
  // const { cartItems, updateCart } = useCart();

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleStartNewOrder = () => {

    // cartItems.forEach((item) => {
    //   updateCart(item, -item.quantity);
    // });
   

    
    // resetCart()
    setIsModalOpen(false);
  };
  
  return (
    <CartProvider>
      <div className="bg-rose-50 relative">
        <div className="flex px-4 md:px-0 gap-8 md:container mx-auto py-10  justify-center md:justify-between md:items-start flex-col md:flex-row">
          <ProductList />
          <Cart onConfirmOrder={handleConfirmOrder}/>
        </div>
        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onStartNewOrder={handleStartNewOrder}
        />
      </div>
    </CartProvider>
  );
}

export default App;
