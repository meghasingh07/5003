import React, { useRef } from "react";
import HeroSection from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Map from "../components/Map";
import HubNews from "../components/News";
import TestimonialSection from "../components/testimonals";
import InvestmentHeroSection from "../components/invest";
import MarketingTeamPage from "../components/Marketing";
import FlipCardsSection from "../components/card";
import Rotating from "../components/rotating";
import CaseStudies from "../components/case";


const Home = () => {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection onGetQuoteClick={handleScrollToForm} />
      <About formRef={formRef} />
      <CaseStudies/>
      <Rotating/>
      <FlipCardsSection/>
      <MarketingTeamPage/>
      <InvestmentHeroSection/>
      <TestimonialSection/>
      <HubNews/>
      <Map/>
      <Footer/>
    </>
  );
};

export default Home;
