import React from 'react'
import Hero2 from '../components/Hero2';
import GallerySection from '../components/GallerySection';
import { useInView } from 'react-intersection-observer';


const kepek = () => {

    
  const { ref: heroRef, inView } = useInView();

  return (
    <>
    <Hero2 heroRef={heroRef}  />
    <GallerySection inView={inView}/>
    </>
  )
}

export default kepek