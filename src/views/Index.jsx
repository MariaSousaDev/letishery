import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { framerPage } from '../utils/framerData';
import Parallax from 'parallax-js' 


export default function Index() {
  
  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  
    return () => {
    }
  }, )
  
  
  return (
      <motion.div className='relative w-full md:pl-[24vw] lg:pl-[22vw] select-none flex flex-col items-center justify-center' {...framerPage}>
        <div id="scene" className='relative mt-20 sm:-mt-8 md:mt-0 items-center justify-center lg:rounded-full overflow-hidden  sm:w-[calc(90vw-4rem)] sm:h-[calc(90vw+2rem)] md:w-full md:h-[90vw] lg:w-3/4 xl:w-[45vw] xl:h-[100vh]  !scale-150 '>
          <img data-depth="0.7" className='absolute lg:!top-24 xl:!top-42' src="https://letishery.art/images/04-12 leti fullbody bg4.png" alt="" />
          <img data-depth="0.25" className='absolute lg:!top-24 xl:!top-42' src="https://letishery.art/images/04-12 leti fullbody bg3.png" alt="" />
          <img data-depth="0.3" className='absolute lg:!top-24 xl:!top-42' src="https://letishery.art/images/04-12 leti fullbody bg2.png" alt="" />
          <img data-depth="0.2" className='absolute lg:!top-24 xl:!top-42' src="https://letishery.art/images/04-12 leti fullbody bg1.png" alt="" />
        </div>
        <div className='bottom-40 md:bottom-auto sm:absolute md:top-1/2 mt-2 md:mt-20 z-10' >
          <div className='py-2 md:px-16 max-w-screen-sm text-center'>
            <h1 className='text-sunglo-400 font-msmadi text-8xl md:text-9xl cs-border'>Letishery</h1>
          </div>
          <div className='md:py-1 md:px-6 bg-white inline-block rounded-full relative -top-6 '>
            <h4 className='text-sunglo-400 text-[0.6rem] md:text-xs uppercase tracking-widest '>Freelance Illustrator <span className='text-dawn-pink-400'>✽</span> Character Design </h4>
          </div>
        </div>
      </motion.div>
  )
}
