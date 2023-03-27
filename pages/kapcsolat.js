import React from 'react'
import Hero4 from '../components/Hero4';
import MainSection from '../components/MainSection';
import { useInView } from 'react-intersection-observer';


const kepek = () => {

    
  const { ref: heroRef, inView } = useInView();

  return (
    <>
    <Hero4 heroRef={heroRef}  />
    <MainSection inView={inView}/>
    </>
  )
}

export default kepek