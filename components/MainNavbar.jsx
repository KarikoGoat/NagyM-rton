import React from 'react';
import phone from '../public/phone.svg';
import email from '../public/email.svg';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dropdown from './Dropdown';
import DropdownSM from './DropdownSM';
import down from '../public/down.svg';
import up from '../public/up.svg';

const MainNavbar = (props) => {

  const buttonRef = useRef()
  const router = useRouter();
  const pathname = router.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [dropdownSMIsOpen, setDropdownSMIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  const handleDropdownClickSM = () => {
    setDropdownSMIsOpen(!dropdownSMIsOpen);
  }

  return (
    <>
      <div className={'hidden md:block bg-[#C79753] px-20 py-1 '}>
        <div className={"flex item-center justify-center gap-10"}>
          <div className={"flex gap-2"}>
            <Image src={phone} alt="Telefon ikon"></Image>
            <p>+36 30 415 9893</p>
          </div>
          <div className={""}>|</div>
          <div className={"flex gap-2"}>
            <Image src={email } alt="E-mail ikon"></Image>
            <p>botos.karoly66@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={`hidden md:block bg-[#0E161D] ${pathname === '/' ? 'py-1' : 'py-[px]' } px-12 z-20`}>
        <div className='flex space-x-4 justify-between items-center p-[30px] '>
          <div className='flex space-x-6 absolute z-40 '>
            <Link href={"/"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`} >
              FŐOLDAL
            </Link>  
            <Link href={"/kepek"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`} >
              KÉPEK
            </Link>
            <div>
              <button ref={buttonRef} className="text-white" onClick={handleDropdownClick}>
                <div className="flex space-x-1 text-sm">
                  <div>TERMÉKEK</div>  
                  <Image className={`${dropdownIsOpen ? "hidden" : "block" }`} src={down} alt="Lefele mutató nyíl"/> 
                  <Image className={`${dropdownIsOpen ? "block" : "hidden" }`} src={up} alt="Felfele mutató nyíl"/> 
                </div>
              </button>
              <Dropdown buttonRef={buttonRef} dropdownIsOpen={dropdownIsOpen} setDropdownIsOpen={setDropdownIsOpen} />
            </div>
          </div>
          
        </div>
      </div> 
      <div className="absolute block md:hidden bg-#0E161D py-4 bg-[#0E161D] px-16 z-40 w-full">
        <div className='flex  justify-end'>
          <button className="block focus:outline-none z-40" onClick={handleClick}>
            <svg className="h-8 w-8 fill-current text-white" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
            </svg>
          </button>
        </div>
      </div> 
      <div className={`block md:hidden p-3 relative z-30 flex mx-auto flex-col items-center ${isOpen ? 'cssanimation1 sequence slideInTop' : 'cssanimation1 sequence slideOutTop'} bg-[#0E161D]`}>
        <Link href={"/"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`} >
          FŐOLDAL
        </Link>   
        <Link href={"/kepek"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`} >
          KÉPEK
        </Link>
        <button className="text-white" onClick={handleDropdownClickSM}>
          <div className="flex space-x-1 text-sm">
            <div>TERMÉKEK</div>  
            <Image className={`${dropdownSMIsOpen ? "hidden" : "block" }`} src={down} alt="Lefele mutató nyíl"/> 
            <Image className={`${dropdownSMIsOpen ? "block" : "hidden" }`} src={up} alt="Felfele mutató nyíl"/> 
          </div>
        </button>
      <DropdownSM buttonRef={buttonRef} dropdownIsOpen={dropdownSMIsOpen} setDropdownIsOpen={setDropdownSMIsOpen}/>
      </div>
    </>
  )
}

export default MainNavbar