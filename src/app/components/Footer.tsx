"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt,FaEnvelope,FaPhoneAlt,FaFacebook,FaTwitter,FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "./Button";


const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="pb-24 container mx-auto">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* info   */}
          <div className="flex flex-col gap-4">
            <Link href="">
              <Image src="/assets/img/logo.png" 
              width={117}
              height={55}
              alt=""
              />
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur.</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Sector F9, Islamabad Pakistan</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(+92) 0311-4366883</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-accent" />
                <span>tahirawais111@gmail.com</span>
              </li>
            </ul>

          </div>


          {/* blog   */}
          <div className="">
            <h4 className="h4 text-accent mb-4">Recent blog post</h4>
              {/* post  */}
              <div className=" border-gray-400  flex flex-col gap-3 pb-3 mb-4">
                <Link href="" className="hover:text-accent transition-all">
                  <h5 className="h6">
                    How to stay motivated for all exercise.
                  </h5>
                  <p className="text-gray-400 text-[12px] tracking-[3px] ">
                    April 10, 2024
                  </p>
                </Link>

                 {/* post  */}
              <div className=" border-gray-400  flex flex-col gap-3 pb-3 mb-4">
                <Link href="" className="hover:text-accent transition-all">
                  <h5 className="h6">
                    How to stay motivated for all exercise.
                  </h5>
                  <p className="text-gray-400 text-[12px] tracking-[3px] ">
                    April 10, 2024
                  </p>
                </Link>




              </div>


               {/* post  */}
               <div className=" border-gray-400  flex flex-col gap-3 pb-3 mb-4">
                <Link href="" className="hover:text-accent transition-all">
                  <h5 className="h6">
                    How to stay motivated for all exercise.
                  </h5>
                  <p className="text-gray-400 text-[12px] tracking-[3px] ">
                    April 10, 2024
                  </p>
                </Link>




              </div>


               {/* post  */}
               <div className=" border-gray-400  flex flex-col gap-3 pb-3 mb-4">
                <Link href="" className="hover:text-accent transition-all">
                  <h5 className="h6">
                    How to stay motivated for all exercise.
                  </h5>
                  <p className="text-gray-400 text-[12px] tracking-[3px] ">
                    April 10, 2024
                  </p>
                </Link>




              </div>

          </div>
          </div>


          {/* GAllery   */}
          <div className="">
            <h4 className="h4 text-accent mb-4">Gallery</h4>
            {/* gallery img  */}
            <div className="flex flex-wrap gap-2"> 
            <Link href="">
              <Image src="/assets/img/trainers/david.jpg" 
              width={100}
              height={100}
              alt=""
              />
            </Link>

            <Link href="">
              <Image src="/assets/img/trainers/matt.jpg" 
              width={100}
              height={100}
              alt=""
              />
            </Link>

            <Link href="">
              <Image src="/assets/img/trainers/rosy.jpg" 
              width={100}
              height={100}
              alt=""
              />
            </Link>

            <Link href="">
              <Image src="/assets/img/trainers/sofia.jpg" 
              width={100}
              height={100}
              alt=""
              />
            </Link>

            <Link href="">
              <Image src="/assets/img/trainers/david.jpg" 
              width={100}
              height={100}
              alt=""
              />
            </Link>
            <Link href="">
              <Image src="/assets/img/trainers/matt.jpg" 
              width={100}
              height={100}
              alt=""
              />
            </Link>

            <Link href="">
              <Image src="/assets/img/trainers/david.jpg" 
              width={100}
              height={100}
              alt=""
              />
            </Link>


            </div>
            

          </div>


          {/* NewsLetter   */}
          <div className="">
            <h4 className="h4 text-accent">NewsLetter</h4>
            <div className="flex flex-col gap-4">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ea pariatur dolores natus. Deleniti ipsam porro, iste est beatae tempore.</p>
              <form action="">
                <input type="text" placeholder="Your email eddress" className="h-[50px] outline-none px-4 text-primary-300" />
                <Button containerStyles="h-[50px] px-8" text="Send"/>
              </form>
            </div>
            
          </div>

        </div>

      </div>

      {/* copyright  */}

      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 Fitphysique</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link href="#" className="text-white hover:text-accent transtion-all">
                  <FaFacebook/>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-accent transtion-all">
                  <FaTwitter/>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-accent transtion-all">
                  <FaYoutube/>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer;