import dot from '../public/dot.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import down from '../public/down.svg';
import up from '../public/up.svg';
import Dropdown2 from './Dropdown2';
import DropdownSM from './DropdownSM';


const Navbar = (props) => {

  const buttonRef = useRef()
  const router = useRouter();
  const pathname = router.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [dropdownSMIsOpen, setDropdownSMIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  };


  const handleClickHome = () => {
    props.setSelected('home');
    window.scrollTo(0,0);
  }

  const handleDropdownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  const handleDropdownClickSM = () => {
    setDropdownSMIsOpen(!dropdownSMIsOpen);
  }


  return (
    <>
      <div className={`hidden md:block sticky top-0 md:flex space-x-8 px-16 pt-5 pb-2 cssanimation sequence bg-[#292129] z-40 ${!props.inView ? "fadeInTop" : "fadeOutBottom"}`}>
        <div className='flex flex-col items-center space-y-1'>
          <Link href={"/"} className={`hover:text-[#C79753] ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`}
          onClick={handleClickHome}>FŐOLDAL</Link>
          <Image src={dot} className={`${pathname === '/' ? 'block' : 'hidden' }`} alt="Kör ikon, hogy melyik menüpont van kijelölve"/>
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <Link href={"/kepek"} className={`hover:text-[#C79753] ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`}>KÉPEK</Link>
          <Image src={dot} className={`${pathname === '/kepek' ? 'block' : 'hidden' }`} alt="Kör ikon, hogy melyik menüpont van kijelölve"/>
        </div>
        <div>
          <button ref={buttonRef} className="text-white" onClick={handleDropdownClick}>
            <div className="flex space-x-1 ">
              <div>TERMÉKEK</div>  
              <Image className={`${dropdownIsOpen ? "hidden" : "block" }`} src={down} alt="Lefele mutató nyíl"/> 
              <Image className={`${dropdownIsOpen ? "block" : "hidden" }`} src={up} alt="Felfele mutató nyíl"/> 
            </div>
          </button>
          <Dropdown2 buttonRef={buttonRef} dropdownIsOpen={dropdownIsOpen} setDropdownIsOpen={setDropdownIsOpen} />
        </div>
      </div>
      <div className={`block md:hidden sticky top-0 px-16 py-[14px] cssanimation sequence bg-[#292129] z-40 ${!props.inView ? "fadeInTop" : "fadeOutBottom"}`} >
        <div className='flex flex-row-reverse'>
          <button className="focus:outline-none z-40" onClick={handleClick}>
            <svg className="h-8 w-8 fill-current text-white" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
            </svg>
          </button>
        </div>
      </div> 
      <div className={`md:hidden sticky p-3 -top-[5px] flex flex-col items-center ${!props.inView && isOpen ? 'cssanimation1 sequence slideInTop' : 'cssanimation1 sequence slideOutTop'} bg-[#292129]`}>
        <Link href={"/"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`}>FŐOLDAL</Link>  
        <Link href={"/kepek"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`}>KÉPEK</Link>    
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

export default Navbar;