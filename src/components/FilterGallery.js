import React, { useEffect, useState } from 'react'
import FilterGalleryItem from './FilterGalleryItem'
import Popup from './Popup'
import { createPortal } from 'react-dom'

export default function FilterGallery({code, data}) {
    const [popup, setPopup] = useState(false)
    const [clicked, setClicked] = useState(0)

    const works = data;

    const FilterEvent = () => { 
        return code.length > 0 ? works.filter(entry => entry.code.some(elemt => code.includes(elemt))) : works;
     }

    const openPopup = (index =null) => {
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
        <div className=''>
            {/* <div className='flex flex-wrap gap-6 justify-center items-center'> */}
            <div className='columns-1 md:columns-2 gap-6 xl:columns-3 items-center justify-center'>
                {
                    popup && createPortal(
                        <Popup works={FilterEvent()} clicked={clicked} openPopup={() => openPopup()} />, document.body
                    )
                }
                {
                    FilterEvent().map((work, index) => <FilterGalleryItem key={index} {...work} onClick={() => openPopup(index)} />)


                }
            </div>
        </div>
    )
}
