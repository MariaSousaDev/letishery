import React from 'react'

export default function Popup({image}) {
  return (
    <div className='fixed top-0 left-0 bg-white w-full h-full'>
        <img src={image.url} alt="" />
    </div>
  )
}
