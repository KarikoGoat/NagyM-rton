import Navbar from '../components/Navbar';
import { useInView } from 'react-intersection-observer';
import Cool from './Cool';
import Haverok from './Haverok';
import Footer from "./Footer";
import FormComp from "./FormComp"

const MainSection = (props) => {

  return (
    <div className='relative left-0 right-0 bg-[#292129]  z-30 block'>
      <Navbar executeScroll={props.executeScroll} inView={props.inView} />
      <Cool />
      <Haverok />
      <FormComp  formRef={props.formRef}/>
      <Footer executeScroll={props.executeScroll} />
    </div>
  )
}

export default MainSection