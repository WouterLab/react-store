import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import groceries from './images/groceries.jpg';

const Home = () => {
  return (
    <div className='home roll-out' key='home'>
      <div className='home__main'>
        <div className='home__main_text'>
          <h1>Online shopping is simple!</h1>
          <p>
            Order your groceries from{' '}
            <span style={{ fontStyle: 'italic' }}>React Store</span> with our
            easy to use app, and get your products delivered straight to your
            doorstep.
          </p>
          <Link to='/products'>
          <Button
                variant='contained'
                size='large'
                sx={{
                  backgroundColor: '#6791f3',
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: 700,
                }}>Start Shopping</Button>
          </Link>
        </div>
        <div className='home__main_img'>
          <img src={groceries} alt='groceries' />
        </div>
      </div>
    </div>
  );
};

export default Home;
