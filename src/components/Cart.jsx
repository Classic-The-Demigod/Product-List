// Cart.js
import EmptyCart from "/assets/illustration-empty-cart.svg";
import { useCart } from "../CartContext";

function Cart() {
  const { cartItems, updateCart } = useCart();

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  const handleRemove = (product) => {
    updateCart(product, -product.quantity);
  };

  return (
    <div className="bg-white px-8 py-6 rounded-lg">
      <h1 className="text-2xl text-red font-bold">Your Cart ({totalItems})</h1>
      {totalItems === 0 ? (
        <div className="flex flex-col items-center">
          <img src={EmptyCart} alt="Empty Cart" />
          <p className="text-sm text-rose-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center my-2"
            >
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Price: $
                  {(
                    parseFloat(item.price.replace("$", "")) * item.quantity
                  ).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 border-t pt-2">
            <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
