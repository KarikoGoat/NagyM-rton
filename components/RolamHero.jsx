import React, { useEffect, useState } from 'react'
import MainNavbar from '../components/MainNavbar';



const HeroSection = (props) => {

  return (
    <div className='bg-background3 w-full h-screen bg-cover bg-center' ref={props.heroRef}>
      <MainNavbar galleryRef={props.galleryRef}/>
      <div className={`absolute z-20 flex flex-col top-80  space-y-12  w-full items-center cssanimation sequence fadeInBottom
      text-center text-white text-5xl`}>
        <h1>Rólam</h1>
      </div>
    
      <div className='bg-black opacity-50 absolute top-[60px] right-0 left-0 bottom-0 z-0'>h</div>
    </div>
  )
}

export default HeroSection