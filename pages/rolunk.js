import React from 'react'
import RolamHero from '../components/RolamHero';
import MainSection from '../components/MainSection';
import { useInView } from 'react-intersection-observer';

const kepek = () => {
    
  const { ref: heroRef, inView } = useInView();

  return (
    <>
    <RolamHero heroRef={heroRef}  />
    <MainSection inView={inView}/>
    </>
  )
}

export default kepek