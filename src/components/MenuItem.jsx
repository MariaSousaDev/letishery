import React from 'react'
import { Link } from "react-router-dom";

export default function MenuItem({ link, title, onClick }) {
  return (
    <li 
      className="block text-sunglo-800 mb-4 last:mb-0 md:pl-8 md:group-hover:opacity-50 md:hover:!opacity-100 text-lg  transition-all ease-in-out relative md:hover:translate-x-6" onClick={onClick}>
      <Link 
        className='md:before:content-["✽"] md:before:text-dawn-pink-400 md:before:top-0 md:before:-left-0   md:before:absolute before:-translate-x-full before:hover:translate-x-2 leading-8 tracking-widest before:transition-transform before:ease-linear before:duration-200 md:block' 
        to={link} 
      >
        <span className='font-msmadi text-3xl text-sunglo-800 tracking-widest'>{title[0]}</span> 
          {title.slice(1)}
      </Link>
    </li>
  )
}
