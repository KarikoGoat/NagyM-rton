import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from "./Footer";
import sz7 from '../public/sz7.jpg';
import { useRouter } from 'next/router';
import BILL_4 from '../public/KIT-BILL4_1.jpg'

const MainSection = (props) => {

  const router = useRouter();
  const pathname = router.query.termékek;

  return (
    <div className='absolute left-0 right-0 bg-[#292129]  z-30 block'>
      <Navbar  inView={props.inView} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 m-12'>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? BILL_4 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? sz7 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? sz7 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? sz7 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? sz7 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? sz7 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? sz7 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? sz7 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <Image src={
            pathname == "garazskapumotor" ? sz7 :
            pathname == "csavarorsos" ? sz7 :
            pathname == "csukólokaros" ? sz7 :
            pathname == "tolokapu" ? sz7 : sz7
            } width={500} height={500}/>
          <h1 className="text-white text-2xl">{
            pathname == "garazskapumotor" ? "nev1" :
            pathname == "csavarorsos" ? "nev2" :
            pathname == "csuklokaros" ? "nev3" :
            pathname == "tolokapu" ? "nev4" : "gatya"
          }</h1>
        </div>
        
        
      </div>
      <Footer />
    </div>
  )
}

export default MainSection