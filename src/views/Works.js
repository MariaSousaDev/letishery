import React from 'react'
import Filter from '../components/Filter'
import Title from '../components/Title'
import { motion } from 'framer-motion'
import { framerPage } from '../utils/framerData'

export default function Works() {

  return (
    <motion.div 
      className=' flex flex-col items-center justify-center w-full md:pl-[24vw] lg:pl-[22vw]'
      {...framerPage}>
      <Title title="Works" />
      <Filter type="works"/>

    </motion.div>
  )
}
