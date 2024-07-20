// Modal.jsx
import { useCart } from "../CartContext";
import OrderConfirmed from "/assets/icon-order-confirmed.svg";

const OrderModal = ({ isOpen, onClose, onStartNewOrder }) => {
  const { cartItems } = useCart();

  if (!isOpen) return null;

  // const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 bg-[#000] bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg max-w-2xl w-full flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={OrderConfirmed} alt="Order Confirmed" className="w-14 h-14" />
        <h2 className="text-2xl font-bold font-primary text-rose-500">
          Order Confirmed
        </h2>
        <div className="flex flex-col px-4 pb-4 rounded-lg bg-rose-50">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 border-b border-rose-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="font-primary flex items-center justify-between w-full">
                <div>
                  <p className="font-semibold text-sm text-rose-500">
                    {item.name}
                  </p>
                  <span className="flex gap-4 items-center">
                    <p className="text-sm text-red">{item.quantity}x</p>
                    <p className="text-sm text-rose-400">@ {item.price}</p>
                  </span>
                </div>
                <p className="font-bold text-rose-500">
                  $
                  {(
                    parseFloat(item.price.replace("$", "")) * item.quantity
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between mt-3">
            <p className="text-sm font-medium text-rose-500">Order Total:</p>

            <p className="font-extrabold text-rose-500 text-xl">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>

        {/* <p className="font-bold">Total Quantity: {totalItems}</p> */}

        <button
          onClick={onStartNewOrder}
          className=" text-sm self-stretch bg-red px-4 py-2 text-white rounded-3xl"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
