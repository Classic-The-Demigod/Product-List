// Cart.js
import EmptyCart from "/assets/illustration-empty-cart.svg";
import { useCart } from "../CartContext";
import RemoveIcon from "/assets/icon-remove-item.svg";
import Carbon from "/assets/icon-carbon-neutral.svg";


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
    
    <div className="bg-white px-6 py-6 rounded-lg">
      <h1 className="text-2xl text-red font-bold">Your Cart ({totalItems})</h1>
      {totalItems === 0 ? (
        <div className="flex flex-col items-center">
          <img src={EmptyCart} alt="Empty Cart" />
          <p className="text-sm text-rose-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center pt-2 pb-2 border-b-2 border-rose-100"
            >
              <div>
                <p className="text-sm font-bold pb-1">{item.name}</p>
                <div className="flex items-center gap-2 font-primary text-sm">
                  <p>@{item.quantity}</p>
                  <p>{item.price}</p>
                  <p>
                    $
                    {(
                      parseFloat(item.price.replace("$", "")) * item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="bg-red-500 p-1 rounded-full border-rose-200 border-2 ml-4 hover:border-rose-500"
              >
                <img src={RemoveIcon} alt="" />
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 pd-2 ">
            <p className="text-[0.7rem] font-medium text-rose-400">
              Order Total
            </p>
            <p className="font-extrabold text-rose-500">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center py-2 px-4 bg-rose-100 mt-4 rounded-lg gap-1">
            <img src={Carbon} alt="" />
            <p className="text-[0.7rem] font-medium text-rose-400">
              This is a{" "}
              <span className="font-bold text-rose-500">carbon-neutral</span>{" "}
              delivery
            </p>
            </div>
            
            <button className="text-sm self-stretch mt-4 bg-red px-4 py-2 text-white rounded-3xl">Confirm Order</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
