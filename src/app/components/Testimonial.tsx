"use client";

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import FadeIn from '../../../lib/variants';

const testmonials=[
  {
    id:"1",
    img: "/assets/img/testimonial/lucy.jpg",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat?",
    name:"Lucy Anthony"
  },
  {
    id:"2",
    img: "/assets/img/testimonial/michael.jpg",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat?",
    name:"Michael Smith"
  },
  {
    id:"3",
    img: "/assets/img/testimonial/maria.jpg",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat?",
    name:"Maria Garcia"
  },
  {
    id:"4",
    img: "/assets/img/testimonial/lucy.jpg",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat?",
    name:"Lucy Anthony"
  },
  {
    id:"5",
    img: "/assets/img/testimonial/michael.jpg",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat?",
    name:"Michael Smith"
  },
  {
    id:"6",
    img: "/assets/img/testimonial/maria.jpg",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat?",
    name:"Maria Garcia"
  },
]


const Testimonial = () => {
  return (
    <section className='py-12 xl:py-28 ' id='testimonial'>
      <div className='container mx-auto'>
        <motion.h2
         variants={FadeIn("up","0.4")}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false , amount: 0.2}}
         className='h2 text-center'>Our Testimonials</motion.h2>
        <motion.div
         variants={FadeIn("up","0.6")}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false , amount: 0.2}}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable:true,

            }}
            breakpoints={{
              768:{
                slidesPerView: 2,
                spaceBetween:30
              },
              1024:{
                slidesPerView: 3,
                spaceBetween:30
              }

            }}
           className='h-[320px]'>
            {testmonials.map((data)=>{
              return(

                <SwiperSlide key={data.id} className='h-full'>
                  <div className='flex flex-col justify-center items-center text-center gap-6 h-full'>
                    <Image 
                    src={data.img}
                    alt='testimonial-pic'
                    height={90}
                    width={90}
                    className='rounded-full border-2 border-accent'
                    
                    />
                    <div className='flex flex-col justify-center items-center'>
                      <FaQuoteLeft className='text-2xl text-gray-300'/>
                      <p className='max-w-[380px] mb-4'>{data.message}</p>
                      <span className='text-2xl text-accent'>{data.name}</span>
                    </div>

                  </div>
                </SwiperSlide>
              )
            })}

          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial;