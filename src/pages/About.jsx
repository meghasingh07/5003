import React from "react";
import NavBarTop from "../components/NavBarTop";
import NavBarMain from "../components/NavBarMain";
import TeamStrategy from "../components/TeamStrategy";
import "../App.css";
import BusinessVision from "../components/BusinessVision";
import OurTeamSection from "../components/OurTeamSection";
import BusinessPartners from "../components/partners";
import Footer from "../components/Footer";
const aboutContent = [
  {
    heading: "About",
    paragraph:
      "At Vihan, we specialize in manufacturing high-performance pipe-making machinery designed for reliability and innovation. Our mission is to power industrial growth with cutting-edge technology and top-tier service.",
  },
];

const About = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBarTop />
        <NavBarMain />
      </div>

      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url("/titlebar.jpeg")`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        {aboutContent.map((item, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold fade-in-up">
              {item.heading}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl fade-in-up delay-1">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white text-black">
        <TeamStrategy />
        <BusinessVision />
        <OurTeamSection />
        <BusinessPartners />
        <Footer />
      </div>
    </div>
  );
};

export default About;
