"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


const brandimages=[
    {
        id:"1",
        src:"/assets/img/brands/brand-1.png",
        href:""


    },
    {
        id:"2",
        src:"/assets/img/brands/brand-2.png",
        href:""


    },
    {
        id:"3",
        src:"/assets/img/brands/brand-3.png",
        href:""


    },
    {
        id:"4",
        src:"/assets/img/brands/brand-4.png",
        href:""


    },
    {
        id:"5",
        src:"/assets/img/brands/brand-5.png",
        href:""


    },
]


const brandContainerVarient={
    hidden:{
        opacity:0
    },
    show:
    {
        opacity:1,
        transition:{
            staggerChildren:0.4,
            duration:0.5,
            ease: "linear"
        },
    },
};


const brandItem={
    hidden:{
        y:20, opacity:0
    },
    show:
    {
        opacity:1,
        transition:{
            duration:0.5,
            ease: [0.25,0.6,0.3,0.8]
        },
    },
};


const Brands = () => {
  return (
    <section className='py-8' id='contact'>
        <div className='container mx-auto'>
            <motion.div 
            variants={brandContainerVarient}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='grid items-center justify-center sm:grid-cols-2 lg:grid-cols-5 py-8'>
                {brandimages.map((data)=>{
                    return(
                        <motion.div  variants={brandItem}  key={data.id}>
                            <Link href={data.href}>
                                <Image
                                className='opacity-50 hover:opacity-100 transtion-all mx-auto'
                                src={data.src}
                                alt='brand-image'
                                width={204}
                                height={106}
                                 />

                            </Link>

                        </motion.div>
                    )
                })}
            </motion.div>

        </div>

    </section>
  )
}

export default Brands;
