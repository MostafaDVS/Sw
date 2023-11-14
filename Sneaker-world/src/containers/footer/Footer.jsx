import React from 'react';
import Logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="sw__footer section__padding">
    <div className="sw__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="sw__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="sw__footer-links">
      <div className="sw__footer-links_logo">
        <img src={Logo} alt="sw_logo" />
        <p>ALgeria , algiers 137N  <br /> All Rights Reserved</p>
      </div>
      <div className="sw__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="sw__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="sw__footer-links_div">
        <h4>Get in touch</h4>
        <p>ALGERIA - algiers </p>
        <p>+213554333570</p>
        <p>kaydash9@gmail.com</p>
      </div>
    </div>

    <div className="sw__footer-copyright">
      <p>@2023 SNEAKERWORLD. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;