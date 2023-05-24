import React from 'react';
import "./info.scss";
import { images } from "../../images";

const Info = () => {
  return <div>
    <div className='we-are-different'>
      <div className='container'>
        <h2 className='title1 title1--mod'>We are different</h2>
        <div className='we-are-different__content'>
          <div className='snappy'>
            <img src={images.snappy_process} alt='' />
            <h3>Snappy Process</h3>
            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          </div>
          <div className='affordable'>
            <img src={images.affordable_prices} alt='' />
            <h3>Affordable Prices</h3>
            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          </div>
          <div className='people'>
            <img src={images.people_first} alt='' />
            <h3>People First</h3>
            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Info