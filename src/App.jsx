// import Image from "./assets/image-waffle-desktop.jpg";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";
import Order from "./components/Order";


function App() {
  
  return (
    <>
      <CartProvider>
        <div className="bg-rose-50 relative">
          <div className="flex px-4 md:px-0 gap-8 md:container mx-auto py-10  justify-center md:justify-between md:items-start flex-col md:flex-row">
            <ProductList />
            <Cart />
          </div>
          <Order />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
