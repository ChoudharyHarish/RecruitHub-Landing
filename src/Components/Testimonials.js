import React, { useState } from "react";
import person1 from "../images/person1.jpeg";
import person2 from "../images/person2.jpeg";
import person3 from "../images/person3.jpeg";
import person4 from "../images/person4.jpeg";
import person5 from "../images/person5.jpeg";

import { ArrowBack, ArrowForward } from "@mui/icons-material";

import banner from "../images/banner.jpeg";

const Card = ({ img, name, position, message }) => {
  return (
    <div className="bg-white shadow-lg flex flex-col justify-center items-center p-8 min-w-full md:min-w-[46%] lg:min-w-[48%]  rounded-xl gap-4 slide">
      <div className="flex gap-4  w-full">
        <img src={img} className="h-20 w-20 rounded-lg" alt="" />
        <div className="flex flex-col">
          <h1 className="font-bold">{name}</h1>
          <p className="text-primary">{position}</p>
        </div>
      </div>

      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const data = [
    {
      name: "Annette Black",
      position: "HR at AirBnb",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium distinctio fuga ab enim impedit quidem vero! Doloribus, excepturi minus?",
      img: person1,
    },
    {
      name: "Annette Black",
      position: "HR at AirBnb",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium distinctio fuga ab enim impedit quidem vero! Doloribus, excepturi minus?",
      img: person2,
    },
    {
      name: "Annette Black",
      position: "HR at AirBnb",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium distinctio fuga ab enim impedit quidem vero! Doloribus, excepturi minus?",
      img: person3,
    },
    {
      name: "Annette Black",
      position: "HR at AirBnb",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium distinctio fuga ab enim impedit quidem vero! Doloribus, excepturi minus?",
      img: person4,
    },
    {
      name: "Annette Black",
      position: "HR at AirBnb",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium distinctio fuga ab enim impedit quidem vero! Doloribus, excepturi minus?",
      img: person5,
    },
  ];

  const [index,setSlideIndex] = useState(0);


  const handleClick = (dir) => {
     const elem = document.querySelectorAll('.slide')[index];
     const elem2 = document.querySelectorAll('.slide')[(index+1)%5];

    if(dir === 'r'){
        elem.style.transform = `translateX(${-106*((index+1)%5)}%)`;
        elem2.style.transform = `translateX(${-106*((index+1)%5)}%)`;
    }
    else {
        elem.style.transform = `translateX(${106*((index)%5)}%)`;
        elem2.style.transform = `translateX(${106*((index-1)%5)}%)`;
    }
    setSlideIndex((index+1)%5);
  }

  return (
    <div className="flex flex-col  relative">
      <div className="py-12 px-4 md:px-16">
        <h1 className="text-sectionHeading text-primary text-uppercase font-secondary font-bold text-center md:text-left">
          Success Stories
        </h1>
        <h1 className="text-subheading text-white text-center md:text-left">
          Recruiters Recommend RecruitHub
        </h1>

        <div className="flex items-center gap-4">
          <span className="bg-gray-300 h-fit p-3 rounded-full z-40" onClick={() => handleClick('l')}>
            <ArrowBack />
          </span>
          <div className="flex gap-8 w-full overflow-hidden items-center relative slider">
            {data.map((item) => (
              <Card key={item.name} {...item} />
            ))}
          </div>
          <span className="bg-gray-300 h-fit p-3 rounded-full z-40" onClick = {() => handleClick('r')}>
            <ArrowForward />
          </span>
        </div>
      </div>

      <img
        src={banner}
        alt=""
        className="h-full w-full object-cover absolute top-0 -z-20"
      />

      <div className="bg-black/60 h-full w-full absolute -z-10"></div>
    </div>
  );
};
