import React, { useState, useEffect } from "react";
import products from "../../Data/Products.json";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Store = ({ onAddToCart }) => {
  // State for storing the displayed products, current page, and selected category
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState("default");

  const sendCartDataToParent = (data) => {
    onAddToCart(data);
  };

  // Handler for category selection change
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredProducts =
    selectedOption === "default"
      ? products
      : products.filter((product) => product.category === selectedOption);
  // Effect to update products based on selected category
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedOption]);

  const productsPerPage = 10;

  // Handlers for pagination
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Determine the products to display on the current page
  const paginatedProducts = filteredProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <div className="dark:bg-slate-900">
      <div className="p-[3vw] flex flex-col gap-[2vw] lg:flex lg:flex-row">
        <div className="lg:w-[20vw] lg:h-[100svh] rounded-[2vw] md:rounded-[.5vw] bg-gray-50 dark:bg-slate-800 p-[5vw] md:p-[2vw]">
          <aside>
            <div className="flex flex-col gap-[2vw] md:gap-[2vw]">
              <h3 className="mb-[2vw] lg:mb-0 text-slate-600 dark:text-slate-300 font-bold text-[5vw] md:text-[3vw]
              lg:text-[1.7vw]">
                Filters
              </h3>
              <select
                value={selectedOption}
                onChange={handleChange}
                className="p-[2vw] md:p-[1vw] lg:p-[.5vw] 2xl:text-[1.2vw] text-slate-600 dark:text-slate-300 rounded-[1vw] md:rounded-[.5vw]
                lg:rounded-[.2vw] md:w-[20vw] lg:w-[15vw] lg:h-[3vw] xl:text-[1.1vw] md:text-[2vw] lg:text-[1.4vw] dark:bg-slate-700"
              >
                <option className="2xl:text-[.7vw]" value="default">
                  All Categories
                </option>
                <option className="2xl:text-[.7vw]" value="smartphones">
                  Smartphones
                </option>
                <option className="2xl:text-[.7vw]" value="headphones">
                  Headphones
                </option>
                <option className="2xl:text-[.7vw]" value="laptops">
                  Laptops
                </option>
                <option className="2xl:text-[.7vw]" value="watches">
                  Watches
                </option>
              </select>
            </div>
          </aside>
        </div>

        <div className="flex flex-col gap-[5vw]">
          <div className="grid grid-flow-row grid-cols-1 md:grid-flow-row md:grid-cols-3 xl:grid-cols-3 gap-[5vw] md:gap-[2vw]">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 dark:bg-slate-800 pt-[.5vw] shadow-md rounded-[2vw] md:rounded-[.5vw] flex flex-col justify-between"
              >
                <div className="mx-[5vw] md:mx-[1vw] text-slate-800 dark:text-slate-100 font-semibold md:font-bold flex flex-col justify-center">
                  <div className="bg-white md:h-[15vw] rounded-[2vw] md:rounded-[.5vw] overflow-hidden m-[5vw] md:m-[1vw] flex justify-center">
                    <img
                      className="md:h-[15vw] bg-white"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <h4 className="text-[5vw] lg:text-[1.2vw] md:text-[1.6vw]">
                    {product.name.length > 95
                      ? product.name.slice(0, 95) + "..."
                      : product.name}
                  </h4>
                </div>
                <div className="mx-[5vw] md:mx-[1vw] text-slate-800 dark:text-slate-100 font-semibold md:font-bold">
                  <div
                    className="my-[5vw] md:my-[1vw] text-slate-600 dark:text-slate-300 text-[3.8vw] md:text-[1.4vw]
                   lg:text-[1vw] grid grid-flow-row gap-[1vw]"
                  >
                    {product.cpu && <p>CPU: {product.cpu}</p>}
                    {product.ram && <p>Memory: {product.ram}</p>}
                    {product.storage && <p>Storage: {product.storage}</p>}
                    {product.vga && <p>GPU: {product.vga}</p>}
                  </div>
                  <div className="flex justify-between items-end mb-[5vw] md:mb-[1vw]">
                    <p className="text-[4.5vw] lg:text-[1.4vw] md:text-[1.6vw] text-primary">
                      ${product.price}
                    </p>
                    <button
                      onClick={() => sendCartDataToParent(product)}
                      className="md:text-[1.2vw] lg:text-[1vw] bg-primary text-white px-[5vw] md:px-[2vw] py-[1vw] md:py-[.5vw] rounded-full shadow-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-full mt-4 gap-[4vw] lg:gap-[1vw]">
            <button
              className="text-slate-800 dark:text-slate-600 text-[6vw] md:text-[3vw] lg:text-[2vw]"
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
            >
              <BsArrowLeftCircleFill />
            </button>
            <span className="2xl:text-[1.4vw]">
              Page: {currentPage + 1} of {filteredProducts.length / 10}
            </span>
            <button
              className="text-primary text-[6vw] md:text-[3vw] lg:text-[2vw]"
              onClick={handleNextPage}
              disabled={(currentPage + 1) * productsPerPage >= products.length}
            >
              <BsArrowRightCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
