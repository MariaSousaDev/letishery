import React from 'react'

export default function FilterItem({ title, onClick, isActive}) {


  return (
    <li className={`inline-block px-8 mr-2 mb-2 last:mr-0 border py-2 rounded-full bg-dawn-pink-50 text-sunglo-400 border-dawn-pink-900 sm:hover:bg-sunglo-200 sm:hover:text-sunglo-600 transition-colors ease-in-out cursor-pointer ${(isActive ? 'bg-sunglo-300 text-sunglo-50 border-sunglo-50 sm:hover:bg-sunglo-300 !hover:text-sunglo-100' : '')} `} onClick={onClick}>
        {title}
    </li>
  )
}
