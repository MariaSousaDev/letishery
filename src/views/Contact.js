import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'
import { motion } from 'framer-motion'
import { framerPage } from '../utils/framerData'
import Divider from '../components/Divider'

export default function Contact() {
  

  return (
    <motion.div 
      className=' flex flex-col items-center justify-center w-full md:pl-[24vw] lg:pl-[22vw]'
      {...framerPage}
      >
      <Title title="Contact" />
      <p className='w-full md:w-3/4 mb-8 text-dawn-pink-800'>
        Please fill out the form below to provide me with more details about your project or request. I'll get back to you as soon as possible!
      </p>
      <Divider />
      <Form/>
    </motion.div>
  )
}
