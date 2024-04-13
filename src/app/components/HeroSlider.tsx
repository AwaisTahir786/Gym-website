"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavButtons from "./SwiperNavButtons";
import { motion } from "framer-motion";
import FadeIn from "../../../lib/variants";
import { Pagination, Navigation } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <Swiper
      // pagination={{
      //   type: "fraction",
      // }}
      // navigation={true}
      // modules={[Pagination, Navigation]}
      // className=""
    >
      <SwiperSlide>
        <div className="h-full flex text-left justify-end lg:pt-48 pt-36 ">
          <div className="flex flex-col">
            <motion.h1
              variants={FadeIn("up", "0.4")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=" mb-2  text-white lg:text-8xl text-5xl lg:text-[128px] "
            >
              <span>Where hard</span> work meet success
            </motion.h1>
            <motion.p
              variants={FadeIn("up", "0.6")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=" text-white text-left font-light  mb-4 italic lg:text-[20px] "
              // className="text-white  font-light "
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, obcaecati!
            </motion.p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full flex text-left justify-end lg:pt-48 pt-36 ">
          <div className="flex flex-col">
            <motion.h1
              variants={FadeIn("up", "0.4")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=" mb-2  text-white lg:text-8xl text-5xl lg:text-[128px] "
            >
              <span>Where hard</span> work meet success
            </motion.h1>
            <motion.p
              variants={FadeIn("up", "0.6")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className=" text-white text-left font-light  mb-4 italic lg:text-[20px] "
              // className="text-white  font-light "
            >
              {" "}
              elit. Iure, modi?
            </motion.p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
