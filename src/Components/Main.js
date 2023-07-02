import React from "react";
import banner from "../images/banner.jpeg";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Input from "../Components/Input";

const Main = () => {
  return (
    <div className="home relative">
      <div className="z-20 text-white flex flex-col justify-center items-center">
          <h1 className="sm:text-heading text-4xl xs:text-5xl font-extrabold text-center px-2 sm:px-0">
            Hire <span className="text-primary">Talent</span> Beyond <br /> your
            Borders
          </h1>

          <p className="lg:w-1/2 w-4/5 my-4 text-center text-gray-300 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur a voluptatibus ut odit, vel maxime perspiciatis possimus
            tenetur, adipisci fugiat praesentium sapiente! Numquam repudiandae
            amet libero quo, at!
          </p>

          <div className="items-center flex sm:flex-row flex-col w-3/4 sm:w-auto  justify-center mt-4 bg-black/70 px-8 py-2 search mx-2">
            <Input
              labelName="Candidate's Skill"
              icon={
                <BusinessCenterIcon
                  style={{ color: "#71C9CE" }}
                  className="mt-4 mr-2"
                />
              }
            />
            <Input
              labelName="Location"
              icon={
                <LocationOnIcon
                  style={{ color: "#71C9CE" }}
                  className="mt-4 mr-2"
                />
              }
            />
            <button className="p-3 rounded-lg mr-4 bg-primary font-bold btn w-1/2">
              Find Talent
            </button>
          </div>
        </div>


      <div className="absolute top-0 w-full h-full z-0">
        <img src={banner} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="absolute w-full h-full bg-black/40"></div>

    </div>
  );
};


export default Main;