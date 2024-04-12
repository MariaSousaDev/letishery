import React, { useState } from 'react'
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


export default function Layout() {

   
  return (
      <div className="flex flex-col font-poppins tracking-wider bg-gradient-to-r from-sunglo-50 to-transparent">
        <div className='xl:w-[80vw] xl:self-center '>
            <Menu />
                <div className='m-8 text-center'>
                    <Outlet/>
                </div>
            {/* <Footer /> */}

        </div>
      </div>
  )
}
