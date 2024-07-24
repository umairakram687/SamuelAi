import React from "react";
import "../components/Home/Home.css";
import Hero from "../components/Home/Hero";
import AiPagesFunnel from "../components/Home/AiPagesFunnel";
import CustomLLM from "../components/Home/CustomLLM";
import BooksLead from "../components/Home/BooksLead";
import ConversionsBuild from "../components/Home/ConversionsBuild";
import Marketers from "../components/Home/Marketers";
import BuildingFaster from "../components/Home/BuildingFaster";

const Home = () => {
  return (
    <>
      <Hero />
      <AiPagesFunnel />
      <CustomLLM />
      <BooksLead />
      <ConversionsBuild />
      <Marketers />
      <BuildingFaster />
    </>
  );
};

export default Home;
