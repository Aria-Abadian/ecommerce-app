import React, { useState } from "react";

const Cart = ({ cartItems,onQuantityIncrease }) => {

  const [quantity, setQuantity] = useState(0);
  
  const handleQuantityDecrease = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="fixed z-50 right-0 bg-slate-800 w-full md:w-[400px] h-full overflow-scroll pb-[20vw]">
      <h3 className="text-white text-center uppercase text-[6vw] font-semibold mt-[5vw]">
        cart items
      </h3>
      {cartItems.map((cartItem, index) =>(

      <div key={index} className="p-[5vw]">
        <div className="pt-[5vw] flex flex-row gap-[5vw] items-center justify-center">
          <div className="border w-[22vw] bg-white rounded-md overflow-hidden">
            <img className="scale-75" src={cartItem.image} alt="" />
          </div>
          <div className="text-white">
            <h4>{cartItem.name.slice(0,30)} ...</h4>
            <div className="flex flex-row justify-start gap-[3vw]">
              <p>Price: ${cartItem.price * cartItem.quantity}</p>
              <div className="flex flex-row gap-[2vw] justify-center items-center">
                <p> Quantity:</p>
                <button
                  onClick={handleQuantityDecrease}
                  className="bg-slate-600 w-[4vw] h-[4vw] rounded-full flex justify-center items-center"
                >
                  <p className="-translate-y-[.3vw]">-</p>
                </button>
                <span>{cartItem.quantity}</span>
                <button
                  onClick={onQuantityIncrease}
                  className="bg-primary w-[4vw] h-[4vw] rounded-full flex justify-center items-center"
                >
                  <p className="-translate-y-[.3vw]">+</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
      <div className="fixed bottom-0 w-full text-white h-[11vw]">
        <button className="w-[50%] h-full bg-slate-900">Close</button>
        <button className="w-[50%] h-full bg-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
