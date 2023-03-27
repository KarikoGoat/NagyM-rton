import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import kertvill from "../public/kertvill.png";
import overgate from "../public/overgate.png";
import godor from "../public/godor.png";
import femdekor from "../public/femdekor.png";
import alfa from "../public/alfa.png";

const Haverok = (props) => {

  const { ref, inView } = useInView();

  const [isVisited, setIsVisited] = useState(false);
  const divRef = useRef(); 

  useEffect(() => {
    if (inView && !isVisited) {
      divRef.current.classList.replace('hidden', 'fadeInBottom');
      setIsVisited(true);
    }
    console.log(isVisited);
  }, [inView])

  return (
    <div className='block bg-gradient-to-b from-[#DBB164] to-[#C79753]' >
      <div ref={ref} className="relative top-32"></div>
      <div className="flex p-20 items-center space-y-12 flex-col">
        <h1 className="text-4xl text-[#292129]">Partnerek</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-8 " ref={divRef}>
          <Image src={kertvill} width={300}/>
          <Image src={femdekor} width={300}/>
          <Image src={overgate} width={300}/>
          <Image src={godor} width={300} height={500}/>
          <Image src={alfa} width={300}/>
        </div>
      </div>
    </div>
  )
}

export default Haverok