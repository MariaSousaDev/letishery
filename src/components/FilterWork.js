import React, { useEffect, useState } from 'react'
import FilterWorkItem from './FilterWorkItem'
import Popup from './Popup'
import { createPortal } from 'react-dom'
import fanIronmouse from "../assets/works/01-04 ironmouse.png";
import fanShirorin from "../assets/works/02-08 SHIRORIN SKETCH ig.png";
import chibiTwst from "../assets/works/03-01 twst ig.png";
import charaCommCherry from "../assets/works/03-03 cherry character sheet final ig.png";
import fanBettel from "../assets/works/03-04 bettel halfbody swm.png";
import charaLeti from "../assets/works/03-04 leti elf.png";
import commNyok from "../assets/works/12-01 nyoki comm ig.png";
import ogLeti from "../assets/works/12-02 evil leti portrait ig1.png";

export default function FilterWork({code}) {
    const [popup, setPopup] = useState(false)
    const [clicked, setClicked] = useState(0)

    const works = [
        { url: fanIronmouse , code: ["fan","illu"] },
        { url: fanShirorin, code: ["fan", "illu"] },
        { url: chibiTwst , code: ["chibi"] },
        { url: charaCommCherry , code: ["chara","comm"] },
        { url: fanBettel, code: ["fan", "illu"] },
        { url: charaLeti , code: ["chara","og"] },
        { url: commNyok, code: ["comm", "illu"] },
        { url: ogLeti, code: ["og", "illu"] },

    ]

    const filterList = () => { 
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
        <div className='columns-1 sm:columns-2 gap-6  xl:columns-3 items-center justify-center'>
            {
                popup && createPortal(
                    <Popup works={filterList()} clicked={clicked} openPopup={() => openPopup()} />, document.body
                )
            }
            {
                filterList().map((work, index) => <FilterWorkItem key={index} {...work} onClick={() => openPopup(index)} />)


            }
        </div>
    )
}
