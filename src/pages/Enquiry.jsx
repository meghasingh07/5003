import React from "react";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";
import Footer from "../components/Footer";
import EnquiryForm from "../components/EnquiryForm";

const Enquiry = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBarTop />
        <NavBarMain />
      </div>

      <div className="relative w-full h-[500px] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold fade-in-up">Enquiry</h1>
          <p className="text-lg mt-4 max-w-2xl text-gray-200">
            Get in touch with us for business inquiries or further information.
          </p>
        </div>
      </div>
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Enquiry;
