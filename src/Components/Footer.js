import React from 'react'
import { Phone,Mail, ArrowRightAlt } from '@mui/icons-material'


export const Footer = () => {
  return (
    <div className='text-white flex justify-center md:items-center flex-col' style={{background: "linear-gradient(90deg, rgba(19,0,36,1) 0%, rgba(9,108,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
       
       <div className='lg:w-3/4 flex flex-col md:flex-row gap-8 justify-between mt-8 md:px-8'>
       <div className='flex gap-12  mx-auto md:mx-0 w-3/4 justify-between md:w-auto  md:justify-normal'>
        <div className='flex flex-col'>
        <h1 className='text-lg'>Information</h1>
        <div className='px-2 py-3 flex flex-col gap-2'>
            <h1 className='font-light cursor-pointer'>About Us</h1>
            <h1 className='font-light cursor-pointer'>Clients</h1>
            <h1 className='font-light cursor-pointer'>FAQs</h1>
            <h1 className='font-light cursor-pointer'>Privacy Policy</h1>
        </div>

        </div>

        <div>
            <h1 className='text-lg'>Contact Info</h1>
            <div className='px-2 py-3 flex flex-col gap-2'>
                <div className='flex gap-4'><Phone/> <p className='font-light cursor-pointer'>(629) 555-0129</p></div>
                <div className='flex gap-4'><Mail/> <p className='font-light cursor-pointer'>support@gmail.com</p></div>
            </div>
        </div>
       </div>


        <div className='p-4 rounded-lg bg-white text-black w-3/4 md:w-auto mx-auto md:mx-0'>
            <h1 className='text-primary font-bold  py-2' style={{borderBottom:"1px solid rgb(113 201 206 "}}>Enquiry Now</h1>
            <p className='font-bold ' >I am looking for</p>
            <div className='flex flex-col px-2'>

            <div className='flex gap-4'>
            <input type="radio" name="" id="first"/>
            <label htmlFor="first"> Recruitments Solutions</label>
            </div>

            <div className='flex gap-4'>
            <input type="radio" name="" id="second" />
            <label htmlFor="second"> Job Oppurtunities</label>
            </div>

            </div>

            <button className='bg-primary rounded-lg p-3 mt-4 w-full' >Search job on RecuitHub <ArrowRightAlt/></button>
        </div>
       </div>

        <p className='my-4 text-center'>Copyright@RecruitHub All Rights Reserved</p>
    </div>
  )
}
