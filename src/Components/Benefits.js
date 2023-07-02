import React from 'react'
import img from "../images/why.jpeg";
import fig1 from "../images/user-engagement (1).png";
import fig2 from "../images/schedule.png";
import fig3 from "../images/time-management.png";
import fig4 from "../images/chat.png";


const Box = ({img,title,content}) => {
        return (
            <div className='flex flex-col justify-center items-center w-4/5 sm:w-full  mx-auto p-4 rounded-xl shadow-primaryShadow bg-white' >
                <img src={img} alt="" className='h-12 w-12' />
                <h1>{title}</h1>
                <p className='text-center' dangerouslySetInnerHTML={{__html:content}} ></p>
            </div>
        )
}


export const Benefits = () => {


    const data = [
        {
            img : fig1,
            title : "Attract Audience",
            content : `Reach over 9.08 crore  talented jobseekers`
        },
        {
            img : fig2,
            title : "30Days Visibility",
            content : "Get quality applies guranteed  with 30 days visibility of your job ads <br/>"
        },
        {
            img : fig3,
            title : "2min to Post",
            content : "Quick and easy to post job posting with highly optimised job posting form."
        },
        {
            img : fig4,
            title : "Interview Services",
            content : "Get Quality applies guranteed with 30days visibility of your job ads."
        }
    ]


  return (
    <div className='flex flex-col justify-center py-24' style={{background: "linear-gradient(90deg, rgba(19,0,36,1) 0%, rgba(9,108,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-sectionHeading text-secondary font-bold font-secondary'>Key Benefits</h1>
        <h1 className='text-subheading font-bold text-center leading-loose text-white'>Why Choose RecruitHub Job Posting?</h1>
    </div>
     <div className='flex flex-col justify-center items-center lg:flex-row mx-auto lg:w-4/5 gap-4 pt-4'>
            <img src={img} alt="" className='mx-auto mb-8 lg:mb-0 w-3/4 lg:h-96 lg:w-72 object-cover rounded-xl'/>
            <div className='grid  grid-cols-1 sm:grid-cols-2 lg:gap-2  gap-8 md:w-3/4 px-4'>
               {data.map((benefit) => <Box {...benefit}/>)}
            </div>
    </div>

    </div>
  )
}
