import React from 'react'
import KapcsolatHero from '../components/KapcsolatHero';
import MainSection from '../components/MainSection';
import { useInView } from 'react-intersection-observer';


const kepek = () => {

    
  const { ref: heroRef, inView } = useInView();

  return (
    <>
    <KapcsolatHero heroRef={heroRef}  />
    <MainSection inView={inView}/>
    </>
  )
}

export default kepek