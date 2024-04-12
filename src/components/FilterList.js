import React from 'react'
import FilterListItem from "./FilterListItem";

export default function FilterList({code}) {

    const events = [
        { title:"Animecon", year:"2024", date:"June 7 to 9", location:"Rijswijk, Netherlands", code:"nl" },
        { title: "Heroes Made in Asia", year: "2024", date: "March 15 & 16", location:"Jaarbeurs, Netherlands", code:"nl" },
        { title:"Japan Weekend", year:"2023", date:"Sept 23 & 24", location:"Madrid, Spain", code:"es" },
        { title:"TomoFair", year:"2023", date:"July 8", location:"Utrecht, Netherlands", code:"nl" },
        { title:"Animecon", year:"2023", date:"June 9 to 11", location:"Rijswijk, Netherlands", code:"nl" },
    ]

  return (
    <div className='grid sm:grid-cols-2 gap-5 items-center xl:grid-cols-3'>
        {
            (code.length > 0 ? events.filter(entry => code.includes(entry.code)) : events)
            .map((event,index) => <FilterListItem key={index} {...event}  /> )
        }
    </div>
  )
}

