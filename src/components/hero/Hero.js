import React from 'react';
import "./hero.scss";
import { images } from "../../images";

const Hero = () => {
  return <div>
      <div className='hero'>
        <div className='right-top-image'>
          <picture>
            <source media='(max-width:767px)' 
                    srcSet={images.intro_right_mobile} 
            />
            <img src={images.intro_right} alt='' />
          </picture>
        </div>
        <div className='hero__wrapper container'>
          <div className='hero__content'>
            <h1 className='title1'>
              Humanizing <br /> Your insurance
            </h1>
            <p className='hero__text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <button className='btn'>VIEW PLANS</button>
          </div>
          <div className='hero__image'>
            <picture>
                <source media='(max-width:767px)' 
                        srcSet={images.intro_mobile} 
                />
                <img src={images.intro_desktop} alt='' />
            </picture>
          </div>
        </div>
        <div className='left-bottom-image'>
          <picture>
                <source media='(max-width:767px)' 
                        srcSet={images.left_mobile} 
                />
                <img src={images.intro_left} alt='' />
          </picture>
        </div>
      </div>
    </div>
}

export default Hero