import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import CategoryRow1 from "./components/Category/CategoryRow1";
import CategoryRow2 from "./components/Category/CategoryRow2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products/Products";
import smartwatch from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Aos from "aos";
import "aos/dist/aos.css";
import Store from "./components/Store/Store";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bas",
  title3: "Winter Sale",
  title4:
    "Unmissable Offer on Air Solo Bas Headphones! Dive into the world of crystal-clear sound with the Air Solo Bas Wireless Headphones",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Step into the future with Smart Solo the smartwatch that keeps you connected, active, and in style.",
  bgColor: "#2dcc6f",
};

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
  return (
    // <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
    //   <NavBar handleOrderPopup={handleOrderPopup} />
    //   <Hero handleOrderPopup={handleOrderPopup} />
    //   <CategoryRow1 />
    //   <CategoryRow2 />
    //   <Services />
    //   <Banner data={{ ...BannerData }} />
    //   <Products />
    //   <Banner data={{ ...BannerData2 }} />
    //   <Blogs />
    //   <Partners />
    //   <Footer />
    //   <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    // </div>
       <Store />
      
  );
};

export default App;
