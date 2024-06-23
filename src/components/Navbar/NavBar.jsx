import React from "react";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
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
    url: "/#store",
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

const NavBar = () => {
  return (
    <div
      className="
        bg-white 
        dark:bg-gray-900 
        dark:text-white 
        duration-200 
        relative 
        z-40"
    >
      <div className="py-4">
        <div className="
            container 
            flex 
            justify-between 
            items-center
        ">
          {/* Logo & menu */}
          <div className="flex gap-4 items-center">
            <a
              className="
                  text-primary 
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
              </ul>
            </div>
          </div>
          {/* Right Navbar Section */}
          <div className="
            flex
            justify-between
            items-center
            gap-4
          ">
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input 
                type="text" 
                placeholder="Search" 
                className="
                    search-bar
                " />
              <IoMdSearch className="
                text-xl 
                text-gray-600
                dark:text-gray-400
                group-hover:text-primary
                absolute
                top-1/2
                -translate-y-1/2
                right-3
                duration-200
                " />
            </div>
            {/* cart button section */}
            <button className="relative p-3">
                <LuShoppingCart className="
                    text-xl
                    text-gray-600
                    dark:text-gray-400
                "/>
                <div className="
                    w-4
                    h-4
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
                ">3</div>
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
