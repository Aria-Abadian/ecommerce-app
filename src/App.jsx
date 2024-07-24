import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Aos from "aos";
import "aos/dist/aos.css";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  const [openCart, setOpenCart] = useState("translate-x-full");

  const handleOpenCartMenu = () => {
    setOpenCart("translate-x-0");
  };

  const handleCloseCartMenu = () => {
    setOpenCart("translate-x-full");
  };

  //temp data
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (childData) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === childData.id);
      if (itemIndex !== -1) {
        // Item already exists, increase the quantity
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Item does not exist, add it to the cart with quantity 1
        return [...prevItems, { ...childData, quantity: 1 }];
      }
    });
  };
  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Cart
          onQuantityIncrease={handleIncrease}
          onQuantityDecrease={handleDecrease}
          handleCheckout={handleOrderPopup}
          closeCartMenu={handleCloseCartMenu}
          openCartMenu={openCart}
          cartItems={cartItems}
        />
        <NavBar
          itemLength={cartItems.length}
          openCartMenu={handleOpenCartMenu}
        />
        <Routes>
          <Route
            path="/products"
            element={<Store onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/"
            element={<Home handleOrderPopup={handleOrderPopup} />}
          />
        </Routes>
        <Footer />
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
