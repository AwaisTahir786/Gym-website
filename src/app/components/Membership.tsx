"use client";

import React from 'react'
import { motion } from 'framer-motion';
import FadeIn from '../../../lib/variants';
import MembershipSlider from './MembershipSlider';


const Membership = () => {
  return (
    <motion.section
    variants={FadeIn("up","0.2")}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false , amount: 0.2}}
     className='py-8 xl:py-0  bg-membership mt-10 bg-cover bg-center relative' id='prices'>
      <div className='container mx-auto text-white h-full   xl:pt-24'>
        <motion.h2
         variants={FadeIn("up","0.2")}
         initial="hidden"
         whileInView={"show"}
         className='h2 text-white text-center mb-8'>Membership</motion.h2>
        <motion.div
         variants={FadeIn("up","0.6")}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false , amount: 0.2}}
        >
          <MembershipSlider/>
        </motion.div>
      </div>

    </motion.section>
  )
}

export default Membership