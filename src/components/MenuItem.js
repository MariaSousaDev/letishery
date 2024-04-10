import React from 'react'
import { Link } from "react-router-dom";

export default function MenuItem({ link, title }) {
  return (
    <li className="block mb-2 last:mb-0 group-hover:opacity-50 hover:!opacity-100 transition-opacity ease-in-out ">
      <Link to={link} >{title}</Link>
    </li>
  )
}


