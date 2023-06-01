import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import down from '../public/down.svg';
import up from '../public/up.svg';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Dropdown = (props) => {

  const menuRef = useRef()
  const router = useRouter();
  const pathname = router.pathname;

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  useEffect(() =>{ 
    const handleClick = (event) => {
      if ((menuRef.current && !menuRef.current.contains(event.target)) && 
          (props.buttonRef.current && !props.buttonRef.current.contains(event.target))) {
        props.setDropdownIsOpen(false);
      }
    } 
    
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick)
    }
  })
 
  return (
    <div ref={menuRef} className={`${props.dropdownIsOpen ? "block" : "hidden"} 
    flex flex-col -right-[176px] border-t-2 ${pathname == "/" ? "top-12" : "top-11" } border-[#C79753] text-white p-5 text-left pr-16 absolute z-50 bg-[#0E161D] `}>
      <Link href={"/garazskapumotor"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/garazskapumotor' ? 'text-[#C79753]' : 'text-white' }`} >
        Garázskapumozgató motorok
      </Link> 
      <button className="text-white text-sm" onClick={handleDropdownClick}>
        <div className="flex space-x-1 ml-1">
          <div>Kapumozgató motorok</div>  
          <Image className={`${dropdownIsOpen ? "hidden" : "block" }`} src={down}/> 
          <Image className={`${dropdownIsOpen ? "block" : "hidden" }`} src={up}/> 
        </div>
      </button>
      <div className={`${dropdownIsOpen ? "block" : "hidden"} ml-5 mt-1 flex flex-col`}>
        <Link href={"/csavarorsos"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/csavarorsos' ? 'text-[#C79753]' : 'text-white' }`} >
          Csavarorsós motorok
        </Link> 
        <Link href={"/csuklokaros"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/csuklokaros' ? 'text-[#C79753]' : 'text-white' }`} >
          Csuklókaros motorok
        </Link> 
        <Link href={"/tolokapu"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/tolokapu' ? 'text-[#C79753]' : 'text-white' }`} >
          Tolókapu motorok
        </Link> 
      </div>
    </div>
  )
}

export default Dropdown