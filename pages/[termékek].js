import React from 'react'
import TermekekHero from '../components/TermekekHero';
import TermekekKepek from '../components/TermekekKepek';
import MainSection from '../components/MainSection';
import { useInView } from 'react-intersection-observer';

const kepek = ({ post }) => {

  const { ref: heroRef, inView } = useInView();
  
  return (
    <>
    
    <TermekekHero heroRef={heroRef}  />
    <TermekekKepek inView={inView}/>
    </>
  )
}

export async function getStaticPaths() {

  return {
    paths: ["/garazskapumotor", "/csavarorsos", "/csuklokaros", "/tolokapu"],
    fallback: false,
  }
}

export async function getStaticProps(context) {



  return {
    props: {props: {}}
  }
}

export default kepek