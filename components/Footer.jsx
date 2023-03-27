import React from 'react'
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import * as emailjs from '@emailjs/browser';
import Link from 'next/link';
import { useRouter } from 'next/router'

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


  return (
    <div className='bg-[#0E161D] '>
      <div className='flex flex-col space-y-32 lg:flex-row lg:space-x-32 lg:space-y-0 justify-between p-32 px-32 '>
        <div className='flex space-x-32 w-fit justify between w-1/2 justify-start' >
          <div className='flex flex-col space-y-10'>
            <Link href={"/"} className={`hover:text-[#C79753] ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`}>Főoldal</Link>
            <Link href={"/rolunk"} className={`hover:text-[#C79753] ${pathname === '/rolunk' ? 'text-[#C79753]' : 'text-white' }`}>Rólunk</Link>
            <Link href={"/kepek"} className={`hover:text-[#C79753] ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`}>Képek</Link>
            <Link href={"/kapcsolat"} className={`hover:text-[#C79753] ${pathname === '/kapcsolat' ? 'text-[#C79753]' : 'text-white' }`}>Kapcsolat</Link>
          </div>
          <div className='flex flex-col space-y-5'>
            <Link href={""} className={`hover:text-[#C79753] ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`}>Termékek</Link>
            <Link href={""} className='text-white hover:text-[#C79753] cursor-pointer'>text</Link>
            <Link href={""} className='text-white hover:text-[#C79753] cursor-pointer'>text</Link>
            <Link href={""} className='text-white hover:text-[#C79753] cursor-pointer'>text</Link>
            <Link href={""} className='text-white hover:text-[#C79753] cursor-pointer'>text</Link>
          </div>
        </div>
        <div className=''>
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
                  <button className='bg-gradient-to-b  from-[#DBB164] to-[#C79753] p-2 w-1/2 
                  rounded-full md:w-2/3 lg:w-1/2' type="submit">AJÁNLATKÉRÉS</button>
                </div>
              </Form>
            </Formik>
        </div>
      </div> 
      <h1 className='text-white text-center p-5'>© Bötös Károly 2023</h1>
    </div>
  )
}

export default Footer