import React from 'react'
import Filter  from "../components/Filter";

export default function Conventions() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center w-full pl-[22vw]'>
      <h2 >Events</h2>
      <Filter type="events"/>
    </div>
  )
}
