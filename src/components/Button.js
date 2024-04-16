import React from 'react'

export default function Button({label, link}) {
  return (
      <a className='block p-2 border b-1 rounded-full m-2 bg-dawn-pink-50 text-sunglo-400 border-dawn-pink-900 sm:hover:border-sunglo-50 sm:hover:bg-sunglo-400 sm:hover:text-sunglo-50 transition-all ease-in-out duration-300 sm:hover:-rotate-1  ' href={link} target="_blank">{label}</a>
  )
}
