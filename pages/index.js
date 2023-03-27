import React, { useEffect, useRef, useState } from 'react'
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';
import { useInView } from 'react-intersection-observer';


const index = () => {
  
  const { ref: heroRef, inView } = useInView();

  const [selected, setSelected] = useState('home');

  const galleryRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSelected('home')
          } else {
            setSelected('gallery')
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    )
    observer.observe(galleryRef.current)
    return () => observer.disconnect()
  }, []);

  return (
    <>
      <HeroSection setSelected={setSelected} heroRef={heroRef} galleryRef={galleryRef}/>
      <MainSection selected={selected} setSelected={setSelected} inView={inView} galleryRef={galleryRef} />
    </>
  )
}

export default index