import React from 'react'
import Filter  from "../components/Filter";
import Title from '../components/Title';
import { motion } from 'framer-motion';
import { framerPage } from '../utils/framerData';
import Divider from '../components/Divider';

export default function Events() {
  return (
    <motion.div 
      className=' flex flex-col items-center justify-center w-full md:pl-[24vw] lg:pl-[22vw]'
      {...framerPage}
    >
      <Title title="Events" />
      <p className=' w-full md:w-3/4 mb-8 text-dawn-pink-800'>
        I frequent the artist alleys of some conventions, mainly in the Netherlands. <br/> If you are attending, feel free to drop by and say hi!
      </p>
      <Divider/>
      <Filter type="events"/>
    </motion.div>
  )
}
