"use client";

import React from 'react'
import SwiperNavButtons from './SwiperNavButtons';
import { SwiperSlide,Swiper } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { motion } from 'framer-motion';
import FadeIn from '../../../lib/variants';

const blogData=[
  {
    id:"1",
    img:"/assets/img/blog/post1.jpg",
    date: "March 10. 2024",
    title: "Maintain a perfect structure after workout",
    href: ""
  },
  {
    id:"2",
    img:"/assets/img/blog/post2.jpg",
    date: "March 10. 2024",
    title: "Maintain a perfect structure after workout",
    href: ""
  },
  {
    id:"3",
    img:"/assets/img/blog/post3.jpg",
    date: "March 10. 2024",
    title: "Maintain a perfect structure after workout",
    href: ""
  },
  {
    id:"4",
    img:"/assets/img/blog/post4.jpg",
    date: "March 10. 2024",
    title: "Maintain a perfect structure after workout",
    href: ""
  },
  {
    id:"5",
    img:"/assets/img/blog/post1.jpg",
    date: "March 10. 2024",
    title: "Maintain a perfect structure after workout",
    href: ""
  },
  {
    id:"6",
    img:"/assets/img/blog/post2.jpg",
    date: "March 10. 2024",
    title: "Maintain a perfect structure after workout",
    href: ""
  },
  {
    id:"7",
    img:"/assets/img/blog/post3.jpg",
    date: "March 10. 2024",
    title: "Maintain a perfect structure after workout",
    href: ""
  },
  {
    id:"8",
    img:"/assets/img/blog/post4.jpg",
    date: "March 10. 2024",
    title: "Maintain a perfect structure after workout",
    href: ""
  },

]

const Blog = () => {
  return (
    <section className='h-screen bg-primary-300 pt-14 pb-10 text-white  ' id='blog'>
      <div className='container mx-auto'>
        <motion.h2 
        variants={FadeIn("up","0.4")}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false , amount: 0.2}}
        className='h2 text-center mb-8'>Blog</motion.h2>
        <motion.div 
        variants={FadeIn("up","0.6")}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false , amount: 0.2}}
        >
          <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={
            {
                768:{
                    slidesPerView:2,
                    spaceBetween:15
                },
                1024:{
                    slidesPerView:3,
                    spaceBetween:30
                },
                1400:{
                  slidesPerView:4,
              },
            }
        }
        className='h-[420px] md:max-w-[660px] lg:max-w-none mb-8'

          >
            {blogData.map((data)=>{
              return(
                <SwiperSlide key={data.id} className=''>
                  <div className='flex flex-col justify-start h-full max-w-[320px] mx-auto'>
                    <Image

                    src={data.img}
                    alt='blog-img'
                    width={320}
                    height={266}
                    className='mb-6'

                     />
                     <div className='flex flex-col items-start'>
                      <p className='max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1'>{data.date}</p>
                      <Link href={data.href} className='hover:text-accent transtion-all duration-300'>
                     <h5 className='h5'>{data.title}</h5>
                     </Link>

                      </div>
                    
                  </div>


                </SwiperSlide>
              )
            })}

            <SwiperNavButtons 
            ContainerStyles='absolute left-0 right-0 bottem-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 justify-between gap-1' 
            btnStyles='bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transtion-all duration-300'
             iconStyles='text-2xl'  />
          </Swiper>
        </motion.div>
        <motion.div
        variants={FadeIn("up","0.8")}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false , amount: 0.2}}
        >
          <Button containerStyles='h-[62px] w-[196px] mx-auto block ' text='View All'/>
        </motion.div>

      </div>



      </section>
  )
}

export default Blog;