import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import leftArrow from '../public/leftArrow.svg';
import rightArrow from '../public/rightArrow.svg';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='absolute top-14 -left-10 cursor-pointer' onClick={onClick}>
      <Image src={leftArrow} />
    </div>
  );
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='absolute top-14 -right-10 cursor-pointer' onClick={onClick}>
      <Image src={rightArrow} />
    </div>
  );
}

const Testimonials = (props) => {

  const { ref, inView } = useInView();

  const [isVisited, setIsVisited] = useState(false);
  const divRef = useRef();
  const divRefSM = useRef();

  useEffect(() => {
    if (inView && !isVisited) {
      divRef.current.classList.replace('hidden', 'fadeInBottom');
      divRefSM.current.classList.replace('hidden', 'fadeInBottom');
      setIsVisited(true);
    }
    console.log(isVisited);
  }, [inView])

  return (
    
    <div className='block' ref={props.testimonialRef} >
      <div ref={ref} className="relative top-32"></div>
      <div className='hidden md:block'>
        <div className={`flex flex-col mx-24 my-64 space-y-32 cssanimation sequence hidden`} ref={divRef}>
          <div className='flex flex-col  space-y-4 items-center' >
            <h1 className='text-center text-white w-1/2'>“Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o”</h1>
            <h1 className='text-[#C79753]'>Füty Imre</h1>
          </div>
          <div className='flex space-x-20'>
            <div className='flex flex-col space-y-4  items-center'>
              <h1 className='text-center text-white'>“Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o”</h1>
              <h1 className='text-[#C79753]'>Füty Imre</h1>
            </div>
            <div className='flex flex-col space-y-4  items-center'>
              <h1 className='text-center text-white'>“Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o”</h1>
              <h1 className='text-[#C79753]'>Füty Imre</h1>
            </div>
          </div>
        </div> 
      </div>
      <div className='block md:hidden my-72 mx-16 text-center cssanimation sequence hidden' ref={divRefSM}>
        <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
          <div className='flex flex-col space-y-4 items-center' >
            <h1 className='text-center text-white '>“Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o”</h1>
            <h1 className='text-[#C79753]'>Füty Imre</h1>
          </div>
          <div className='flex flex-col  space-y-4 items-center' >
            <h1 className='text-center text-white'>“Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o”</h1>
            <h1 className='text-[#C79753]'>Füty Imre</h1>
          </div>
          <div className='flex flex-col  space-y-4 items-center' >
            <h1 className='text-center text-white'>“Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint o”</h1>
            <h1 className='text-[#C79753]'>Füty Imre</h1>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials