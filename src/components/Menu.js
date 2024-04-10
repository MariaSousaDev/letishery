import React, { Component } from 'react'
import MenuItem from "./MenuItem";

class Menu extends Component {
  render() {
    return (
      <div className='h-screen flex items-center p-8 min-w-[26vh] border-l-red-100 border'>
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

