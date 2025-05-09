import React, { useState, useEffect, useRef } from "react";
import AnimatedLetters from "./AnimatedLetters";
import NavBarTop from "./NavBarTop";
import NavBarMain from "./NavBarMain";
import "./hero.css";

export default function HeroSection({ onGetQuoteClick }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);

  const langRef = useRef(null);
  const pagesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setIsPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 
  useEffect(() => {
    const totalChars =
      "Pipe-Making".length + "With".length + "Superior  Machinery".length;
    const delay = totalChars * 50 + 500; 
    const timer = setTimeout(() => setShowUnderline(true), delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-fixed text-white font-sans"
      style={{ backgroundImage: `url('/hero_banner.webp')` }}
    >
      <div className="absolute top-0 w-full z-20">
        <NavBarTop
          isLangOpen={isLangOpen}
          setIsLangOpen={setIsLangOpen}
          langRef={langRef}
        />
        <NavBarMain
          isPagesOpen={isPagesOpen}
          setIsPagesOpen={setIsPagesOpen}
          pagesRef={pagesRef}
        />
      </div>

      <div className="relative z-10 h-full text-[1rem] sm:text-[1rem] md:text-[1.5rem] flex flex-col justify-center px-6 md:px-16 max-w-7xl pt-32">
        <h1 className="text-white text-[2.5rem] sm:text-[3rem] md:text-[8rem] lg:text-[11rem] font-extrabold leading-[1.1] md:leading-[1.05]">
          <span className="relative inline-block mr-2">
            <span className="relative z-10">
              <AnimatedLetters text="Precision" delayStart={0} />
            </span>
            <img
              src="/underline.png"
              alt=""
              className={`absolute bottom-0 md:bottom-[-4px] left-0 h-2 sm:h-3 md:h-5 z-0 transition-all duration-700 ease-out ${
                showUnderline ? "w-full opacity-100" : "w-1/4 opacity-0"
              }`}
            />
          </span>
          <span className="inline-block">
            <AnimatedLetters text="Machines" delayStart={0.4} />
          </span>
          <span className="block">
            <AnimatedLetters
              text="for &nbsp;Pipe &nbsp;Fitting"
              delayStart={0.8}
            />
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-lg">
          Power your plant with reliable machinery for advanced pipe-making
          needs. Vihan is the backbone of technology-driven machines.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button onClick={onGetQuoteClick} className="custom-quote-button">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
