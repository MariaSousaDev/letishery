import React from 'react'

export default function FilterListItem({ title = "Animecon", date = "July 30 to 31", location = "Utretch, Netherlands", filter = "none", year = "2024", image ="https://placehold.co/500x500"}) {
  return (
      <div className='flex flex-col basis-1/3 md:basis-1/2 h-full border border-sunglo-400 bg-white'>
      <span className='block w-full p-1 bg-sunglo-400 text-sunglo-50 mb-3'>{year}</span>
        <h3 className='text-2xl mb-2 text-sunglo-400'>{title}</h3>
          <div className='mb-4 flex-grow '>
            <span className='block text-dawn-pink-700'>{date}</span>
            <span className='block text-dawn-pink-700'>{location}</span>
        </div>
        <img className='w-full ' src={image} alt="" />

    </div>
  )
}
