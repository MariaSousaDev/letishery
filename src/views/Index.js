import React from 'react'
import BG01 from "../assets/bgs/01-01 leti dragon.png";
import { motion } from 'framer-motion';
import { framerPage } from '../utils/framerData';


export default function Index() {
  return (
    <motion.div className='flex' {...framerPage}>
      <div className='relative w-full md:pl-[24vw] lg:pl-[22vw] select-none flex flex-col items-center justify-center' >
        <div className='items-center justify-center rounded-full overflow-hidden w-[90vw] h-[90vw] md:h-auto md:w-3/4  xl:w-[35vw] xl:h-[35vw] '>
          <img className='mt-6 ml-4 scale-150 md:scale-100 md:ml-0 md:mt-0 xl:-mt-36' src={BG01} alt="" />
        </div>
        <div className='sm:absolute md:top-1/2 mt-2 md:mt-20 ' >
          <div className='py-2 px-8 md:px-16 max-w-screen-sm text-center'>
            <h1 className='text-sunglo-400 font-msmadi text-8xl md:text-9xl cs-border'>Letishery</h1>
          </div>
          <div className='py-1 px-6 bg-white inline-block rounded-full relative -top-6 '>
            <h4 className='text-sunglo-400 text-[0.6rem] md:text-xs uppercase tracking-widest '>Freelance Illustrator <span className='text-dawn-pink-400'>✽</span> Character Design </h4>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
