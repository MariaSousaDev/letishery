import React from 'react'
import Filter from '../components/Filter'
import Title from '../components/Title'
import { motion } from 'framer-motion'
import { framerPage } from '../utils/framerData'
import CTA from '../components/CTA'

export default function Works() {

  return (
    <motion.div 
      className=' flex flex-col items-center justify-center w-full md:pl-[24vw] lg:pl-[22vw]'
      {...framerPage}>
      <Title title="Works" />
      <Filter type="works"/>
      <CTA title="Do you like my work?" paragraph="I'm open for new projects! <br/>Send your request and I'll follow as soon as possible." label="Contact me" link="contact" />

    </motion.div>
  )
}
