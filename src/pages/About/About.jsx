import React from 'react'
import './About.css'
import {Design} from "../../Components/Design/Design"
import Out2 from "../../assets/out2.webp";
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

export const About = () => {
   const transition = {duration: 2, type: 'spring'}
  return (
   <>
   <summary id='about' className='Head-about'>
    <div className="container about-cont ">
       <motion.div 
        initial={{ left: "-15%" }}
        whileInView={{ left: "0%" }}
        transition={transition}
       className='about-left'>
           <Design image={Out2}/>
       </motion.div>
       <div className='about-right'>
          <span>ABOUT US.</span>
          <motion.h1
          initial={{ x: "25%" }}
          whileInView={{ x: "0%" }}
          transition={transition}
          >The Best Holidays <span> Start Here!</span></motion.h1>
          <p>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
          <button ><Link to="https://api.whatsapp.com">Book Now</Link></button>
       </div>
    </div>
   </summary>
   </>
  )
}
