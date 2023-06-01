import React from 'react'
import KepekHero from '../components/KepekHero';
import GallerySection from '../components/GallerySection';
import { useInView } from 'react-intersection-observer';


const kepek = () => {

    
  const { ref: heroRef, inView } = useInView();

  return (
    <>
    <KepekHero heroRef={heroRef}  />
    <GallerySection inView={inView}/>
    </>
  )
}

export default kepek