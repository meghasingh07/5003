import React from "react";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";
import Footer from "../components/Footer";
import CaseStudies from "../components/case";

const Products = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBarTop />
        <NavBarMain />
      </div>

      <div
        className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/product.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold fade-in-up">
            Our Products
          </h1>
        </div>
      </div>

      {/* Add spacing here */}
      <div className="mt-5">
        <CaseStudies />
      </div>

      <Footer />
    </div>
  );
};

export default Products;
