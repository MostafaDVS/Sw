import React from 'react';
import nike from '../../assets/brand1.png';
import adidas from '../../assets/brand2.png';
import underarmour from '../../assets/brand3.png';
import newbalance from '../../assets/brand4.png';
import gucci from '../../assets/brand5.png';
import './brand.css';

const Brand = () => (
  <div className="sw__brand section__padding">
    <div>
      <img src={nike} />
    </div>
    <div>
      <img src={adidas} />
    </div>
    <div>
      <img src={underarmour} />
    </div>
    <div>
      <img src={newbalance} />
    </div>
    <div>
      <img src={gucci} />
    </div>
  </div>
);

export default Brand;