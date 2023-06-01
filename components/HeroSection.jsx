import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import backgroundImage from '../public/backgroundImage.png';
import backgroundImageSM from '../public/backgroundImageSM.png'
import MainNavbar from '../components/MainNavbar';
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import * as emailjs from '@emailjs/browser';
import backArrow from '../public/backArrow.svg';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className='text-white' htmlFor={props.id || props.name}>{label}</label>
      <input className='rounded-sm p-1 h-1/2 opacity-60 w-full block' {...field} {...props} />
      {meta.touched && meta.error ? <div className='text-left text-[#C79753]'>{meta.error}</div> : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className='text-white block' htmlFor={props.id || props.name}>{label}</label>
      <textarea className='rounded-sm p-1  opacity-60  w-full h-40' {...field} {...props} />
      {meta.touched && meta.error ? <div className='text-left text-[#C79753]'>{meta.error}</div> : null}
    </>
  );
};

const HeroSection = (props) => {

  const [isClicked, setIsClicked] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }


  return (
    <div className='bg-background w-full bg-no-repeat bg-cover h-screen' ref={props.heroRef}>
      <MainNavbar galleryRef={props.galleryRef} setSelected={props.setSelected}/>
      <div className={`relative md:absolute z-30 flex flex-col space-y-12 mx-12 mt-20 items-center cssanimation sequence fadeInBottom
      text-center md:text-left md:items-start md:w-2/6 md:mx-36 md:mt-28 md:space-y-8 ${isClicked ? 'hidden' : "block"}`}>
        <div>
          <h1 className='text-[#C79753] text-sm mb-2 md:ml-4'>Kapuautomatizálás Specialistája</h1>
          <h1 className='text-white text-5xl whitespace-nowrap'>Kapus Karcsi</h1>
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-white md:ml-4'>
          Üdvözöljük a Kapuautomatizálás Specialistájának honlapján!
          Automatizálja ingatlanjának bejárását a legmodernebb technológiával!
          </h1>
        </div>
        <button className='bg-gradient-to-b text-sm from-[#DBB164] to-[#C79753] p-2 px-8 w-2/3
        rounded-full md:ml-4 md:w-2/3 lg:w-1/2 hover:bg-gray-500' onClick={handleClick}>
          <h1>AJÁNLATKÉRÉS</h1>
        </button>
      </div>
      <Image priority quality={100} src={backgroundImageSM} 
      className="w-full relative bottom-0 md:hidden cssanimation sequence fadeInBottom" /> 
      <Image priority quality={100} src={backgroundImage} 
      className="absolute bottom-0 z-10 hidden md:block cssanimation sequence fadeInBottom" />
    </div>
  )
}

export default HeroSection