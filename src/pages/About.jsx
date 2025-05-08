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
        className="relative w-full h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: `url("/about-2.webp")`,
        }}
      >
        <div className="absolute inset-0 "></div>

        {aboutContent.map((item, index) => (
         <div
         key={index}
         className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-15"
       >
         <h1 className="text-5xl md:text-6xl font-bold fade-in-up">
           {item.heading}
         </h1>
       </div>
       
        ))}
      </div>

      <div className="relative min-h-screen text-white [*]:mb-0">
        <TeamStrategy />
        <BusinessVision />
        <OurTeamSection />
        <BusinessPartners />
       
      </div>
      <Footer />
    </div>
  );
};

export default About;
