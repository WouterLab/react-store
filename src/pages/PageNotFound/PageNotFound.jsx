import React from 'react';
import './PageNotFound.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='notfnd'>
      <div className='notfnd__main'>
        <h2>
          <b>404</b>
          <br />
          Page not found
        </h2>
        <h3>Return to shopping</h3>
        <Link to='/products'>
          <Button
            variant='contained'
            size='large'
            sx={{
              backgroundColor: '#6791f3',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 700,
              paddingLeft: '70px',
              paddingRight: '70px',
            }}
          >
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
