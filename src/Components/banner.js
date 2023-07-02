import React from 'react'
import google from "../images/google.png";
import uber from "../images/uber.png";
import microsoft from "../images/microsoft.png";
import netflix from "../images/netflix.png";
import linkedin from "../images/linkedin.png";
import amazon from "../images/amazon.png"

const  Banner = () => {

    const images = [google,uber,microsoft,netflix,linkedin,amazon];
  return (
    <div className='flex flex-col justify-center items-center py-4 bg-primary/70'>
        <h1>Trusted by 5K+ Businesses</h1>
        <div className='flex flex-wrap  w-full sm:w-3/4 md:w-full gap-8 justify-center mt-4'>
            {images.map((img) =>  <img src={img} alt="" className='h-12 w-12 sm:mx-6'/>)}
  
        </div>
    </div>
  )
}


export default Banner;