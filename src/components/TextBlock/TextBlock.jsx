import React from 'react';
import './TextBlock.css';

const TextBlock = (props) => {
  return (
    <div className='textblock'>
      <h2>{props.text.h}</h2>
      <p>{props.text.p}</p>
    </div>
  );
};

export default TextBlock;
