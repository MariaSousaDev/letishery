import React, { Component } from 'react'
import MenuItem from "./MenuItem";
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div className='fixed h-screen flex  items-center p-8 w-[22vw] z-10'>
        <Link className='inline-block min-w-[350] w-[70%] absolute top-5 left-5' to="/" >
          <img src="https://letishery.carrd.co/assets/images/image10.png?v=8dee3245" />
        </Link>
            <ul className='w-full group overflow-hidden'>
                <MenuItem title="About" link="/About"/>
                <MenuItem title="Works" link="/Works"/>
                <MenuItem title="Conventions" link="/Conventions"/>
                <MenuItem title="Contact" link="/Contact"/>
            </ul>
        </div>
    ) 
  }
}

export default Menu;

