import React from 'react'
import Divider from './Divider'
import Button from './Button'

export default function CTA({title,paragraph,label,link}) {
  return (
      <div className='flex flex-col items-center justify-center w-full my-16'>
        <Divider />
        <h3 className='font-msmadi text-sunglo-400 text-5xl tracking-wide'>{title}</h3>
          {paragraph ? <p className='w-full md:w-3/4 mb-8 text-dawn-pink-800 pt-4'>{paragraph.split('<br/>').map(sentence => <span className='block'>{sentence}</span>)}</p> : ''}
        <Button label={label} link={'/'+link}/>
        <Divider />


    </div>
  )
}
