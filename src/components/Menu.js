import React, { Component } from 'react'
import MenuItem from "./MenuItem";
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className='relative mb-10 sm:mb-0'>

        <div className='fixed top-0 left-0 w-screen h-12 bg-white z-20
        before:content-[""] before:w-8 before:h-[4px] before:bg-sunglo-400 before:absolute before:top-4 before:right-3 
        after:content-[""] after:w-8 after:h-[4px] after:bg-sunglo-400 after:absolute after:bottom-4 after:right-3 sm:hidden'></div>

        <Link className='inline-block fixed top-2 left-2 z-30 w-24 sm:w-52 sm:top-10 ' to="/" >
          <img src="https://letishery.carrd.co/assets/images/image10.png?v=8dee3245" />
        </Link>

        <div className='absolute sm:fixed h-screen flex items-center p-8 w-screen sm:w-[22vw] z-10 bg-white sm:bg-transparent left-[100%] sm:left-0'>
              <ul className='w-full group overflow-hidden text-center sm:text-left'>
                  <MenuItem title="About" link="/About"/>
                  <MenuItem title="Works" link="/Works"/>
                  <MenuItem title="Conventions" link="/Conventions"/>
                  <MenuItem title="Contact" link="/Contact"/>
              </ul>
          </div>

      </div>
    ) 
  }
}

export default Menu;

