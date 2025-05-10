import React, { useState, useEffect, useRef } from "react";
import NavBarTop from "./NavBarTop";
import NavBarMain from "./NavBarMain";
import "./hero.css";

export default function HeroSection({ onGetQuoteClick }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typing, setTyping] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const langRef = useRef(null);
  const pagesRef = useRef(null);

  const backgroundImages = ["/hero_banner.webp", "/banner2.jpg"];
  const rotatingWords = ["Fittings", "Connections", "Assemblies", "Installations", "Components"];
  const mainText = ["Precision"];

  // Handle clicks outside
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

  // Timing for underline effect
  useEffect(() => {
    const totalChars = mainText.join(" ").length;
    const delay = totalChars * 100 + 500; // Calculate delay for typing effect
    const timer = setTimeout(() => setShowUnderline(true), delay);
    return () => clearTimeout(timer);
  }, []);

  // Image change every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000); // change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // Typing effect for the main text
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typing.length < mainText.join(" ").length) {
        setTyping((prev) => mainText.join(" ").slice(0, prev.length + 1));
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100); // typing speed (adjust as necessary)
    return () => clearInterval(typingInterval);
  }, [typing]);

  // Change rotating word after typing is complete
  useEffect(() => {
    const wordInterval = setInterval(() => {
      if (isTypingComplete) {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }
    }, 3000); // change word every 3 seconds
    return () => clearInterval(wordInterval);
  }, [isTypingComplete]);

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-fixed text-white font-sans transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        transition: 'background-image 1s ease-in-out' // Image transition effect
      }}
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

      <div className="relative z-10 h-full w-full text-[0.8rem] sm:text-[1rem] md:text-[1.5rem] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-[2.5rem] sm:text-[3rem] md:text-[8rem] lg:text-[11rem] font-extrabold leading-[1.1] md:leading-[1.05]">
          <span className="relative inline-block mr-2">
            <span className="relative z-10">{typing}</span>
            <img
              src="/underline.png"
              alt=""
              className={`absolute bottom-0 md:bottom-[-4px] left-0 h-2 sm:h-3 md:h-5 z-0 transition-all duration-700 ease-out ${
                showUnderline ? "w-full opacity-100" : "w-1/4 opacity-0"
              }`}
            />
          </span>
          <span className="inline-block">Machines</span>
          <span className="block">
            for&nbsp;Pipe&nbsp;
            <span
              key={currentWordIndex} // Ensure a new key is generated for each word change
              className="inline-block word-slide-up"
            >
              {rotatingWords[currentWordIndex]}
            </span>
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-lg">
          Power your plant with reliable machinery for advanced pipe-making
          needs. Vihan is the backbone of technology-driven machines.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onGetQuoteClick}
            className="build-button px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-100 transition duration-300"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
