import React from 'react'
import phone from '../public/phone.svg'
import email from '../public/email.svg'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MainNavbar = (props) => {

  const router = useRouter();
  const pathname = router.pathname;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  };


  console.log(router.pathname)

  return (
    <>
      <div className={`hidden md:block bg-[#0E161D] ${pathname === '/' ? 'py-1' : 'py-[1px]' } px-12 z-20`}>
        <div className='flex space-x-4 justify-between items-center p-[30px] '>
          <div className='flex space-x-6 absolute z-40 '>
            <Link href={"/"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`} >
              FŐOLDAL
            </Link>  
            <Link href={"/rolunk"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/rolunk' ? 'text-[#C79753]' : 'text-white' }`}>
              RÓLUNK
            </Link>  
            <Link href={"/kepek"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`} >
              KÉPEK
            </Link>
            <Link href={"/kapcsolat"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kapcsolat' ? 'text-[#C79753]' : 'text-white' }`}>
              KAPCSOLAT
            </Link>
          </div>
          <div className='flex flex-col space-y-1 items-left absolute right-[78px] p-1'>
            <div className='flex item-center space-x-4'>
              <Image src={phone}/>
              <p className='text-white text-xs'>+36 30 415 9893</p>
            </div>
            <div className='flex item-center space-x-4'>
              <Image src={email}/>
              <h1 className='text-white text-xs'>botos.karoly66@gmail.com</h1>
            </div>
          </div> 
        </div>
      </div> 
      <div class="absolute block md:hidden bg-#0E161D py-4 bg-[#0E161D] px-16 z-40 w-full">
        <div className='flex  justify-end'>
          <button class="block focus:outline-none z-40" onClick={handleClick}>
            <svg class="h-8 w-8 fill-current text-white" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
            </svg>
          </button>
        </div>
      </div> 
      <div className={`block md:hidden relative z-30 flex flex-col items-center ${isOpen ? 'cssanimation1 sequence slideInTop' : 'cssanimation1 sequence slideOutTop'} bg-[#0E161D]`}>
          <Link href={"/"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`} >
            FŐOLDAL
          </Link>  
          <Link href={"/rolunk"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/rolunk' ? 'text-[#C79753]' : 'text-white' }`}>
            RÓLUNK
          </Link>  
          <Link href={"/kepek"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`} >
            KÉPEK
          </Link>
          <Link href={"/kapcsolat"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kapcsolat' ? 'text-[#C79753]' : 'text-white' }`}>
            KAPCSOLAT
          </Link>
      </div>
    </>
  )
}

export default MainNavbar