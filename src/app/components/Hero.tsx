"use client";
import React from 'react'
import HeroSlider from './HeroSlider'
import CustomButton from './CustomButton'
import { motion } from 'framer-motion'
import FadeIn from '../../../lib/variants'

const Hero = () => {
  return (
    <div className='h-[80vh] lg:h-[912px] bg-hero bg-cover bg-center' id='home'>
         {/* slider  */}
         <div className='container mx-auto '>

         <HeroSlider />
       
       <motion.div
        variants={FadeIn("up", "0.8")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }} 
>
       <CustomButton text="Get Started" containerStyles='h-[62px] w-[196px] ' />
       

       </motion.div>

       


      

      </div>
     
    </div>
  )
}

export default Hero