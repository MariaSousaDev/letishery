import React from 'react'

export default function Button({label, link, }) {
  return (
      <a className='block p-2 border b-1 rounded-full m-2 bg-white text-sunglo-400 border-sunglo-200 md:hover:border-sunglo-50 md:hover:bg-sunglo-400 md:hover:text-sunglo-50 transition-all ease-in-out duration-300 md:hover:-rotate-1  ' href={link} target="_blank">{label}</a>
  )
}
