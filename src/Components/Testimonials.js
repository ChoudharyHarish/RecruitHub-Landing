import React from "react";
import person1 from "../images/person1.jpeg";
import person2 from "../images/person2.jpeg";
import person3 from "../images/person3.jpeg";
import person4 from "../images/person4.jpeg";
import person5 from "../images/person5.jpeg";


import banner from "../images/banner.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Card = ({ img, name, position, message }) => {
  return (
    <div className="bg-white shadow-lg flex flex-col justify-center items-center p-8  rounded-xl gap-4 slide mx-4">
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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className="flex flex-col  relative">
      <div className="py-12 px-4 md:px-16">
        <h1 className="text-sectionHeading text-primary text-uppercase font-secondary font-bold text-center md:text-left">
          Success Stories
        </h1>
        <h1 className="text-subheading text-white text-center md:text-left">
          Recruiters Recommend RecruitHub
        </h1>

        <div className="px-4">
        <Slider {...settings}>
        {data.map((item) => (
              <Card key={item.name} {...item} />
            ))}
        </Slider>
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