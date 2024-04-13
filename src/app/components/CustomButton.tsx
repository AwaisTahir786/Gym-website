import React from 'react'
import SwiperNavButtons from './SwiperNavButtons';

const CustomButton = ({text,containerStyles}:{text:string,containerStyles:string}) => {
  return (
    <>
    <div className={`${containerStyles} group relative cursor-pointer overflow-hidden  bg-accent uppercase flex items-center justify-center  lg:top-20`}>
        <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-10 bg-black rotate-45 text-white transition-all
        duration-300 group-hover:h-64 group-hover:-translate-y-32'></span>
               
                    <span className='ease relative text-white transtion duration-300 group-hover:text-white '>{text}</span>

              

    </div>
     {/* <SwiperNavButtons ContainerStyles=" mb-5 flex gap-1  lg:h-[60px] h-[120px] w-full flex justify-center items-center  md:mt-30 lg:mt-60" 
     btnStyles="border border-accent text-white w-[56px] h-[56px]  flex items-center justify-center hover:bg-accent transtion-all duration-300"
      iconStyles="text-2xl "/> */}
    </>
    
    
  )
}

export default CustomButton;