import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Play } from "lucide-react";
import AnimatedLetters from "./AnimatedLetters";
import NavBarTop from "./NavBarTop";
import NavBarMain from "./NavBarMain";

export default function HeroSection({ onGetQuoteClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

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

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-fixed text-white font-sans"
      style={{ backgroundImage: `url('/banner.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

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

      <div className="relative z-10 h-full left-9 text-[1.5rem] flex flex-col justify-center px-6 md:px-16 max-w-7xl pt-32">
        <h1 className="text-white text-[2.5rem]  sm:text-[3rem] md:text-[8rem] lg:text-[11rem] font-extrabold leading-[1.1] md:leading-[1.05]">
          <span className="relative inline-block mr-2">
            <span className="relative z-10">
              <AnimatedLetters text="Strong" delayStart={0} />
            </span>
            <img
              src="/underline.svg"
              alt=""
              className="absolute bottom-0 left-0 w-full h-2 sm:h-3 md:h-5 z-0"
            />
          </span>
          <span className="inline-block">
            <AnimatedLetters text="And" delayStart={0.4} />
          </span>
          <span className="block">
            <AnimatedLetters text="Leak-Free &nbsp; Pipes" delayStart={0.8} />
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-lg">
        Get reliable pipes for today’s advanced needs. Vihan is the spine of modern plumbing. 

        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button
            onClick={onGetQuoteClick}
            className="bg-yellow-400 hover:bg-[#0F3E3D] text-black hover:text-amber-50 px-8 py-4 font-bold rounded-md text-lg"
          >
            Get a quote
          </button>

          <div className="text-left text-sm">
            <p className="uppercase font-semibold">call us now</p>
            <p className="text-yellow-400 text-xl font-extrabold">
              +1 114 7788
            </p>
          </div>
        </div>
      </div>

      <div
        onClick={() => setIsOpen(true)}
        className="absolute flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 border-4 border-white rounded-full cursor-pointer transition hover:scale-110 bg-black/40
             left-44 bottom-1
             md:left-auto md:right-80 md:bottom-auto md:top-1/2 md:transform md:-translate-y-1/2
             z-40"
      >
        <Play className="text-white w-6 h-6 sm:w-10 sm:h-10" />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0 flex items-center justify-center bg-black/80"
      >
        <div className="relative w-[90%] md:w-[720px] aspect-video">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-6 -right-6 text-white text-3xl bg-black rounded-full w-10 h-10 flex items-center justify-center leading-none hover:bg-yellow-400 transition-all"
          >
            ×
          </button>
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </Dialog>
    </div>
  );
}
