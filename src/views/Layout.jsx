import React, { useEffect, useState } from 'react'
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";


export default function Layout() {
  // To include in final version
  // useEffect(() => {
  //   const handleContextmenu = e => {
  //     e.preventDefault()
  //   }
  //   document.addEventListener('contextmenu', handleContextmenu)
  //   return function cleanup() {
  //     document.removeEventListener('contextmenu', handleContextmenu)
  //   }
  // }, [])
   
  return (
      <div className="flex flex-col font-poppins tracking-wider bg-gradient-to-r from-sunglo-50 to-transparent">
        <div className='relative xl:w-[80vw] xl:self-center '>
          <img className='fixed bottom-0 right-0 -z-10 max-h-full' src="https://letishery.art/images/bg01.png" alt="" />
          <img className='fixed top-14 md:top-0 left-0 md:left-[26vw] lg:left-[22vw] -z-10 max-h-full rotate-180' src="https://letishery.art/images/bg01.png" alt="" />
          <Menu />
          <div className='min-h-[95vh] md:min-h-screen flex p-8 text-center mt-12 md:mt-0 overflow-hidden'>
              <Outlet/>
          </div>
        </div>
      </div>
  )
}
