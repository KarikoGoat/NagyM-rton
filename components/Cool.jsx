import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import tools from "../public/tools.svg";
import beninca from "../public/beninca.svg";
import shield from "../public/shield.svg";
import check from "../public/check.svg";
import time from "../public/time.svg";

const Cool = (props) => {

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
    <div className='block' >
      <div ref={ref} className="relative top-32 mt-56"></div>
      <div className='md:block flex flex-col items-center'>
        <div className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-2 gap-20 items-center mx-24 my-32" ref={divRef}>
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-12">
            <Image src={tools} width={100} height={100} />
            <div className="flex flex-col items-center md:items-start space-y-4 ">
              <h1 className="text-white text-center md:text-left text-xl ">GARANCIA</h1>
              <h1 className="text-white text-center md:text-left text-sm ">
                Az általam telepített termékekre a kiviteletéstől számított 1 éves garanciát vállalok
                a kiszállást is beleértve.
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-12">
            <Image src={beninca} width={100} height={100} />
            <div className="flex flex-col items-center md:items-start space-y-4 ">
              <h1 className="text-white text-center md:text-left text-xl">BENINCA</h1>
              <h1 className="text-white text-center md:text-left text-sm">
              Az általam telepített Beninca termékekre pedig további 3 év gyártói garancia vonatkozik.
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-12">
            <Image src={shield} width={100} height={100} />
            <div className="flex flex-col items-center md:items-start space-y-4 ">
              <h1 className="text-white text-center md:text-left text-xl ">MINŐSÉG</h1>
              <h1 className="text-white text-center md:text-left  text-sm">
              Minőségi termékekkel dolgozok, partnereim között olyan elismert márkák szerepelnek, mint a Beninca.
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-12">
            <Image src={time} width={100} height={100} />
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h1 className="text-white text-center md:text-left text-xl ">TAPASZTALAT</h1>
              <h1 className="text-white text-center md:text-left text-sm">
              Tapasztalt és megbízható szakember vagyok, aki kiemelt figyelmet fordít az ügyfelek igényeinek megértésére.
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-12">
            <Image src={check} width={100} height={100} />
            <div className="flex flex-col items-center md:items-start space-y-4 ">
              <h1 className="text-white text-center md:text-left text-xl ">TELJES KÖRŰ KIVITELEZÉS</h1>
              <h1 className="text-white text-center md:text-left text-sm">
              Teljes körű kivitelezést biztosítok, a tervezéstől az installációig, hogy Önnek csak egy kapcsolattartóra legyen szüksége.
              </h1>
            </div>
          </div>
         
        </div>  
      </div>
    </div>
  )
}

export default Cool