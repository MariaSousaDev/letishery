import React, { useState } from 'react'
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import BGFlower from '../assets/bgs/00 - leti bg.png'


export default function Layout() {

   
  return (
      <div className="flex flex-col font-poppins tracking-wider bg-gradient-to-r from-sunglo-50 to-transparent">
        <div className='relative xl:w-[80vw] xl:self-center '>
          <img className='fixed bottom-0 right-0 -z-10 max-h-full' src={BGFlower} alt="" />
            <Menu />
            <div className='min-h-screen flex p-8 text-center'>
                    <Outlet/>
                </div>
            {/* <Footer /> */}

        </div>
      </div>
  )
}
