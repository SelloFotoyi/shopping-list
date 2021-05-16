import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = () => {
  const item = {
    name: 'Item name',
    qty: 10,
    price: 1500000.24,
    totalPrice: 152.4,
  };
  return (
    <Card>
      <Card.Header className='fontweight-bold text-center'>
        Total: <span style={{fontWeight: 'bold'}}>{item.totalPrice}</span>
      </Card.Header>
      <Card.Body className='d-flex justify-content-between'>
        <Button variant='outline-primary'>
          <input type='checkbox' className='' />
        </Button>
        <Card.Title className='text-center'>{item.name}</Card.Title>
        <Button variant='outline-danger'>&times;</Button>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between'>
        <div className='d-flex flex-column align-items-center justify-content-start'>
          <p className='mb-0'>Price</p>
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
