import React, { useEffect, useState } from 'react'
import FilterWorkItem from './FilterWorkItem'
import Popup from './Popup'
import { createPortal } from 'react-dom'

export default function FilterWork({code}) {
    const [popup, setPopup] = useState(false)
    const [clicked, setClicked] = useState(0)

    const works = [
        { url: "https://placehold.co/500x500", code: "og" },
        { url: "https://placehold.co/450x234", code: "fan" },
        { url: "https://placehold.co/500x500", code: "og" },
        { url: "https://placehold.co/1200x800", code: "fan" },
        { url: "https://placehold.co/500x500", code: "og" },
    ]

    const openPopup = (index) => {
        setPopup(!popup)
        setClicked(index)
    }
    
    useEffect(() => {
        popup ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
    
    return () => {
        document.body.classList.remove('overflow-y-hidden')
    }
    }, [popup])
 

    return (
        <div className='columns-2 gap-6 items-center xl:columns-4'>
            {
                popup && createPortal(
                    <Popup image={works[clicked]} />, document.body
                )
            }
            {
                works.filter(entry => code.includes(entry.code)).map((work,index) => <FilterWorkItem key={index} {...work} onClick={()=>openPopup(index)}  />)
            }
        </div>
    )
}
