import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Item = ({item}) => {
  return (
    <Card className='mb-2'>
      <Card.Header className='fontweight-bold text-center bg-secondary text-white'>
        Total price: <span style={{fontWeight: 'bold'}}>{item.totalPrice}</span>
      </Card.Header>
      <Card.Body className='d-flex justify-content-between'>
        <input type='checkbox' id={item.id} className='btn-check' />
        <label htmlFor={item.id} className='btn btn-outline-secondary'>
          <FontAwesomeIcon icon={faCheck} />
        </label>
        <Card.Title className='text-center'>{item.name}</Card.Title>
        <Button variant='outline-danger'>&times;</Button>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between bg-secondary text-white'>
        <div className='d-flex flex-column align-items-center justify-content-start'>
          <p className='mb-0'>Item price</p>
          <p className='mb-0'>{item.unitPrice}</p>
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
