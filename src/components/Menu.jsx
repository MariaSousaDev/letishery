import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import Footer from './Footer';

//call dan senpai

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = (burger = false) => {
    console.log(menuOpen, burger);
    if (menuOpen || burger)
      setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    menuOpen ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')

    return () => {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [menuOpen])

  return (
    <div className='fixed w-screen md:w-[26vw] lg:w-[22vw] xl:w-[15vw] h-14 z-20 md:border md:border-r-sunglo-200 md:h-screen md:flex md:items-center md:justify-center md:flex-col md:bg-[url("https://letishery.art/images/bg02.png")] select-none'>
      <div className=' bg-white w-full h-14  md:bg-transparent md:hidden '>
        <div className={`w-24 h-12 fixed right-0 before:content-[""] before:w-8 before:h-[4px] before:translate-x-10 after:translate-x-10 before:translate-y-4 after:translate-y-7 before:bg-sunglo-400 before:absolute 
        after:content-[""] after:w-8 after:h-[4px] after:bg-sunglo-400 after:absolute md:hidden  ${menuOpen ? "before:rotate-45 after:-rotate-45 before:translate-y-7 after:translate-y-7" : ""} before:transition-transform after:transition-transform `} onClick={()=>handleOpenMenu(true)}></div>
      </div>

      <Link className='inline-block absolute z-30 top-2 left-2 w-24 w-max-[10vh] md:w-48 md:static md:pb-8' to="/" onClick={() => handleOpenMenu(false)}>
          <img src="https://letishery.art/images/logo.png" />
      </Link>

      <div className={`h-screen flex flex-col items-center justify-center p-8 w-screen md:w-full  z-10 bg-white md:bg-transparent -translate-x-full md:translate-x-0 ${menuOpen ? "!translate-x-0" : ""} transition-transform md:h-auto md:border-t md:border-t-sunglo-200 md:p-0`}>

        <ul className='w-full group overflow-hidden text-center md:text-left md:py-8 '>
            <MenuItem title="About" onClick={() => handleOpenMenu(false)} link="/About" />
            <MenuItem title="Works" onClick={() => handleOpenMenu(false)} link="/Works" />
            <MenuItem title="Events" onClick={() => handleOpenMenu(false)} link="/Events" />
            <MenuItem title="Goods" onClick={() => handleOpenMenu(false)} link="/Goods" />
            <MenuItem title="Contact" onClick={() => handleOpenMenu(false)} link="/Contact" />
          </ul>


        <Footer/>
      </div>


    </div>
  )
}


