import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Full cleaning',
    text: 'You like your pair how it , We can make it as the first day you baught it .',
  },
  {
    title: 'Custom Modifications',
    text: 'Any requests can be done , you tell US , We can do it with our proffessional experts .',
  },
  {
    title: 'Rebranding ',
    text: 'We provide a full proffessional rebranding , get your NOW . ',
  },
  {
    title: 'The most affordable',
    text: 'We provide you with the best service For the best Prices .',
  },
];

const Features = () => (
  <div className="sw__features section__padding" id="features">
    <div className="sw__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Of FOOTWEAR . & Make it Happen.</h1>
      <p>Request YOUR NEW CUSTOM PAIRS NOW !</p>
    </div>
    <div className="sw__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;