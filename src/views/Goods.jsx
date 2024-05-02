import React from 'react'
import Filter  from "../components/Filter";
import Title from '../components/Title';
import { motion } from 'framer-motion';
import { framerPage } from '../utils/framerData';
import Divider from '../components/Divider';

export default function Goods() {
  return (
    <motion.div 
      className=' flex flex-col items-center justify-center w-full md:pl-[24vw] lg:pl-[22vw]'
      {...framerPage}
    >
      <Title title="Goods" />
      <p className=' w-full md:w-3/4 mb-8 text-dawn-pink-800'>
        All my merch is currently hosted in Etsy, all links will be redirected to there.
      </p>
      <Divider/>
      <Filter type="goods"/>
    </motion.div>
  )
}
