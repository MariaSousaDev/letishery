import React from 'react'

export default function FilterWorkItem({url, onClick}) {
  return (
    <div className='w-full mb-6 sm:hover:scale-110 sm:hover:-rotate-2 transition-transform cursor-zoom-in '>
        <img src={url} alt="" onClick={ onClick }/>
    </div>
  )
}
