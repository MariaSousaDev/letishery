import React, { useState } from 'react'
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {

   
  return (
      <div className="flex font-mono">
          <Menu />
          <div className='min-h-screen flex flex-col justify-center w-full pl-[22vw] '>
              <div className='p-8 text-center'>
                  <a className='inline-block w-[150px]' href="#">
                      <img src="https://letishery.carrd.co/assets/images/image10.png?v=8dee3245" />
                  </a>
                  <div className='p-20'>
                      <Outlet/>
                  </div>
              </div>
              <Footer />
          </div>
      </div>
  )
}
