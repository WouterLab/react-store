import React from 'react';
import TextBlock from '../../components/TextBlock/TextBlock';
import './About.css';
import aboutPic from './images/about-pic.jpg';

const About = () => {
  const whyStore = [
    {
      h: 'React Store is a delivery from stores №1',
      p: 'We deliver products and goods in more than 150 cities of Russia - from Kaliningrad to Kamchatka. The assortment in the React Store is the same as in stores, but you do not have to stand in line and carry heavy bags. We carefully collect and quickly deliver groceries, medicines and other goods from your favorite stores right to your door.',
    },
    {
      h: 'We are for 100% quality',
      p: 'The products you ordered were carefully selected by purchase. They know how to quickly find the best fruits and vegetables, check expiration dates, and pack your order properly to ensure your products arrive undamaged.',
    },
    {
      h: 'We deliver the same day',
      p: 'You choose the time and place of delivery. Available fast delivery from 20 minutes or scheduled delivery until the required time. ',
    },
    {
      h: 'Heavy bags are not a problem',
      p: 'With React Store you will forget about heavy bags. Delivery of goods up to 30 kg is already included in the price of the order. The courier will deliver the purchases to the door, even if you live in a house without an elevator.',
    },
    {
      h: 'We keep our word',
      p: 'React Store guarantees the quality of service, so we are sure that the products will arrive the freshest and will be delivered on time. And if you have any questions, our support team will answer them.',
    },
  ];

  return (
    <div className='about roll-out' key='about'>
      <div className='about__main'>
        <div className='about__main_info'>
          <TextBlock text={whyStore[0]} />
          <TextBlock text={whyStore[1]} />
          <TextBlock text={whyStore[2]} />
          <TextBlock text={whyStore[3]} />
        </div>
        <div className='about__main_img'>
          <img src={aboutPic} alt='shopping' />
        </div>
      </div>
    </div>
  );
};

export default About;
