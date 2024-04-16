import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    menuOpen ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')

    return () => {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [menuOpen])

  return (
    <div className='relative mb-4 sm:mb-0 w-screen h-14 sm:w-auto sm:h-auto '>
      <div className='fixed bg-white w-full h-14 z-20'>
        <div className={` w-24 h-12 fixed right-0 before:content-[""] before:w-8 before:h-[4px] before:translate-x-10 after:translate-x-10 before:translate-y-4 after:translate-y-7 before:bg-sunglo-400 before:absolute 
        after:content-[""] after:w-8 after:h-[4px] after:bg-sunglo-400 after:absolute   sm:hidden  ${menuOpen ? "before:rotate-45 after:-rotate-45 before:translate-y-7 after:translate-y-7" : ""} before:transition-transform after:transition-transform`} onClick={handleOpenMenu}></div>
      </div>

      <Link className='inline-block fixed top-2 left-2 z-30 w-24 sm:w-52 sm:top-10 ' to="/" >
        <img src="https://letishery.carrd.co/assets/images/image10.png?v=8dee3245" />
      </Link>

      <div className={`fixed h-screen  flex items-center p-8 w-screen sm:w-[22vw] z-10 bg-white sm:bg-transparent -translate-x-full sm:translate-x-0 ${menuOpen ? "!translate-x-0" : ""} transition-transform `}>
        <ul className='w-full group overflow-hidden text-center sm:text-left' onClick={handleOpenMenu}>
          <MenuItem title="About" link="/About" />
          <MenuItem title="Works" link="/Works" />
          <MenuItem title="Conventions" link="/Conventions" />
          <MenuItem title="Contact" link="/Contact" />
        </ul>
      </div>

    </div>
  )
}


