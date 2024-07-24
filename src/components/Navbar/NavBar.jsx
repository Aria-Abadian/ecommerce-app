import React from "react";

import { IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";

import DarkModeToggle from "./DarkModeToggle";

const menuItems = [
  {
    id: 1,
    name: "Home",
    url: "/#",
  },
  {
    id: 2,
    name: "Store",
    url: "/products",
  },
  {
    id: 3,
    name: "About",
    url: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    url: "/blogs",
  },
];
const dropdownItems = [
  {
    id: 1,
    name: "Trending",
    url: "/#",
  },
  {
    id: 2,
    name: "Best selling",
    url: "/#",
  },
  {
    id: 3,
    name: "Top rated",
    url: "/#",
  },
];

const NavBar = ({ openCartMenu, itemLength }) => {
  return (
    <div
      className="
        dark:bg-gray-900 
        dark:text-white 
        duration-200 
        relative 
        z-40"
    >
      <div className="py-4 2xl:py-10">
        <div
          className="
            mx-[5vw]
            flex 
            justify-between 
            items-center
        "
        >
          {/* Logo & menu */}
          <div className="flex gap-4 items-center">
            <a
              className="
                  text-primary 
                    2xl:text-[2vw]
                    font-semibold
                    tracking-widest
                    text-2xl
                    uppercase
                    sm:text-3xl
                "
              href="#"
            >
              Shopline
            </a>
            {/* Menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      className="
                        2xl:text-[1.2vw]
                        inline-block 
                        px-4 
                        font-semibold 
                        text-gray-500 
                        hover:text-black
                        dark:hover:text-white
                        duration-200
                      "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown menu */}
                <li className="relative cursor-pointer group">
                  <a
                    className="
                        2xl:text-[1.2vw]
                        flex 
                        items-center
                        gap-[2px]
                        font-semibold
                        text-gray-500
                        hover:text-black
                        dark:hover:text-white
                        py-2
                    ">Quick Access
                    <span>
                      <FaAngleDown
                        className="
                            group-hover:rotate-180
                            duration-300
                        "
                      />
                    </span>
                  </a>
                  {/* Dropdown Items */}
                  <div className="
                    2xl:text-[1.2vw]
                    absolute 
                    z-99 
                    hidden 
                    group-hover:block 
                    w-[200px]
                    rounded-md
                    bg-white
                    shadow-md
                    dark:bg-gray-900
                    p-2
                    dark:text-white
                    ">
                    <ul className="space-y-2">
                      {dropdownItems.map((item,index) =>
                        <li key={index}>
                          <a 
                            href={item.url}
                            className='
                            text-gray-500 
                           
                            dark:hover:text-white
                            duration-200
                            p-2
                            inline-block
                            w-full
                            hover:bg-primary/20
                            rounded-md
                            font-semibold
                            '
                            
                          >{item.name}</a>
                        </li>
                      )}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Navbar Section */}
          <div
            className="
            flex
            justify-between
            items-center
            gap-4
          "
          >
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
                    search-bar
                "
              />
              <IoMdSearch
                className="
                2xl:text-[2vw]
                text-xl 
                text-gray-600
                dark:text-gray-400
                group-hover:text-primary
                absolute
                top-1/2
                -translate-y-1/2
                right-3
                duration-200
                "
              />
            </div>
            {/* cart button section */}
            <button className="relative p-3" onClick={openCartMenu}>
              <LuShoppingCart
                className="
                    text-xl
                    2xl:text-[2vw]
                    text-gray-600
                    dark:text-gray-400
                "
              />
              <div
                className="
                    w-4
                    h-4
                    2xl:w-9
                    2xl:h-9
                    bg-red-500
                    text-white
                    rounded-full
                    absolute
                    top-0
                    right-0
                    flex
                    items-center
                    justify-center
                    text-xs
                    2xl:text-[1vw]
                "
              >
                {itemLength}
              </div>
            </button>
            {/* dark mode toggle button */}
            <div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
