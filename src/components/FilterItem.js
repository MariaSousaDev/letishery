import React from 'react'

export default function FilterItem({ title, onClick, isActive}) {

  return (
    <li className={`inline-block px-6 mr-2 mb-2 text-sm last:mr-0 border py-1 rounded-full bg-dawn-pink-50 text-sunglo-400 border-dawn-pink-900 md:hover:bg-sunglo-200 md:hover:text-sunglo-600 transition-colors ease-in-out cursor-pointer ${(isActive ? 'bg-sunglo-300 text-sunglo-50 border-sunglo-50 md:hover:bg-sunglo-300 !hover:text-sunglo-100' : '')} `} onClick={onClick}>
        {title}
    </li>
  )
}
