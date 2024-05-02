import React, { Component } from 'react'
import { SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";
import { LuTwitch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from 'framer-motion';
import { framerZoomJump } from '../utils/framerData';

const iconClasses = "inline-block p-2 bg-sunglo-50 rounded-full w-14 h-14 flex items-center justify-center md:w-8 md:h-8 mr-3 md:mr-1 last:mr-0 group hover:bg-sunglo-300 transition-colors"

export default class Footer extends Component {
  render() {
    return (
      <div className='text-center mt-14 md:mt-0 md:border-t md:border-t-sunglo-200 md:p-8'>
          <div className='pb-2 flex justify-center'>
            <motion.a {...framerZoomJump} className={iconClasses}href="https://twitter.com/Letishery">
              <SlSocialTwitter fill='#ed756d' className='group-hover:fill-white transition scale-150 md:scale-100' /></motion.a>
            <motion.a {...framerZoomJump} className={iconClasses} href="https://www.instagram.com/letishery">
              <SlSocialInstagram fill='#ed756d' className='group-hover:fill-white transition scale-150 md:scale-100' /></motion.a>
            <motion.a {...framerZoomJump} className={iconClasses} href="https://www.twitch.tv/letishiaweiss">
              <LuTwitch stroke='#ed756d' className='group-hover:stroke-white transition scale-150 md:scale-100' /></motion.a>
            <motion.a {...framerZoomJump} className={iconClasses} href="https://letishery.etsy.com/">
              <FiShoppingCart stroke='#ed756d' className='group-hover:stroke-white transition scale-150 md:scale-100' /></motion.a>
          </div>
          <p className='hidden md:block text-xs text-dawn-pink-400 pt-2'>
          ART & DESIGN © 2024 by Letishery. All rights reserved. <span className='block pt-1 text-inherit'>Characters and concepts depicted in fanart belong to their respective owners.</span>
          </p>
      </div>
    )
  }
}



