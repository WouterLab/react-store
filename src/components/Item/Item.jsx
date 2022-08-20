import React from 'react';
import './Item.css';
import Button from '@mui/material/Button';

const Item = (props) => {
  return (
    <div className='item'>
      <div className='item__text'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#6791f3',
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 700,
          }}
          onClick={() => {
            props.onAdd(props.item);
          }}
        >
          ${props.price}
        </Button>
      </div>
      <div className='item__img'>
        <img src={`${props.src}`} alt={props.title} />
      </div>
    </div>
  );
};

export default Item;
