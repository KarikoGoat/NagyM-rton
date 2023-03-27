import Navbar from '../components/Navbar';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Footer from "./Footer";
import sz1 from '../public/sz1.jpg';
import sz2 from '../public/sz2.jpg';
import sz3 from '../public/sz3.jpg';
import sz4 from '../public/sz4.jpg';
import sz5 from '../public/sz5.jpg';
import sz6 from '../public/sz6.jpg';
import sz7 from '../public/sz7.jpg';
import sz8 from '../public/sz8.jpg';
import sz9 from '../public/sz9.jpg';
import u1 from '../public/u1.jpg';
import u2 from '../public/u2.jpg';
import u3 from '../public/u3.jpg';
import u4 from '../public/u4.jpg';
import u5 from '../public/u5.jpg';
import u6 from '../public/u6.jpg';
import u7 from '../public/u7.jpg';
import u8 from '../public/u8.jpg';
import u9 from '../public/u9.jpg';
import g1 from '../public/g1.jpg';
import g2 from '../public/g2.jpg';
import g3 from '../public/g3.jpg';
import g4 from '../public/g4.jpg';
import g5 from '../public/g5.jpg';
import g6 from '../public/g6.jpg';


const MainSection = (props) => {


  return (
    <div className='absolute left-0 right-0 bg-[#292129]  z-30 block'>
      <Navbar  inView={props.inView} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 m-12'>
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />
        <Image src={sz7} width={1500} />

      </div>
      <Footer />
    </div>
  )
}

export default MainSection