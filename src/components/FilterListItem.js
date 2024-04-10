import React from 'react'

export default function FilterListItem({ title = "Animecon", date = "July 30 to 31", location = "Utretch, Netherlands", filter = "none", year = "2024", image ="https://placehold.co/500x500"}) {
  return (
      <div className='flex flex-col basis-1/3 md:basis-1/2 h-full border border-rose-100'>
        <span className='block w-full p-1 bg-rose-100 rose-500 mb-3'>{year}</span>
        <h3 className='text-2xl mb-2 '>{title}</h3>
          <div className='mb-4 flex-grow'>
            <h4 >{date}</h4>
            <h4 >{location}</h4>
        </div>
        <img className='w-full ' src={image} alt="" />

    </div>
  )
}
