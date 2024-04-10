import React from 'react'

export default function FilterItem({ title, onClick, isActive}) {

  return (
    <li className={'inline-block mr-2 last:mr-0 border p-2 rounded-lg bg-white hover:bg-rose-50 transition-colors ease-in-out cursor-pointer ' + (isActive ? 'bg-rose-200' : '')} onClick={onClick}>
        {title}
    </li>
  )
}
