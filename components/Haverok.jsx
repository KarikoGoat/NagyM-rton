import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import kertvill from "../public/kertvill.png";
import overgate from "../public/overgate.png";
import godor from "../public/godor.png";
import femdekor from "../public/femdekor.png";
import alfa from "../public/alfa.png";
import Link from 'next/link';

const Haverok = (props) => {

  const { ref, inView } = useInView();

  const [isVisited, setIsVisited] = useState(false);
  const divRef = useRef(); 

  useEffect(() => {
    if (inView && !isVisited) {
      divRef.current.classList.replace('hidden', 'fadeInBottom');
      setIsVisited(true);
    }
  }, [inView])

  return (
    <div className='block bg-gradient-to-b from-[#DBB164] to-[#C79753]' >
      <div ref={ref} className="relative top-32"></div>
      <div className="flex p-20 items-center space-y-16 flex-col">
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl text-[#292129]">Partnerek</h1>
            <hr className="border-2 w-1/2 mb-12 border-[#292129] border-solid"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center justify-between gap-8 " ref={divRef}>
          <Link href={"https://kertvill-centrum.hu/"} target="_blank"><Image src={kertvill} width={200} alt="Kertvill logó"/></Link>
          <Link href={"https://femdekor.hu/"} target="_blank"><Image src={femdekor} width={200} alt="Fémdekor logó"/></Link>
          <Link href={"https://www.overgate.hu/"} target="_blank"><Image src={overgate} width={200} alt="Overgate logó"/></Link>
          <Link href={"https://www.facebook.com/godorelectric/"} target="_blank"><Image src={godor} width={200} alt="Gödör Electric logó"/></Link>
          <Link href={"https://nyilaszarokereskedes.hu/"} target="_blank"><Image src={alfa} width={200} alt="Alfa nyilászáró logó"/></Link>
        </div>
      </div>
    </div>
  )
}

export default Haverok