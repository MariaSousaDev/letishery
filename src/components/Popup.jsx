import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { framerPage } from '../utils/framerData';

export default function Popup({works, clicked, openPopup}) {
  const [visibleImage, setVisibleImage] = useState(clicked)
  const [direction, setDirection] = useState('left')

  const handleChangeImage = (index) => {
    setDirection(index === -1 ? 'left' : 'right')
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
    <motion.div className='fixed top-0 left-0 bg-dawn-pink-50 w-screen md:w-full h-screen md:h-full z-30'
    {...framerPage}>
      <div className='flex items-center justify-center h-full'>
        <div className='absolute top-0 right-0 cursor-pointer group' onClick={openPopup}>
          <img className='w-8 m-6 md:group-hover:rotate-90 transition-transform duration-300 ' src="https://letishery.art/images/icons/cross.svg"  />
        </div>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img 
            className='w-auto md:max-w-[80vw] md:max-h-[80vh]' 
            src={works[visibleImage].image} 
            key={visibleImage} 
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleChangeImage(1);
              } else if (swipe > swipeConfidenceThreshold) {
                handleChangeImage(-1);
              }
            }}
  
           />
        </AnimatePresence>
        <div className='hidden md:block absolute top-[50vh] right-0 cursor-pointer group' onClick={()=>handleChangeImage(1)}>
          <img className='w-8 m-6 animate-wiggle md:hover:animate-slide duration-300 z-20 ' src="https://letishery.art/images/icons/arrow-r.svg" />
        </div>
        <div className='hidden md:block absolute top-[50vh] left-0 cursor-pointer group' onClick={()=>handleChangeImage(-1)}>
          <img className='w-8 m-6 animate-wiggle md:hover:animate-slide duration-300 z-20  ' src="https://letishery.art/images/icons/arrow-l.svg" />
        </div>
      </div>
    </motion.div>
  )
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const slideVariants = {
  enter: (direction) =>{
    return{
      x: direction === "left" ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction)=>{
    return{
      zIndex: 0,
      opacity: 0,
      scale: 0.8,
      x: direction === "left" ? 1000 : -1000,
    }
  },
};
