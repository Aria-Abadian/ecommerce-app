import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = ({id}) => {
  const quickAccess = [
    {
      title: "Back to top",
      url: "#",
    },
    {
      title: "Categories",
      url: "/products",
    },
    {
      title: "Blogs",
      url: "/#blogs",
    },
  ];
  return (
    <div className="dark:bg-gray-950" id={id}>
      <div className="container ">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* store detailes */}
          <div className="py-8 px-4">
            <a
              className="
                  text-primary 
                    font-semibold
                    tracking-widest
                    text-2xl
                    uppercase
                    sm:text-3xl
                "
              href="/"
            >
              Shopline
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70 text-justify">
            Welcome to the ultimate digital marketplace your one-stop shop for 
            the latest gadgets, tech essentials, and innovative accessories. Dive
            into a world where convenience meets modernity, all at the click of a
            button!
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Created in 2024 by Aria Abadian
            </p>
            <a
              href="https://www.linkedin.com/in/aria-abadian-262519192"
              className="bg-blue-700 text-white inline-block py-2 px-4 mt-4 text-sm rounded-full"
            >
              Check out my Linkedin
            </a>
          </div>
          {/* footer first column links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-3">
            

            {/* footer second column links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Access
              </h1>
              <ul className="space-y-3">
                {quickAccess.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.url}
                      className="text-gray-600 hover:text-black dark:hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Adresses & contact */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h3 className="text-xl font-bold sm:text-left mb-3">Contact</h3>
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>3415 Sven Spurs, Tomhaven, South Dakota</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>+1 (442) 635-1202</p>
              </div>
              {/* social links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-200" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-200" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
