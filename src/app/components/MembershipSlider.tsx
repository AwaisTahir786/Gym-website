"use client";

import React from 'react'
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import CustomButton from './CustomButton';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Button from './Button';



// MemberShip Data 
const memberShipData=[
    {
        title:"Standard",
        price: "30",
        benefits:[
            {
                icon: FaCheck,
                text: "Includes Membership"
            },
            {
                icon: FaCheck,
                text: "Access to all gym facilitaties"
            },
            {
                icon: MdClose,
                text: "Diet plan included"
            },
            {
                icon: FaCheck,
                text: "Health and Fitness tips"
            },
            {
                icon: MdClose,
                text: "Monday-Friday gym access"
            },
            {
                icon: FaCheck,
                text: "Full access to everything"
            },
            {
                icon: MdClose,
                text: "No additional amenities"
            },
        ]

    },
    {
        title:"Ultimate",
        price: "45",
        benefits:[
            {
                icon: FaCheck,
                text: "Includes Membership"
            },
            {
                icon: FaCheck,
                text: "Access to all gym facilitaties"
            },
            {
                icon: FaCheck,
                text: "Diet plan included"
            },
            {
                icon: FaCheck,
                text: "Health and Fitness tips"
            },
            {
                icon: MdClose,
                text: "Monday-Friday gym access"
            },
            {
                icon: FaCheck,
                text: "Full access to everything"
            },
            {
                icon: MdClose,
                text: "No additional amenities"
            },
        ]

    },
    {
        title:"Professional",
        price: "60",
        benefits:[
            {
                icon: FaCheck,
                text: "Includes Membership"
            },
            {
                icon: FaCheck,
                text: "Access to all gym facilitaties"
            },
            {
                icon: FaCheck,
                text: "Diet plan included"
            },
            {
                icon: FaCheck,
                text: "Health and Fitness tips"
            },
            {
                icon: MdClose,
                text: "Monday-Friday gym access"
            },
            {
                icon: FaCheck,
                text: "Full access to everything"
            },
            {
                icon: FaCheck,
                text: "No additional amenities"
            },
        ]

    },
    {
        title:"Professional",
        price: "60",
        benefits:[
            {
                icon: FaCheck,
                text: "Includes Membership"
            },
            {
                icon: FaCheck,
                text: "Access to all gym facilitaties"
            },
            {
                icon: FaCheck,
                text: "Diet plan included"
            },
            {
                icon: FaCheck,
                text: "Health and Fitness tips"
            },
            {
                icon: MdClose,
                text: "Monday-Friday gym access"
            },
            {
                icon: FaCheck,
                text: "Full access to everything"
            },
            {
                icon: FaCheck,
                text: "No additional amenities"
            },
        ]

    },
]


const MembershipSlider = () => {
  return (
    <Swiper
    slidesPerView={1}
    modules={[Pagination]}
    pagination={{
        clickable:true
    }}
    breakpoints={
        {
            768:{
                slidesPerView:2,
                spaceBetween:30
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30
            },
        }
    }
     className='min-h-[680px] '>
        {memberShipData.map((data,index)=>{
            return(
                <SwiperSlide key={index}>
                    <div className=' text-white border border-accent bg-primary-300/50 hover:bg-primary-300/100 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto '>
                        <div className='py-5 px-[60px] border-b border-accent'>
                            <h4 className='h4'>{data.title}</h4>
                        </div>
                        {/* benefits  */}
                        <div className='py-[30px] px-[60px]'>
                            <ul className='flex flex-col gap-5 mb-7'>
                            {data.benefits.map((item,index)=>{
                            return(
                                <li key={index} className='flex items-center gap-2'>
                                    <item.icon className='text-lg text-accent' />
                                    {item.text}

                                </li>

                            )
                        })}

                            </ul>
                            {/* price button  */}
                            <p className='text-accent mb-6  flex gap-1 items-center'>
                                <sup className='text-4xl'>$</sup>
                                <strong className='text-6xl'>{data.price}</strong>
                                <em className='text-2xl self-end'>/month</em>
                            </p>
                            <Button containerStyles='w-[196px] h-[62px] mb-10' text='Buy now' />

                        </div>

                        
                    </div>
                </SwiperSlide>
                
            )
        })}
    </Swiper>
  )
}

export default MembershipSlider