// import Image from "./assets/image-waffle-desktop.jpg";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <div className="bg-rose-50">
          <div className="flex container mx-auto space-x-6 py-10 justify-between items-start">
            <ProductList />
            <Cart />
          </div>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
