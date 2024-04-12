import React from 'react'
import BG01 from "../assets/bgs/01-01 leti dragon.png";


export default function Index() {
  return (
    <div className='relative h-screen flex flex-col items-center justify-center w-full pl-[22vw] '>
      <div className='items-center justify-center rounded-full overflow-hidden w-3/4  xl:w-[35vw] xl:h-[35vw]'>
        <img className='xl:-mt-36' src={BG01} alt="" />
      </div>
      <div className='absolute top-1/2 mt-20 '>
        <div className='py-2 px-16 max-w-screen-sm text-center'>
          <h1 className='text-sunglo-400 font-msmadi text-9xl cs-border'>Letishery</h1>
        </div>
        <div className='py-1 px-6 bg-white inline-block rounded-full relative -top-6 '>
          <h4 className='text-sunglo-400 text-xs uppercase tracking-widest '>Freelance Illustrator <span className='text-dawn-pink-400'>✽</span> Character Design </h4>
        </div>
      </div>
    </div>
  )
}
