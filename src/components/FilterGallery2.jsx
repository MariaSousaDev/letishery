import React, { useEffect, useState } from 'react'
import FilterGalleryItem from './FilterGalleryItem'
import Popup from './Popup'
import { createPortal } from 'react-dom'
import { ProGallery } from 'pro-gallery';

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

    const options = {
        
            "layoutParams": {
                "structure": {
                    "galleryLayout": 0
                }
            }
        
    };

    const container = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    const items2 = () => {
        let final = {};
        FilterEvent().map((work, index) => {
            let temp = [];
            temp['html']=<FilterGalleryItem key={index} {...work} onClick={() => openPopup(index)} />
            temp['itemId']=index
            final.push(temp)
        })
        console.log(final);
        return final
    }


    const items = [
        { // Image item:
            itemId: 'sample-id',
            mediaUrl: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { // Another Image item:
            itemId: 'differentItem',
            mediaUrl: 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk',
            metaData: {
                type: 'image',
                height: 200,
                width: 100,
                title: 'sample-title',
                description: 'sample-description',
                focalPoint: [0, 0],
                link: {
                    url: 'http://example.com',
                    target: '_blank'
                },
            }
        },
        { // HTML item:
            itemId: 'htmlItem',
            html: '',
            metadata: {
                type: "text",
                height: 200,
                width: 300,
                title: 'sample-title',
                description: 'sample-description',
                backgroundColor: 'pink'
            },

        },
    ]

    return (
        <ProGallery
            items={items2}
            options={options}
            container={container}>

        </ProGallery>

        //  <div className='columns-1 md:columns-2 gap-6 xl:columns-3 items-center justify-center'>
        //     {
        //         popup && createPortal(
        //             <Popup works={FilterEvent()} clicked={clicked} openPopup={() => openPopup()} />, document.body
        //         )
        //     }
        //     {
        //         FilterEvent().map((work, index) => <FilterGalleryItem key={index} {...work} onClick={() => openPopup(index)} />)


        //     }
        // </div>
    )
}
