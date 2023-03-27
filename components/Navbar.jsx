import dot from '../public/dot.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = (props) => {

  const router = useRouter();
  const pathname = router.pathname;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  };


  const handleClickHome = () => {
    props.setSelected('home');
    window.scrollTo(0,0);
  }

  const handleClickGallery = () => {
    props.setSelected('gallery');
    props.galleryRef.current.scrollIntoView();
  }


  return (
    <>
      <div className={`hidden md:block sticky top-0 md:flex space-x-8 px-16 pt-16 pb-2 cssanimation sequence bg-[#292129] z-40 ${!props.inView ? "fadeInTop" : "fadeOutBottom"}`}>
        <div className='flex flex-col items-center space-y-1'>
          <Link href={"/"} className={`hover:text-[#C79753] ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`}
          onClick={handleClickHome}>FŐOLDAL</Link>
          <Image src={dot} className={`${pathname === '/' ? 'block' : 'hidden' }`}/>
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <Link href={"/rolunk"} className={`hover:text-[#C79753] ${pathname === '/rolunk' ? 'text-[#C79753]' : 'text-white' }`}>RÓLUNK</Link>
          <Image src={dot} className={`${pathname === '/rolunk' ? 'block' : 'hidden' }`}/>
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <Link href={"/kepek"} className={`hover:text-[#C79753] ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`}>KÉPEK</Link>
          <Image src={dot} className={`${pathname === '/kepek' ? 'block' : 'hidden' }`}/>
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <Link href={"/kapcsolat"} className={`hover:text-[#C79753] ${pathname === '/kapcsolat' ? 'text-[#C79753]' : 'text-white' }`}>KAPCSOLAT</Link>
          <Image src={dot} className={`${pathname === '/kapcsolat' ? 'block' : 'hidden' }`}/>
        </div>
      </div>
      <div class={`block md:hidden sticky top-0 px-16 pt-12 pb-2 cssanimation sequence bg-[#292129] z-40 ${!props.inView ? "fadeInTop" : "fadeOutBottom"}`} >
        <div className='flex flex-row-reverse'>
          <button class="focus:outline-none z-40" onClick={handleClick}>
            <svg class="h-8 w-8 fill-current text-white" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z" />
            </svg>
          </button>
        </div>
      </div> 
      <div className={`md:hidden sticky top-[24px] bg-[#292129] flex flex-col items-center ${!props.inView && isOpen ? 'cssanimation1 sequence slideInTop' : 'cssanimation1 sequence slideOutTop'} bg-[#292129]`}>
        <Link href={"/"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/' ? 'text-[#C79753]' : 'text-white' }`}>FŐOLDAL</Link>  
        <Link href={"/rolunk"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/rolunk' ? 'text-[#C79753]' : 'text-white' }`}>RÓLUNK</Link>    
        <Link href={"/kepek"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kepek' ? 'text-[#C79753]' : 'text-white' }`}>KÉPEK</Link>    
        <Link href={"/kapcsolat"} className={`text-sm text-l hover:text-[#C79753] p-1 ${pathname === '/kapcsolat' ? 'text-[#C79753]' : 'text-white' }`}>KAPCSOLAT</Link>    
      </div>
    </>
  )
}

export default Navbar;