import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import CategoryRow1 from "./components/Category/CategoryRow1";
import CategoryRow2 from "./components/Category/CategoryRow2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import headphone from './assets/hero/headphone.png'

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bas",
  title3: "Winter Sale",
  title4:
    "Unmissable Offer on Ari Solo Bas Headphones! Dive into the world of crystal-clear sound with the Ari Solo Bas Wireless Headphones",
  bgColor: "#f42c37",
};

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar />
      <Hero />
      <CategoryRow1 />
      <CategoryRow2 />
      <Services />
      <Banner data={{...BannerData}} />
    </div>
  );
};

export default App;
