import React from "react";
import Heading from "../Shared/Heading";
import ProductGrid from "./ProductGrid";

import Image1 from '../../assets/products/p-1.jpg'
import Image2 from '../../assets/products/p-2.jpg'
import Image3 from '../../assets/products/p-3.jpg'
import Image4 from '../../assets/products/p-4.jpg'
import Image5 from '../../assets/products/p-5.jpg'
import Image6 from '../../assets/products/p-7.jpg'
import Image7 from '../../assets/products/p-9.jpg'

const productsData = [
  {
    id: 1,
    image: Image1,
    title: "Boat Headphones",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    image: Image2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    image: Image3,
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    image: Image4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];
const productsData2 = [
  {
    id: 1,
    image: Image5,
    title: "Fresh Voice",
    price: "175",
    aosDelay: "0",
  },
  {
    id: 2,
    image: Image6,
    title: "Dorino",
    price: "230",
    aosDelay: "200",
  },
  {
    id: 3,
    image: Image7,
    title: "Gateway",
    price: "190",
    aosDelay: "400",
  },
  {
    id: 4,
    image: Image4,
    title: "Galaxy",
    price: "224",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div>
      <div className="container">
        <div className="grid ">
          {/* Header section */}
          <Heading title="Popular Products" subtitle="Explore our Products" />
          {/* body section */}
          <ProductGrid data={productsData} />
          <ProductGrid data={productsData2} />
        </div>
      </div>
    </div>
  );
};

export default Products;
