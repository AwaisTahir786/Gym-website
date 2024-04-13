"use client";

import React from 'react'
import { FaYoutube , FaTwitter, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';
import FadeIn from '../../../lib/variants';
import Link from 'next/link';

const trainerData=[
  {
    id:"1",
    image: "/assets/img/trainers/david.jpg",
    name:"David Williams",
    role: "Body Builder Coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatem?",
    social:[
      {
        icon: FaFacebook, href: "http://facebook.com",
      },
      {
        icon: FaYoutube, href: "http://youtube.com",
      },
      {
        icon: FaTwitter, href: "http://twitter.com",
      },
      
    ]
  },
  {
    id:"2",
    image: "/assets/img/trainers/rosy.jpg",
    name:"Rosy Rivera",
    role: "Body Builder Coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatem?",
    social:[
      {
        icon: FaFacebook, href: "http://facebook.com",
      },
      {
        icon: FaYoutube, href: "http://youtube.com",
      },
      {
        icon: FaTwitter, href: "http://twitter.com",
      },
      
    ]
  },
  {
    id:"3",
    image: "/assets/img/trainers/matt.jpg",
    name:"Matt Stone",
    role: "Body Builder Coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatem?",
    social:[
      {
        icon: FaFacebook, href: "http://facebook.com",
      },
      {
        icon: FaYoutube, href: "http://youtube.com",
      },
      {
        icon: FaTwitter, href: "http://twitter.com",
      },
      
    ]
  },

  {
    id:"4",
    image: "/assets/img/trainers/sofia.jpg",
    name:"Sofia",
    role: "Body Builder Coach",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatem?",
    social:[
      {
        icon: FaFacebook, href: "http://facebook.com",
      },
      {
        icon: FaYoutube, href: "http://youtube.com",
      },
      {
        icon: FaTwitter, href: "http://twitter.com",
      },
      
    ]
  },
  
]


const Team = () => {
  return (
    <section className='py-12 xl:h-[110vh]' id='team'>
      <div className='container mx-auto flex flex-col items-center justidy-center'>
        <motion.h2 
        variants={FadeIn("up","0.4")}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
        className='h2 mb-6 text-center'>Our trainers</motion.h2>
        <motion.div 
        variants={FadeIn("up","0.6")}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12'>
          {trainerData.map((data)=>{
            return(
              <div key={data.id} className='flex flex-col items-center text-center'>
                <div className='relative w-[320px] h-[360px] mx-auto mb-4'>
                  <Image src={data.image} alt='trainer-img' fill />

                </div>
                {/* name  */}
                <h4 className='h4  mb-4'>{data.name}</h4>
                {/* role  */}
                <p className='text-center uppercase tracking-[3px] mb-2'>{data.role}</p>
                {/* description  */}
                <p className=' mb-6 max-w-[320px] mx-auto'>{data.description}</p>
                {/* socials  */}
                <div className='flex flex-row justify-center items-center gap-10'>
                  {data.social.map((item,index)=>{
                    return(
                      <div className='' key={index}>
                        <Link href={item.href} className='hover:text-accent'>
                        <item.icon className='text-lg' />
                        </Link>

                      </div>
                    )
                  })}
                </div>
              </div>

            )
          })}
          

        </motion.div>
                  {/* btn */}

        <motion.div
           variants={FadeIn("up","0.8")}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount: 0.2}}
           className='flex flex-row item-center justify-center w-full'>
            <Button containerStyles='w-[196px] h-[62px]' text='See all trainers' />
          </motion.div>
      </div>
    </section>
  )
}

export default Team