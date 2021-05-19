import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Item = () => {
  const item = {
    name: 'Item name',
    qty: 10,
    price: 1500000.24,
    totalPrice: 152.4,
  };
  return (
    <Card className=''>
      <Card.Header className='fontweight-bold text-center bg-secondary text-white'>
        Total price: <span style={{fontWeight: 'bold'}}>{item.totalPrice}</span>
      </Card.Header>
      <Card.Body className='d-flex justify-content-between'>
        <input type='checkbox' id='item-checkbox' className='btn-check' />
        <label for='item-checkbox' className='btn btn-outline-primary'>
          <FontAwesomeIcon icon={faCheck} />
        </label>
        <Card.Title className='text-center'>{item.name}</Card.Title>
        <Button variant='outline-danger'>&times;</Button>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between bg-secondary text-white'>
        <div className='d-flex flex-column align-items-center justify-content-start'>
          <p className='mb-0'>Item price</p>
          <p className='mb-0'>{item.price}</p>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-start'>
          <p className='mb-0'>Qty</p>
          <p className='mb-0'>{item.qty}</p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Item;
