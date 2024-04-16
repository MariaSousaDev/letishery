import React, { useEffect, useState } from 'react'
import cross from "../assets/icons/cross.svg";
import arrowL from "../assets/icons/arrow-l.svg";
import arrowR from "../assets/icons/arrow-r.svg";

export default function Popup({works, clicked, openPopup}) {
  const [visibleImage, setVisibleImage] = useState(clicked)

  const handleChangeImage = (index) => {
    setVisibleImage((prevState) =>
      prevState + index < 0
        ? works.length - 1
        : prevState + index >= works.length
          ? 0
          : prevState + index
    );
  };

  useEffect(() => {
    const handleKeyEvent = (event) => {
      switch (event.key) {
        case "Escape":
          openPopup();
          break;
        case "ArrowRight":
          handleChangeImage(1);
          break;
        case "ArrowLeft":
          handleChangeImage(-1);
          break;
        default:
          break;
      }
    };
    window.addEventListener("keyup", handleKeyEvent);
    return () => {
      window.removeEventListener("keyup", handleKeyEvent);
    };
  }, []);
   

  return (
    <div className='fixed top-0 left-0 bg-dawn-pink-50 w-screen sm:w-full h-screen sm:h-full z-30'>
      <div className='flex items-center justify-center h-full'>
        <div className='absolute top-0 right-0 cursor-pointer group' onClick={openPopup}>
          <img className='w-8 m-6 sm:group-hover:rotate-90 transition-transform duration-300 ' src={cross}  />
        </div>
        <img className='w-auto sm:max-w-[80vw] sm:max-h-[80vh]' src={works[visibleImage].url} alt="" />
        <div className='hidden sm:block absolute top-[50vh] right-0 cursor-pointer group' onClick={()=>handleChangeImage(1)}>
          <img className='w-8 m-6 animate-wiggle sm:hover:animate-slide duration-300 z-20 ' src={arrowR} />
        </div>
        <div className='hidden sm:block absolute top-[50vh] left-0 cursor-pointer group' onClick={()=>handleChangeImage(-1)}>
          <img className='w-8 m-6 animate-wiggle sm:hover:animate-slide duration-300 z-20  ' src={arrowL} />
        </div>
      </div>
    </div>
  )
}
