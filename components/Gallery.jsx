import React from 'react'
import placeholder from '../public/placeholder.jpg';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftArrow from '../public/leftArrow.svg';
import rightArrow from '../public/rightArrow.svg';
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
    <div className='absolute top-1/2 -left-10 cursor-pointer' onClick={onClick}>
      <Image src={leftArrow} />
    </div>
  );
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='absolute top-1/2 -right-10 cursor-pointer' onClick={onClick}>
      <Image src={rightArrow} />
    </div>
  );
}

const Gallery = (props) => {
  return (
    <div className='mt-72 block my-72 mx-16 md:mx-24'>   
      <div className='relative -top-56' ref={props.galleryRef}></div>
      <h1 className='text-center text-white text-3xl mb-28 m-10'>Szárnyas Kapuk</h1>
      <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
        <div>
          <Image src={sz7} width={1500} />
        </div>
        <div>
          <Image src={sz6} width={1500} />
        </div>
        <div>
          <Image src={sz4} width={1500} />
        </div>
        <div>
          <Image src={sz3} width={1500} />
        </div>
        <div>
          <Image src={sz5} width={1500} />
        </div>
        <div>
          <Image src={sz1} width={1500} />
        </div>
        <div>
          <Image src={sz2} width={1500} />
        </div>
        <div>
          <Image src={sz8} width={1500} />
        </div>
        <div>
          <Image src={sz9} width={1500} />
        </div>
      </Slider>
      <h1 className='text-center text-white text-3xl my-28 m-10'>Úszó/toló Kapuk</h1>
      <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
        <div>
          <Image src={u1} width={1300} />
        </div>
        <div>
          <Image src={u2} width={1300} />
        </div>
        <div>
          <Image src={u3} width={1500} />
        </div>
        <div>
          <Image src={u4} width={1500} />
        </div>
        <div>
          <Image src={u5} width={1500} />
        </div>
        <div>
          <Image src={u6} width={1500} />
        </div>
        <div>
          <Image src={u7} width={1500} />
        </div>
        <div>
          <Image src={u8} width={1500} />
        </div>
        <div>
          <Image src={u9} width={1500} />
        </div>
      </Slider>
      <h1 className='text-center text-white text-3xl my-28 m-10'>Garázs Kapuk</h1>
      <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
        <div>
          <Image src={g4} width={1300} />
        </div>
        <div>
          <Image src={g1} width={1300} />
        </div>
        <div>
          <Image src={g2} width={1500} />
        </div>
        <div>
          <Image src={g3} width={1500} />
        </div>
        <div>
          <Image src={g5} width={1500} />
        </div>
        <div>
          <Image src={g6} width={1500} />
        </div>
      </Slider>
    </div>
  )
}

export default Gallery