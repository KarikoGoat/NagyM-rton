import React from 'react'
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import * as emailjs from '@emailjs/browser';
import Link from 'next/link';
import { useRouter } from 'next/router'
import phone from '../public/phone2.svg';
import email from '../public/email2.svg';
import Image from 'next/image';

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


const Footer = () => {

  const router = useRouter()
  const pathname = router.pathname
  const termékpath = router.query.termékek

  return (
    <div className='bg-[#0E161D]'>
        <div className="px-12 py-24 flex flex-col space-y-16 md:space-y-0 md:flex-row  md:w-full md:gap-28 ">
          <div className='flex flex-col items-center md:items-start space-y-6 md:space-y-10'>
            <div className={`text-xl md:mb-5 text-white`}>
              Linkek
            </div>
            <Link href={"/"} className={`text-sm hover:text-[#C79753] ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`}>Főoldal</Link>
            <Link href={"/kepek"} className={`text-sm hover:text-[#C79753] ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`}>Képek</Link>
            <Link href={"/kapcsolat"} className={`text-sm hover:text-[#C79753] ${pathname === '/kapcsolat' ? 'text-[#C79753]' : 'text-white' }`}>Kapcsolat</Link>
          </div>
          <div className='flex flex-col items-center md:items-start  space-y-6 md:space-y-10'>
            <div className={`text-xl md:mb-5 text-white`}>
              Termékek
            </div>
            <Link href={"/garazskapumotor"} className={`text-sm hover:text-[#C79753] 
            ${termékpath === 'garazskapumotor' ? 'text-[#C79753]' : 'text-white' }`}>
              Garázskapumozgató motorok
            </Link>
            <Link href={"/csavarorsos"} className={`text-sm hover:text-[#C79753] ${termékpath === 'csavarorsos' ? 'text-[#C79753]' : 'text-white' }`}>Csavarorsós motorok</Link>
            <Link href={"/csuklokaros"} className={`text-sm hover:text-[#C79753] ${termékpath === 'csuklokaros' ? 'text-[#C79753]' : 'text-white' }`}>Csuklókaros motorok</Link>
            <Link href={"/tolokapu"} className={`text-sm hover:text-[#C79753] ${termékpath === 'tolokapu' ? 'text-[#C79753]' : 'text-white' }`}>Tolókapu motorok</Link>
          </div>
          <div className='flex flex-col items-center md:items-start space-y-6 md:space-y-10'>
            <div className={`text-xl md:mb-5 text-white`}>
              Kapcsolat
            </div>
            <div className={"flex gap-2"}>
              <Image src={phone}></Image>
              <p className="text-white text-sm">+36 30 415 9893</p>
            </div>
            <div className={"flex gap-2"}>
              <Image src={email}></Image>
              <p className="text-white text-sm">botos.karoly66@gmail.com</p>
            </div>
          </div>
      </div>
    
      <h1 className='text-white text-center p-16'>© Bötös Károly 2023</h1>
    </div>
  )
}

export default Footer