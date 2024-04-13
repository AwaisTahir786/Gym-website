"use client";

import React from 'react'
import Image from 'next/image';
import FadeIn from '../../../lib/variants';
import CustomButton from './CustomButton';
import { motion } from 'framer-motion';
import Button from './Button';


const classes=[
  {
    id:"1",
    name:"Body Building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam!"
  },
  {
    id:"2",
    name:"Cardio",
    img: "/assets/img/classes/cardio.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam!"
  },
  {
    id:"3",
    name:"Fitness",
    img: "/assets/img/classes/fitness.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam!"
  },
  {
    id:"4",
    name:"Crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam!"
  },
]


const Classes = () => {
  return (
    <section id='class' >
        <motion.div 
        variants={FadeIn('up', '0.6')}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}

        className='grid grid-cols-1 lg:grid-cols-2'>
          {classes.map((data)=>{
            return(
              <div className='relative w-full h-[300px] lg:h-[485px] flex flex-col items-center justify-center' key={data.id}>

                {/* overlay  */}
                <div className='bg-black/50 absolute w-full h-full top-0 z-10'></div>

                    <Image src={data.img} alt='object-cover' fill />

                    {/* text and btn  */}
                    <div className='z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4'>
                      <motion.h3 
                       variants={FadeIn('up', '0.4')}
                       initial="hidden"
                       whileInView={"show"}
                       viewport={{once: false, amount: 0.2}}
               
                      className='h3 text-accent'>{data.name}</motion.h3>
                      <motion.p
                       variants={FadeIn('up', '0.6')}
                       initial="hidden"
                       whileInView={"show"}
                       viewport={{once: false, amount: 0.2}}
               
                       className='text-white'>{data.description}</motion.p>
                      <motion.div 
                       variants={FadeIn('up', '0.8')}
                       initial="hidden"
                       whileInView={"show"}
                       viewport={{once: false, amount: 0.2}}
                       className=''
               
                      >
                        <Button containerStyles=' w-[164px] h-[46px] mb-10' text='Read More' />
                      </motion.div>
                    </div>

              </div>
            )
          })}
=
      </motion.div>
    </section>
  )
}

export default Classes;