import React, { useEffect, useState } from "react";
import "../index.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    });
  });

  const handleClick = () => {
    const elems = document.querySelectorAll(".line");
    const menu = document.querySelector(".menu");
    const elem1 = elems[0];
    const elem2 = elems[1];
    const elem3 = elems[2];

    if (elem2.style.display !== "none") {
      elem1.style.transform = "translateY(7px) rotate(-45deg)";
      elem3.style.transform = "rotate(45deg)";
      elem2.style.display = "none";
      menu.style.visibility = "visible";
      menu.style.transform = "translateX(0)";
    } else {
      elem1.style.transform = "translateX(0px) rotate(0deg)";
      elem3.style.transform = "rotate(0deg)";
      elem2.style.display = "block";
      menu.style.visibility = "hidden";
      menu.style.transform = "translateX(100%)";
    }
  };

  return (
    <div
      className={`${
        scrolled ? "bg-black/70" : "bg-transparent"
      } transition-all duration-300 lg:px-24   py-4 navbar  lg:flex-row flex-col md:items-center w-full`}
    >
      <div className="flex md:w-auto w-full md:justify-between items-center relative px-4">
        <div className="flex justify-center">
          <h1 className="text-primary text-3xl font-bold" style={{ fontWeight: 500 }}>
            Recruit<span className="text-white">Hub</span>
          </h1>
        </div>

        <div
          className="text-white flex-col invisible md:visible md:flex-row flex items-center justify-between ml-12 menu"
          style={{ fontWeight: 300 }}
        >
          <a href="/" className="text-lg px-4 py-1 md:font-bold">
            Company
          </a>
          <a href="/" className="text-lg px-4 py-1 md:font-bold">
            Why RecruitHub?
          </a>
          <a href="/" className="text-lg px-4 py-1 md:font-bold">
            Features
          </a>

        </div>

        <div
          className="flex flex-col absolute right-8 visible md:invisible"
          onClick={handleClick}
        >
          <span className="bg-black my-0.5 line"></span>
          <span className="bg-black my-0.5 line"></span>
          <span className="bg-black my-0.5 line"></span>
        </div>
      </div>

  
    </div>
  );
};

export default Navbar;
