import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import down from '../public/down.svg';
import up from '../public/up.svg';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Dropdown = (props) => {

  const router = useRouter();
  const pathname = router.pathname;

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  return (
    <div className={`${props.dropdownIsOpen ? "block" : "hidden"} 
    flex flex-col items-left text-white text-left`}>
      <Link href={"/garazskapumotor"} className={` text-sm hover:text-[#C79753] p-1 ${pathname === '/garazskapumotor' ? 'text-[#C79753]' : 'text-white' }`} >
        Garázskapumozgató motorok
      </Link> 
      <button className="text-white " onClick={handleDropdownClick}>
        <div className="flex text-sm space-x-1 ml-1">
          <div>Kapumozgató motorok</div>  
          <Image className={`${dropdownIsOpen ? "hidden" : "block" }`} src={down}/> 
          <Image className={`${dropdownIsOpen ? "block" : "hidden" }`} src={up}/> 
        </div>
      </button>
      <div className={`${dropdownIsOpen ? "block" : "hidden"} ml-5 mt-1 flex flex-col`}>
        <Link href={"/csavarorsos"} className={` text-sm hover:text-[#C79753] p-1 ${pathname === '/csavarorsos' ? 'text-[#C79753]' : 'text-white' }`} >
          Csavarorsós motorok
        </Link> 
        <Link href={"/csuklokaros"} className={` text-sm hover:text-[#C79753] p-1 ${pathname === '/csuklokaros' ? 'text-[#C79753]' : 'text-white' }`} >
          Csuklókaros motorok
        </Link> 
        <Link href={"/tolokapu"} className={` text-sm hover:text-[#C79753] p-1 ${pathname === '/tolokapu' ? 'text-[#C79753]' : 'text-white' }`} >
          Tolókapu motorok
        </Link> 
      </div>
    </div>
  )
}

export default Dropdown