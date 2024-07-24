import React, { useState } from "react";

const Cart = ({ cartItems,onQuantityIncrease, openCartMenu, closeCartMenu, handleCheckout }) => {

  const [quantity, setQuantity] = useState(0);
  
  const handleQuantityDecrease = () => {
    setQuantity(quantity - 1);
  };
  const openCart = openCartMenu;
  return (
    <div className={`fixed z-50 right-0 bg-slate-800 w-full md:w-[50%] lg:w-[27vw] h-full overflow-scroll noScrollBar 
    transition-transform duration-500 ${openCart}`}>
      <h3 className="text-white text-center uppercase text-[6vw] md:text-[4vw] lg:text-[2vw] xl:text-[1.5vw] font-semibold mt-[5vw] lg:mt-[1vw]">
        cart items
      </h3>
      {cartItems.map((cartItem, index) =>(

      <div key={index} className="p-[5vw] lg:p-[1.2vw]">
        <div className="pt-[5vw] lg:pt-0 flex flex-row gap-[5vw] md:gap-[2vw] lg:gap-[1vw] items-center justify-start">
          <div className="w-[22vw] md:h-[9vw] md:w-[14vw] lg:h-[6vw] lg:w-[8vw] xl:h-[4vw] xl:w-[5vw] bg-white
          fkex justify-center items-center rounded-md overflow-hidden">
            <img className="scale-75 lg:translate-y-[.8vw] xl:translate-y-0" src={cartItem.image} alt={cartItem.name} />
          </div>
          <div className="text-white">
            <h4 className="lg:text-[1.6vw] xl:text-[1.2vw]">{cartItem.name.slice(0,30)} ...</h4>
            <div className="flex flex-row justify-between gap-[3vw] lg:gap-[2vw] lg:text-[1.5vw] xl:text-[1.1vw]">
              <p className="">${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
              <div className="flex flex-row gap-[2vw] lg:gap-[.5vw] justify-center items-center">
                <button
                  onClick={handleQuantityDecrease}
                  className="bg-slate-600 w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[1.6vw] lg:h-[1.6vw] 
                  translate-y-[.1vw] rounded-full flex justify-center items-center"
                >
                  <p className="-translate-y-[.3vw] lg:-translate-y-[.15vw]">-</p>
                </button>
                <span>{cartItem.quantity}</span>
                <button
                  onClick={onQuantityIncrease}
                  className="bg-primary w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[1.6vw] lg:h-[1.6vw]
                  translate-y-[.1vw] rounded-full flex justify-center items-center"
                >
                  <p className="-translate-y-[.3vw] lg:-translate-y-[.15vw]">+</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
      <div className="w-full md:w-[50%] lg:w-[27vw] text-white h-[11vw] md:h-[8vw] lg:h-[4vw]"></div>
      <div className="fixed bottom-0 w-full md:w-[50%] lg:w-[27vw] text-white h-[11vw] md:h-[8vw] lg:h-[4vw]">
        <button onClick={closeCartMenu} className="w-[50%] h-full bg-slate-900">Close</button>
        <button onClick={handleCheckout} className="w-[50%] h-full bg-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
