import React from "react";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";
import Footer from "../components/Footer";
import "../App.css";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBarTop />
        <NavBarMain />
      </div>

      <div
        className="relative w-full h-[350px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Untitled-1.webp')" }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-12">

          <h1 className="text-5xl md:text-6xl font-bold fade-in-up">Contact</h1>
        </div>
      </div>

      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
