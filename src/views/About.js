import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import chibiLeti from "../assets/bgs/11-05 leti.png";

export default function About() {
  return (
    <div className=' flex flex-col items-center justify-center w-full sm:pl-[22vw]'>
      <Title title="About me"/>
      <div className='flex sm:flex-row-reverse gap-10 mb-10 items-center flex-col'>
        <div className='w-1/2 rounded-full'>
        <img className='w-full ' src={chibiLeti} alt="" />
        </div>
        <p className=' w-full'>
          Hi, I'm Leti! I'm a self-taught freelance illustrator, merch designer, owner of Letishery, and an enjoyer of otome games based in the Netherlands.
          <br /><br />
          I've loved to draw for all my life but recently working on digital illustrations since 2019. You can find my art in social media and in my own merch store.
          <br /><br />
          As always, I thank you for your continuous support and I'll continue to improve and try my best with every piece!
        </p>

      </div>
      <div className='grid gap-6 sm:grid-cols-3'>
        <div className=''>
            <span>Art</span>
            <Button link="https://twitter.com/Letishery" label="Twitter"/>
            <Button link="https://www.instagram.com/letishery" label="Instagram"/>
            <Button link="https://www.pixiv.net/en/users/73379328" label="Pixiv"/>
        </div>
        <div>
            <span>Merch</span>
            <Button link="https://letishery.etsy.com" label="Etsy (physical)"/>
            <Button link="https://ko-fi.com/letishery" label="Ko-Fi (digital)"/>
        </div>
        <div>
            <span>Commissions</span>
            <Button link="https://vgen.co/letishery" label="VGen"/>
            <span>Vtuber</span>
            <Button link="https://www.twitch.tv/letishiaweiss" label="Twitch (Streams)"/>
        </div>
      </div>
    </div>
  )
}
