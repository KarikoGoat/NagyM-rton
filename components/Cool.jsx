import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import tools from "../public/tools.svg";
import beninca from "../public/beninca.svg";
import toll from "../public/toll.svg";

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
      <div ref={ref} className="relative top-32"></div>
      <div className=' md:block'>
        <div className="grid grid-cols-1 space-y-16 lg:space-y-0 lg:space-x-16  lg:grid-cols-3  mx-24 my-64" ref={divRef}>
          <div className="flex flex-col items-center space-y-6">
            <Image src={tools} width={100} height={100} />
            <h1 className="text-white text-left text-2xl ">GARANCIA</h1>
            <h1 className="text-white text-center ">
              Az általam telepített termékekre a kiviteletéstől számított 1 éves garanciát vállalok
              a kiszállást is beleértve.
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <Image src={beninca} width={200} height={100} className="p-4" /> 
            <h1 className="text-white text-left text-2xl ">JÓTÁLLÁS</h1>
            <h1 className="text-white text-center ">
              A telepített Beninca termékekre 3 év gyártói garancia tartozik.
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <Image src={toll} width={100} height={100} />
            <h1 className="text-white text-left text-2xl text-white text-center ">INGYENES FELMÉRÉS</h1>
            <h1 className="text-white text-center ">
              Ingyenes felmérés a kivitelezés jóváhagyása esetén.
            </h1>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Cool