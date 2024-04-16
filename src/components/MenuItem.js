import React from 'react'
import { Link } from "react-router-dom";

export default function MenuItem({ link, title }) {
  return (
    <li className="block text-sunglo-800 mb-2 last:mb-0 sm:group-hover:opacity-50 sm:hover:!opacity-100 transition-all ease-in-out relative sm:hover:translate-x-6">
      <Link className='before:content-["✽"] before:text-dawn-pink-400 before:top-0 before:-left-5  before:pr-2 before:absolute ' to={link} >{title}</Link>
    </li>
  )
}



//fix: before not working

