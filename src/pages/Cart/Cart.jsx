import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
  const itemsPrice = props.orders.reduce((a, c) => a + c.price * c.count, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 50 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const [payment, setPayment] = useState(false)

  const purchased = () => {
    // props.clearCart()
    setPayment(true)
  }

  return (
    <div className='cart roll-out' key='cart'>
      <div className='cart__main'>
        <h2>Your cart</h2>
        {props.orders.length === 0 && (
          <>
            <p>You did not add any products yet..</p>
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
          </>
        )}
        {props.orders.map((item) => {
          return (
            <div key={item.id} className='cart__item'>
              <div className='cart__item_wrap'>
                <img src={item.src} alt={item.title} />
                <h3>{item.title}</h3>
              </div>

              <div className='cart__item_wrap'>
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#6791f3',
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 700,
                    margin: '10px',
                  }}
                  onClick={() => props.onMinus(item)}
                >
                  -
                </Button>
                <TextField
                  id='outlined-basic'
                  variant='filled'
                  size='small'
                  value={item.count}
                  type='number'
                />
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#6791f3',
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 700,
                    margin: '10px',
                  }}
                  onClick={() => props.onAdd(item)}
                >
                  +
                </Button>
              </div>
              <div className='cart__item_wrap'>
                {item.count > 1 && (
                  <div>
                    Price: {item.count} x ${item.price}
                  </div>
                )}
                {item.count === 1 && <div>Price: ${item.price}</div>}
                <DeleteIcon
                  sx={{ marginLeft: '20px', width: '30px', height: '30px' }}
                  className='delete'
                  onClick={() => props.onRemove(item)}
                />
              </div>
            </div>
          );
        })}
      </div>
      {props.orders.length !== 0 && (
        <div className='cart__sum'>
          <hr />
          <div className='cart__sum_wrap'>
            <h2>Items Price:</h2>
            <p>${itemsPrice.toFixed(2)}</p>
          </div>
          <div className='cart__sum_wrap'>
            <h2>Tax Price:</h2>
            <p>${taxPrice.toFixed(2)}</p>
          </div>
          <div className='cart__sum_wrap'>
            <h2>Shipping Price:</h2>
            {shippingPrice === 0 ? (
              <h3>free because of the purchase amount exceeds $50</h3>
            ) : (
              <p>${shippingPrice.toFixed(2)}</p>
            )}
          </div>

          <div className='cart__sum_wrap'>
            <strong>
              <h2>Total Price:</h2>
            </strong>
            <strong>
              <p>${totalPrice.toFixed(2)}</p>
            </strong>
          </div>
          <div className='cart__sum_pay'>
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#6791f3',
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 700,
              }}
              onClick={purchased}
            >
              Purchase
            </Button>
            {payment && <h2>Thank you for your purchase!</h2>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
