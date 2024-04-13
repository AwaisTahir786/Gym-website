"use client";

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const stats=[
    {
        number: 19,
        icon: FaBriefcase,
        text: "training courses"
    },
    {
        number: 879,
        icon: FaClock,
        text: "working hours"
    },
    {
        number: 150,
        icon: ImUsers,
        text: "training courses"
    },
    {
        number: 9,
        icon: FaTrophy,
        text: "international awards"
    },


]


// animation
const statsContainerVarient={
    hidden:{opacity: 0},
    show:{
        opacity:1,
        transition:{
            staggerChildern: 0.4,
            duration: 0.5,
            ease: "linear",

        }
    }
}


const statsItem={
    hidden: {y:20, opacity:0},
    show:{
        y:0,
            opacity:1,
            transition:{
                duration: 0.5,
                ease:[0.25,0.6,0.3,0.8]
            }
    }

}

export const Achievements = () => {
    const ref=useRef(null);
    const inView=useInView(ref);
    
  return (
    <section>
        <div className="container mx-auto">

           <motion.div 
           variants={statsContainerVarient}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount:0.3}}
           className="grid grid-cols-2 md:grid-cols-4 gap-16">
           {stats.map((data, index)=>{
                return(
                    <motion.div 
                    variants={statsItem}
                    
                    key={index} 
                    className="flex items-center justify-center flex-col">
                        {/* circule outer  */}
                        <div  className="border border-accent/90 rounded-full w-[140px] h-[140px] mx-auto p-1 mb-6">

                            {/* circule inner  */}
                            <div ref={ref} className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                                {/* render the count animation */}
                            {inView && <CountUp start={0} end={data.number} duration={6} />}

                                </div>
                        </div>
                        {/* text  */}
                        <div className="flex flex-col justify-center items-center text-center">
                            <data.icon className="text-3xl mb-2" />
                            <h4 className="h6 md:h5 lg:h5">{data.text}</h4>
                        </div>
                    </motion.div>
                )
            })}
           </motion.div>
        </div>
    </section>
  )
}
