import React, {useState, useContext} from 'react';
import {Card, Button} from 'react-bootstrap';
import {ItemContext} from '../context/ItemContextProvider';
import {ModalContext} from '../context/ModalContextProvider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Item = ({item}) => {
  const {removeItem, toggleCheck, setIsEdit} = useContext(ItemContext);
  const {setEditModal} = useContext(ModalContext);

  const handleItemEdit = () => {
    setIsEdit(true);
    setEditModal(item);
  };
  return (
    <Card className='mb-2'>
      <Card.Header className='fontweight-bold text-center bg-secondary text-white'>
        Total price: <span style={{fontWeight: 'bold'}}>{item.totalPrice}</span>
      </Card.Header>
      <Card.Body className='d-flex justify-content-between'>
        <input type='checkbox' id={item.id} className='btn-check pt-2' />
        <label
          onClick={() => {
            toggleCheck(item.id);
          }}
          htmlFor={item.id}
          className='btn btn-outline-secondary'
        >
          <FontAwesomeIcon icon={faCheck} />
        </label>
        <Card.Title
          onClick={handleItemEdit}
          className='text-center'
          style={{cursor: 'pointer'}}
        >
          {item.name}
        </Card.Title>
        <div
          className='btn btn-outline-danger'
          onClick={() => {
            removeItem(item.id);
          }}
        >
          &times;
        </div>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between bg-secondary text-white'>
        <div className='d-flex flex-column align-items-center justify-content-start'>
          <p className='mb-0'>Unit price</p>
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
