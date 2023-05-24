import React from 'react';
import { images } from '../../images';
import "./banner.scss";

const Banner = () => {
  return (
    <div>
      <div className='banner container'>
        <picture>
          <source media="(max-width: 767px)" srcSet={images.works_mobile} />
          < img src={images.works_desktop} alt="" />
        </picture>

        <div className='banner__wrapper'>
          <div className='title'>
            <h2 className='title1'>
              Find Out More <br /> About How We Work
            </h2>
          </div>
          <div className='butoon'>
            <button className='btn'>How We Work</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner