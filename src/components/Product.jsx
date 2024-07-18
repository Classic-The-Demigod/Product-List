import { useState } from "react";
import Cart from "/assets/icon-add-to-cart.svg";
import { useCart } from "../CartContext";
import { useEffect } from "react";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const { cartItems, updateCart } = useCart();

  useEffect(() => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    setCount(cartItem ? cartItem.quantity : 0);
  }, [cartItems, product.id]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    updateCart(product, 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      updateCart(product, -1);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center">
        <img
          className={
            count > 0
              ? "border-red border-2 w-[200px] rounded-[5px]"
              : "w-[200px] rounded-[5px]"
          }
          src={product.image}
          alt={product.name}
        />
        <div className="relative group">
          <button
            className={
              count > 0
                ? "hidden"
                : "flex bg-white -mt-5 border-rose-500 border-2 px-5 py-2 rounded-[1.5rem] transition-all duration-300 group-hover:hidden"
            }
          >
            <span>
              <img src={Cart} alt="Add to cart" />
            </span>
            Add to cart
          </button>
          <div
            className={
              count > 0
                ? "opacity-100 bg-red -mt-5 inset-0 flex items-center px-3 py-2 rounded-[1.5rem] justify-center gap-2"
                : "bg-red -mt-5 inset-0 flex items-center px-3 py-2 rounded-[1.5rem] justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:flex"
            }
          >
            <button
              className=" text-white px-3 py-1 rounded"
              onClick={decrement}
            >
              -
            </button>
            <span className="text-white font-bold">{count}</span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="pl-4">
        <p className="text-sm font-primary text-rose-300">{product.tag}</p>
        <h1 className="text-lg text-rose-500 font-primary font-medium">
          {product.name}
        </h1>
        <p className="text-red font-primary">{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
