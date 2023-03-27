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
      <input className='rounded-sm p-1 opacity-60 w-full block' {...field} {...props} />
      {meta.touched && meta.error ? <div className='text-left text-[#C79753]'>{meta.error}</div> : null}
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className='text-white block' htmlFor={props.id || props.name}>{label}</label>
      <textarea className='rounded-sm p-1 opacity-60  w-full h-40' {...field} {...props} />
      {meta.touched && meta.error ? <div className='text-left text-[#C79753]'>{meta.error}</div> : null}
    </>
  );
};

const HeroSection = (props) => {

  emailjs.init("G7UMGkHPcHIwayFoJ");
  const service_id = "service_r8om8id";
  const template_id = "template_qkvn6gc";

  const [isClicked, setIsClicked] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => {
        setTimeout(setPopup(false))
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [popup])

  console.log("popup: "+popup);

  return (
    <div className='bg-background w-full bg-no-repeat bg-cover h-screen' ref={props.heroRef}>
      <MainNavbar galleryRef={props.galleryRef} setSelected={props.setSelected}/>
      <div className={`relative z-40 flex flex-col space-y-12 mx-12 mt-20 items-center cssanimation sequence fadeInBottom
      text-center md:text-left md:items-start md:w-2/6 md:mx-36 md:mt-28 md:space-y-10 ${isClicked ? 'hidden' : "block"}`}>
        <div>
          <h1 className='text-[#C79753] mb-2 md:ml-4'>Kapus Karcsi</h1>
          <h1 className='text-white text-5xl whitespace-nowrap'>Kapus Karcsi</h1>
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-white md:ml-4'>Üdvözlöm! </h1>
          <h1 className='text-white md:ml-4'>
          Nevem Bötös Károly. Tevékenységi köröm: kert és garázs kapuk szerkezeti
          kivitelezése és automatizálása.
          </h1>
        </div>
        <button className='bg-gradient-to-b from-[#DBB164] to-[#C79753] p-2 w-1/2 
        rounded-full md:ml-4 md:w-2/3 lg:w-1/2 hover:bg-gray-500' onClick={handleClick}>
          <h1>AJÁNLATKÉRÉS</h1>
        </button>
      </div>
      <div className={`relative z-40 flex flex-col space-y-8 mx-12 mt-20 items-center text-center md:text-left md:items-start 
      md:w-2/6 md:mx-36 md:mt-12 md:space-y-4 cssanimation sequence fadeInLeft ${isClicked ? 'block' : 'hidden'}`}>
        <button className='text-white flex text-left' onClick={handleClick}>
          <Image src={backArrow} />
          <h1>vissza</h1>
        </button>
        <div className='flex flex-col space-y-4 w-full'>
          <h1 className='text-white text-3xl md:text-left w-full'>Telefonszám:</h1>
          <h1 className='text-white text-5xl'>+36 30 415 9893</h1>
        </div>
        <div>
          <h1 className='text-white text-3xl mb-4'>Email:</h1>
          <Formik 
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(30, "Must be 15 characters or less")
                .required("Required"),
              lastName: Yup.string()
                .max(30, "Must be 20 characters or less")
                .required("Required"),
              email: Yup.string().email("Invalid email address").required("Required"),
              message: Yup.string()
              .max(300, "Must be 300 characters or less")
              .required("Required"),
            })}
            onSubmit={(values) => {
              const template_params = {
                from_name: values.firstName + " " + values.lastName,
                from_email: values.email,
                message: values.message
              }
              emailjs.send(
                service_id,
                template_id,
                template_params
              ).then(res => {
                setIsFirst(false);
                setPopup(true)
              }).catch(err => {
                console.error('Error:', err)
              })
            }}
          >
            <Form>  
              <div className='flex flex-col space-y-2 items-center'>
                <div className='flex space-x-2'>
                  <div>
                    <MyTextInput
                    label="Vezetéknév"
                    name="lastName"
                    type="text"
                    placeholder="Vezetéknév"
                    />
                  </div>
                  <div>
                    <MyTextInput
                    label="Kerestnév"
                    name="firstName"
                    type="text"
                    placeholder="Keresznév"
                    />
                  </div>
                </div>
                <div className='w-full'>
                  <MyTextInput
                  label="Email cim"
                  name="email"
                  type="email"
                  placeholder="példa@email.com"
                  />
                </div>
                <div className='w-full'>
                  <MyTextArea
                  label="Üzenet"
                  name="message"
                  type="text"
                  placeholder="Üzenet"
                  /> 
                </div>
                <button className='bg-gradient-to-b from-[#DBB164] to-[#C79753] p-2 w-1/2 
                rounded-full md:w-2/3 lg:w-1/2' type="submit">Küldés</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className={`rounded-md text-xl absolute left-0 right-0 w-[480px] mx-auto bottom-16 z-20 text-center bg-gradient-to-b from-[#DBB164] to-[#C79753] 
      py-4 cssanimation sequence ${popup ? "fadeInBottom" : "fadeOutBottom"} ${isFirst ? "hidden" : "block"} `}>
        Email Sikeresen Elküldve!
      </div>
      <Image priority quality={100} src={backgroundImageSM} 
      className="w-full relative bottom-24 md:hidden cssanimation sequence fadeInBottom" /> 
      <Image priority quality={100} src={backgroundImage} 
      className="absolute bottom-0 w-full hidden md:block cssanimation sequence fadeInBottom" />
    </div>
  )
}

export default HeroSection