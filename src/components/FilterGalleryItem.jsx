import { motion } from 'framer-motion';
import React from 'react'
import { framerInViewHover } from '../utils/framerData';

export default function FilterGalleryItem({image, onClick, url, type}) {
  return (
    <motion.div 
      className='w-full mb-6 cursor-zoom-in '
      {...framerInViewHover}
      >
        {
          url ? 
          <a href={url} target="_blank"><img src={image} alt="" /></a>
          : 
          <img src={image} alt="" onClick={ onClick }/>
        }
    </motion.div>
  )
}

