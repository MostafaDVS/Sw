import React from 'react';
import people from '../../assets/snk_a.png';
import ai from '../../assets/sneaker.png';
import './header.css';

const Header = () => (
  <div className="sw__header section__padding" id="home">
    <div className="sw__header-content">
      <h1 className="gradient__text">Let&apos;s Get You A brand New Unique Custom Pair Of SNEAKERS</h1>
      <p>Tired of your regular plain Sneakers ? . Worry no more , We got you covered , wih Sneaker World get your favorite sneakers brought to life with our professional experts , or get a brand new one customized as YOU which.</p>

      <div className="sw__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="sw__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="sw__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;