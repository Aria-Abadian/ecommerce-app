import React from "react";

import Hero from "../Hero/Hero";
import CategoryRow1 from "../Category/CategoryRow1";
import CategoryRow2 from "../Category/CategoryRow2";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Blogs from "../Blogs/Blogs";
import Partners from "../Partners/Partners";

import headphone from "../../assets/hero/headphone.png";
import smartwatch from "../../assets/category/smartwatch2-removebg-preview.png";

const Home = ({ handleOrderPopup }) => {
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
  return (
    <div>
      <Hero handleOrderPopup={handleOrderPopup} />
      <CategoryRow1 />
      <CategoryRow2 />
      <Services />
      <Banner data={{ ...BannerData }} />
      <Products />
      <Banner data={{ ...BannerData2 }} />
      <Blogs />
      <Partners />
    </div>
  );
};

export default Home;
