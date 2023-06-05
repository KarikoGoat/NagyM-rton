import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from "./Footer";
import sz7 from '../public/sz7.jpg';
import { useRouter } from 'next/router';
import BILL_4 from '../public/KIT-BILL4_1.jpg'
import KIT_BOB from '../public/KIT-BOB30M_1.jpg';
import KIT_BEN from '../public/KIT-BEN_1.jpg';
import KIT_SAM from '../public/KIT-SAM_1.jpg';
import KIT_KPR from '../public/KPR_1.jpg';
import KIT_BULL5F from '../public/KIT_BULL5F_1.jpg';
import KIT_BULL20M from '../public/KIT-BULL20M_1.jpg';
import KIT_PONY from '../public/KIT-PONY_1.jpg';
import KIT_JIM from '../public/KIT_JIM.jpg';
import Link from 'next/link';

const MainSection = (props) => {

  const router = useRouter();
  const pathname = router.query.termékek;

  return (
    <div className='absolute left-0 right-0 bg-[#292129]  z-30 block'>
      <Navbar  inView={props.inView} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 m-12'>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? KIT_JIM :
            pathname == "csavarorsos" ? BILL_4 :
            pathname == "csuklokaros" ? KIT_BEN :
            pathname == "tolokapu" ? KIT_BULL5F : ""
            } alt="Beninca garazs vagy kapuautomatizáló szett " width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "KIT-JIM" :
            pathname == "csavarorsos" ? "KIT-BILL" :
            pathname == "csuklokaros" ? "KIT-BEN" :
            pathname == "tolokapu" ? "KIT-BULL5F" : "gatya"
          }</h1>
          <Link href={
            pathname == "garazskapumotor" ? "https://www.overgate.hu/automata-garazskapuk/garazskapu-automatikak/kit-jim-garazskapu-mozgato-szett---600n" :
            pathname == "csavarorsos" ? "https://www.overgate.hu/kapumozgato-szettek/szarnyaskapu-mozgato-szettek/kit-bill4-szarnyaskapu-mozgato-szett-2x35m" :
            pathname == "csuklokaros" ? "https://www.overgate.hu/kapumozgato-szettek/szarnyaskapu-szettek---24vdc/kit-ben-csuklokaros-szett-24vdc-2x21m" :
            pathname == "tolokapu" ? "https://www.overgate.hu/kapumozgato-szettek/tolokapu-mozgato-szettek/kit-bull5f-tolokapu-mozgato-szett-4m-fogasleccel---500kg" : "gatya"
          } target="_blank" className="bg-gradient-to-b text-center text-sm from-[#DBB164] to-[#C79753] p-2 px-8 w-1/3
        rounded-full md:ml-4 md:w-1/2 hover:bg-gray-500 button-grow">
            RÉSZLETEK
          </Link>
        </div>
        <div className={`flex flex-col space-y-4 items-center ${pathname == "garazskapumotor" ? "hidden" : "block"}`}>
          <Image src={
            pathname == "garazskapumotor" ? "" :
            pathname == "csavarorsos" ? KIT_BOB :
            pathname == "csuklokaros" ? KIT_SAM :
            pathname == "tolokapu" ? KIT_BULL20M : ""
            }alt="Beninca garazs vagy kapuautomatizáló szett " width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "KIT-BOB" :
            pathname == "csuklokaros" ? "KIT-SAM" :
            pathname == "tolokapu" ? "KIT-BULL20M" : "gatya"
          }</h1>
            <Link href={
            pathname == "garazskapumotor" ? "" :
            pathname == "csavarorsos" ? "https://www.overgate.hu/kapumozgato-szettek/szarnyaskapu-mozgato-szettek/kit-bob-szarnyaskapu-mozgato-szett-2x21m" :
            pathname == "csuklokaros" ? "https://www.overgate.hu/kapumozgato-szettek/szarnyaskapu-szettek---24vdc/kit-ben-csuklokaros-szett-2x25m" :
            pathname == "tolokapu" ? "https://www.overgate.hu/kapumozgato-szettek/tolokapu-mozgato-szettek/kit-bull20m-tolokapu-mozgato-szett-2000kg" : "gatya"
          } target="_blank" className="bg-gradient-to-b text-center text-sm from-[#DBB164] to-[#C79753] p-2 px-8 w-1/3
        rounded-full md:ml-4 md:w-1/2 hover:bg-gray-500 button-grow">
            RÉSZLETEK
          </Link>
        </div>
        <div className={`flex flex-col space-y-4 items-center ${pathname == "csavarorsos" ? "hidden" : pathname == "garazskapumotor" ? "hidden" : "block"}`}>
          <Image src={
            pathname == "garazskapumotor" ? "" :
            pathname == "csavarorsos" ? "" :
            pathname == "csuklokaros" ? KIT_KPR :
            pathname == "tolokapu" ? KIT_PONY : ""
            } alt="Beninca garazs vagy kapuautomatizáló szett " width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "KIT-KPR" :
            pathname == "tolokapu" ? "KIT-PONY" : "gatya"
          }</h1>
          <Link href={
            pathname == "garazskapumotor" ? "" :
            pathname == "csavarorsos" ? "" :
            pathname == "csuklokaros" ? "https://www.overgate.hu/kapumozgato-szettek/szarnyaskapu-mozgato-szettek/kpr-csuklokaros-kapumozgato-szett-2x3m" :
            pathname == "tolokapu" ? "https://www.overgate.hu/kapumozgato-szettek/tolokapu-szettek---24vdc/kit-pony-tolokapu-szett-350kg-24vdc" : "gatya"
          } target="_blank" className="bg-gradient-to-b text-center text-sm from-[#DBB164] to-[#C79753] p-2 px-8 w-1/3
        rounded-full md:ml-4 md:w-1/2 hover:bg-gray-500 button-grow">
            RÉSZLETEK
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainSection