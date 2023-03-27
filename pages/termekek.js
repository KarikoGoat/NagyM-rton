import React from 'react'
import Hero3 from '../components/Hero3';
import MainSection from '../components/MainSection';
import { useInView } from 'react-intersection-observer';


const kepek = () => {

    
  const { ref: heroRef, inView } = useInView();

  return (
    <>
    <Hero3 heroRef={heroRef}  />
    <MainSection inView={inView}/>
    </>
  )
}

export default kepek