import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import { useInView } from 'react-intersection-observer';
import Gallery from './Gallery';
import Cool from './Cool';
import { useRef} from 'react';
import Haverok from './Haverok';
import Footer from "./Footer";
import FormComp from "./FormComp"

const MainSection = (props) => {

  const { ref: testimonialRef, inView: testimonialInView } = useInView();

  return (
    <div className='relative left-0 right-0 bg-[#292129]  z-30 block'>
      <Navbar selected={props.selected} setSelected={props.setSelected} inView={props.inView} galleryRef={props.galleryRef} testimonialInView={testimonialInView} />
      <Cool />
      <Haverok />
      <FormComp />
      <Footer />
    </div>
  )
}

export default MainSection