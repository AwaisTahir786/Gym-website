"use client";

import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import FadeIn from '../../../lib/variants';
import { GiAchievement } from 'react-icons/gi';
import { Achievements } from './Achievements';


const featured=[
  {
    id:"1",
    icon: <FaUsers/>,
    title: "award-winning trainers",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque?",


  },
  {
    id:"2",
    icon: <IoIosPricetags/>,
    title: "excellent prices",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque?",


  },
  {
    id:"3",
    icon: <FaDumbbell/>,
    title: "modern equipment",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque?",


  },
]





const About = () => {
  return (
    <section className='pt-8 pb-14 lg:pt-16 lg:pb-28' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-2 mb-8'>
          <motion.h2 
          variants={FadeIn("up", "0.4")}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.3}}
          className='h2 text-center'>
            About Us
            </motion.h2>
          <motion.p 
           variants={FadeIn("up", "0.6")}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.3}}
          className='text-center max-w-[600px] mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, esse!</motion.p>
        </div>

        <motion.div 
         variants={FadeIn("up", "0.8")}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount:0.3}}
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16 text-center'>
           {/* feature secction  */}
        {featured.map((data)=>{
          return(
            <div key={data.id} className='flex flex-col items-center justify-center gap-4 border p-10'>
            <div className='text-4xl bg-primary-300 w-[80px] h-[80px] text-white rounded-full flex items-center justify-center'>{data.icon}</div>
            <div>
              <h4 className='h4 text-accent'>{data.title}</h4>
              <p>{data.subtitle}</p>
            </div>

          </div>
          )
        })}

        </motion.div>

       {/* Achivements  */}

       <Achievements />
      </div>

    </section>
  )
}

export default About