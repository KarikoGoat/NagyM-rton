import React, { useEffect, useState } from 'react'
import MainNavbar from '../components/MainNavbar';
import sz7 from '../public/sz7.jpg';
import Image from 'next/image';


const HeroSection = (props) => {

  return (
    <div className='bg-background4 w-full h-screen bg-cover bg-center' ref={props.heroRef}>
      <MainNavbar galleryRef={props.galleryRef}  executeScroll={props.executeScroll} />
      <div className={`absolute z-20 flex flex-col space-y-12 top-1/3 w-full  items-center cssanimation sequence fadeInBottom
      text-center text-white text-5xl`}>
        <h1>Képek</h1>
      </div>
      <div className='bg-black opacity-50 absolute top-16 md:top-[92px] right-0 left-0 bottom-0 z-0'></div>
    </div>
  )
}

export default HeroSection