import React from 'react'
import Divider from './Divider'

export default function Title({title}) {
  return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='relative font-msmadi text-5xl text-sunglo-400 mb-8 pt-12  before:content-["✽"] before:text-sunglo-300 before:right-0 before:left-0 before:ml-4 before:top-3 before:text-3xl before:pr-2 before:absolute before:animate-wiggle'>{title}</h2>
            <Divider/>
        </div>
  )
}
