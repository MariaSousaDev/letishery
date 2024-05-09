import React, { useEffect } from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import { motion } from 'framer-motion';
import { framerPage } from '../utils/framerData';
import Divider from '../components/Divider';
import Parallax from 'parallax-js' 
import { HiChatBubbleOvalLeft } from "react-icons/hi2";


export default function About() {

  useEffect(() => {
    const scene = document.getElementById('scene2');
    const parallaxInstance = new Parallax(scene);

    return () => {
    }
  },)

  
  return (
    <motion.div 
      className=' flex flex-col items-center justify-center w-full md:pl-[26vw] lg:pl-[22vw]'
      {...framerPage}
      >
      <Title title="About me"/>

      <div id="scene2"  className='relative justify-center flex'>
        <img data-depth="0.2" className='absolute' src="https://letishery.art/images/05-03 leti portrait casual bg1.png" alt="" />
        <img data-depth="0.5" className='absolute' src="https://letishery.art/images/05-03 leti portrait casual bg2.png" alt="" />
        <img data-depth="0.25" className='absolute' src="https://letishery.art/images/05-03 leti portrait casual bg3.png" alt="" />
        <div data-depth="0.25" className='absolute w-full h-1/2 '>
          <div className='relative animate-wiggle md:hover:animate-slide duration-300 top-20  left-3/4 transform -translate-y-3/4 '>
            <HiChatBubbleOvalLeft className='fill-sunglo-100 w-40 h-40' />
            <h3 className='font-msmadi text-sunglo-400 text-5xl tracking-wide absolute top-14 left-7'>Hola!</h3>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-start justify-start flex-col mt-8'>
        <div className='md:col-span-2 flex items-center flex-col'>
          <p className=' w-full md:w-3/4 p-2 text-dawn-pink-800'>
            I'm Leti, a freelance artist from Spain based in the Netherlands. I specialize in anime illustrations and character designs. <br /><br />
            I'm available for personal and commercial projects. Whether you're looking to add a personal touch to your project or bring your brand to life, I'm here to help. Let's collaborate and create something amazing together! <br /><br />
          </p>
          
        </div>
        <div>
          <h3 className='font-msmadi text-sunglo-400 text-5xl tracking-wide'>Languages</h3>
          <p className=' w-full p-2 text-dawn-pink-800'>
            ✽ English <br/>
            ✽ Spanish
          </p>
        </div>
        <div>
          <h3 className='font-msmadi text-sunglo-400 text-5xl tracking-wide'>Education</h3>
          <p className=' w-full p-2 text-dawn-pink-800'>
            ✽ Software Engineer
          </p>
        </div>
        <div>
          <h3 className='font-msmadi text-sunglo-400 text-5xl tracking-wide'>Skills</h3>
          <p className=' w-full p-2 text-dawn-pink-800'>
            ✽ Illustration<br/>
            ✽ Character design<br/>
            ✽ Merch Design<br/>
            ✽ Web Development<br/>
          </p>
        </div>
        <div>
          <h3 className='font-msmadi text-sunglo-400 text-5xl tracking-wide'>Art tools</h3>
          <p className=' w-full p-2 text-dawn-pink-800'>
            ✽ Wacom Intuos Pro L<br/>
            ✽ Clip Studio Paint<br />
            ✽ Adobe Photoshop
          </p>
        </div>

      </div>

    <Divider/>
      <h3 className='font-msmadi text-sunglo-400 text-5xl tracking-wide mb-8'>Social Media & Links</h3>

      <div className='grid gap-6 md:grid-cols-3 mb-10'>
        <div className=''>
            <h5>Art</h5>
            <Button link="https://twitter.com/Letishery" label="Twitter"/>
            <Button link="https://www.instagram.com/letishery" label="Instagram"/>
            <Button link="https://www.pixiv.net/en/users/73379328" label="Pixiv"/>
        </div>
        <div>
            <h5>Merch</h5>
            <Button link="https://letishery.etsy.com" label="Etsy (physical)"/>
            <Button link="https://ko-fi.com/letishery" label="Ko-Fi (digital)"/>
        </div>
        <div>
            <h5>Commissions</h5>
            <Button link="https://vgen.co/letishery" label="VGen"/>
            <h5 className='mt-8'>Vtuber</h5>
            <Button link="https://www.twitch.tv/letishiaweiss" label="Twitch (Streams)"/>
        </div>
      </div>

      <Divider />

      <img src="https://letishery.art/images/about-2.png" alt="" />
    </motion.div>
  )
}
