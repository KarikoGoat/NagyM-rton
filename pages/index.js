import React, { useEffect, useRef, useState } from 'react'
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

const index = () => {
  
  const router = useRouter();
  const pathname = router.pathname;

  const { ref: heroRef, inView } = useInView();

  const formRef = useRef()
  const executeScroll = () => {
    if (pathname !== '/') {
      router.push('/');
    }
    formRef.current.scrollIntoView({ behavior: 'smooth'});
  }  
 /*

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
  */

  return (
    <>
      <HeroSection executeScroll={executeScroll} formRef={formRef} heroRef={heroRef}/>
      <MainSection executeScroll={executeScroll} formRef={formRef} inView={inView} />
    </>
  )
}

export default index