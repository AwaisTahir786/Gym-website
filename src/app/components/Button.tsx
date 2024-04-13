import React from 'react'
import SwiperNavButtons from './SwiperNavButtons';

const Button = ({text,containerStyles}:{text:string,containerStyles:string}) => {
  return (
    <>
    <div className={`${containerStyles} group relative cursor-pointer overflow-hidden  bg-accent uppercase flex items-center justify-center  lg:top-6`}>
        <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-10 bg-black rotate-45 text-white transition-all
        duration-300 group-hover:h-64 group-hover:-translate-y-32'></span>
               
                    <span className='ease relative text-white transtion duration-300 group-hover:text-white '>{text}</span>

          

    </div>
    </>
    
    
  )
}

export default Button;