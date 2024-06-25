import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import CategoryRow1 from "./components/Category/CategoryRow1";
import CategoryRow2 from "./components/Category/CategoryRow2";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <NavBar />
      <Hero />
      <CategoryRow1 />
      <CategoryRow2 />
      <Services />
    </div>
  );
};

export default App;
