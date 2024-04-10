import React, { Component } from 'react'
import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
    return (
      <div className='fixed h-screen flex items-center p-8 w-[22vw] border-r-sunglo-400 border-r bg-sunglo-50'>
            <ul className='w-full group'>
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

