import React from 'react'
import FilterEventItem from "./FilterEventItem";
import { dataEvent } from "../utils/dataEvent";

export default function FilterEvent({code}) {

    const events = dataEvent

  return (
    <div 
    className='grid md:grid-cols-2 gap-5 items-center xl:grid-cols-3'>
        {
            (code.length > 0 ? events.filter(entry => code.includes(entry.code)) : events)
            .map((event,index) => <FilterEventItem key={index} {...event}  /> )
        }
    </div>
  )
}

