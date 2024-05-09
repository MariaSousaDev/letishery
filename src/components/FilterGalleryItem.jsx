import { motion } from 'framer-motion';
import React from 'react'
import { framerInViewHover } from '../utils/framerData';

export default function FilterGalleryItem({image, onClick, url, mode='default'}) {
  return (
    <motion.div 
      className={`h-auto max-w-full cursor-zoom-in rounded-lg overflow-hidden`}
      // className='w-full mb-6 cursor-zoom-in absolute overflow-hidden'
      // className='w-full mb-6 cursor-zoom-in '
      {...framerInViewHover}
      >
        {
          url ? 
          <a href={url} target="_blank"><img src={image} alt="" /></a>
          : 
          <img className='h-full w-full  object-cover object-center' src={image} alt="" onClick={ onClick }/>
        }
    </motion.div>
  )
}

