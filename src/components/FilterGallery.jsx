import React, { useEffect, useState } from 'react'
import FilterGalleryItem from './FilterGalleryItem'
import Popup from './Popup'
import { createPortal } from 'react-dom'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function FilterGallery({code, data, type}) {
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
        <div className='w-full xl:w-[55vw]'>
            {
                popup && createPortal(
                    <Popup works={FilterEvent()} clicked={clicked} openPopup={() => openPopup()} />, document.body
                )
            }

            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1400: 3, 2300: 3 }}>
                <Masonry gutter="1.5rem">
                {
                    
                    FilterEvent().map((work, index) => <FilterGalleryItem key={index} {...work} onClick={() => openPopup(index)} />)


                }
                
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
