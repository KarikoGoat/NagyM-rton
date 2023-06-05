import React, { useEffect, useState } from 'react'
import MainNavbar from '../components/MainNavbar';
import { useRouter } from 'next/router';


const HeroSection = (props) => {

  const router = useRouter();
  const pathname = router.query.termékek

  return (
    <div className='bg-background5 w-full h-screen bg-cover bg-center' ref={props.heroRef}>
      <MainNavbar galleryRef={props.galleryRef}/>
      <div className={`absolute z-20 flex flex-col space-y-12 top-1/3 w-full right-1/2mx-12 mt- items-center cssanimation sequence fadeInBottom
      text-center text-white text-5xl`}>
        <h1>{
          pathname == "garazskapumotor" ? "Garázskapumozgató motorok" :
          pathname == "csavarorsos" ? "Csavarorsós motorok" :
          pathname == "csuklokaros" ? "Csuklókaros motorok" : 
          pathname == "tolokapu" ? "Tolókapu motorok" : "nem"
        }</h1>
      </div>
    
      <div className='bg-black opacity-50 absolute top-16 md:top-[92px] right-0 left-0 bottom-0 z-0'>h</div>
    </div>
  )
}

export default HeroSection