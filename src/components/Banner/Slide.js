import React from 'react';
import { Carousel } from 'antd';
import slideOne from "@/assets/slide-images/banner-1.jpg";
import slideTwo from "@/assets/slide-images/banner-2.jpg";
import slideThree from "@/assets/slide-images/banner-3.jpg";
import slideFour from "@/assets/slide-images/banner-4.jpg";
import Image from 'next/image';


const contentStyle = {
  height: '700px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slide = () => (
  <Carousel autoplay>
    <div>
      {/* <h3 style={contentStyle}>1</h3> */}
      <Image style={contentStyle} src={slideOne} alt="" width="100%" height="100%" />
    </div>
    <div>
      {/* <h3 style={contentStyle}>2</h3> */}
      <Image style={contentStyle} src={slideTwo} alt="" width="100%" height="100%" />
    </div>
    <div>
      {/* <h3 style={contentStyle}>3</h3> */}
      <Image style={contentStyle} src={slideThree} alt="" width="100%" height="100%" />
    </div>
    <div>
      {/* <h3 style={contentStyle}>4</h3> */}
      <Image style={contentStyle} src={slideFour} alt="" width="100%" height="100%" />
    </div>
  </Carousel>
);
export default Slide;