import React from "react";
import Main from "../Components/Main";
import { Benefits } from "../Components/Benefits";
import Banner from "../Components/banner";
import { Testimonials } from "../Components/Testimonials";
import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <div className="relative">
      <Main/>
      <Banner/>
      <Benefits/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};
