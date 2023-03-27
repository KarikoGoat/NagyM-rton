import React, { useEffect, useState } from 'react'
import MainNavbar from '../components/MainNavbar';
import sz7 from '../public/sz7.jpg';
import Image from 'next/image';


const HeroSection = (props) => {

  return (
    <div className='bg-background2 w-full h-screen bg-cover bg-center' ref={props.heroRef}>
      <MainNavbar galleryRef={props.galleryRef}/>
      <div className={`absolute z-40 flex flex-col space-y-12 top-1/3 w-full right-1/2mx-12 mt- items-center cssanimation sequence fadeInBottom
      text-center text-white text-5xl`}>
        <h1>Képek</h1>
      </div>
      <div className='bg-black opacity-50 absolute top-[60px] right-0 left-0 bottom-0 z-0'>h</div>
    </div>
  )
}

export default HeroSection