import React, {useState, useContext, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ItemContext} from '../context/ItemContextProvider';
import {Button, Form, FormControl, FormLabel, Modal} from 'react-bootstrap';

const AddItem = () => {
  const {addItem, modalState, closeModal} = useContext(ItemContext);
  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [qty, setQty] = useState('');
  const [totalPrice, setTotalPrice] = useState(0.0);
  let floatQty = 0.0;
  let floatUnitPrice = 0.0;

  useEffect(() => {
    if (!isNaN(floatQty) || !isNaN(floatUnitPrice)) {
      floatQty = parseFloat(qty).toFixed(2);
      floatUnitPrice = parseFloat(unitPrice).toFixed(2);
      setTotalPrice(floatQty * floatUnitPrice);
    }
  }, [qty, unitPrice]);

  const handleName = (e) => {
    if (e.target.value.length > 20) {
      setName(`${e.target.value.substring(0, 20)} ...`);
    } else {
      setName(e.target.value);
    }
  };

  const handleQty = (e) => {
    if (e.target.value.length > 4) {
      setQty(`${e.target.value.substring(0, 3)} ...`);
    } else {
      setQty(e.target.value);
    }
  };

  const handleUnitPrice = (e) => {
    if (e.target.value.length > 6) {
      setUnitPrice(`${e.target.value.substring(0, 5)} ...`);
    } else {
      setUnitPrice(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(qty) || isNaN(unitPrice)) {
      alert('provide a correct number format for  qty and/or unit price');
      setUnitPrice('');
      setQty('');
    } else if (qty < 1 || unitPrice < 0) {
      alert('enter valid quantity and/or unit price values');
      setUnitPrice('');
      setQty('');
    } else if (name === '') {
      alert('An item name cannot be empty');
    } else if (qty === '' || unitPrice === '') {
      alert('quantity and/or unit price cannot be empty');
    } else {
      addItem({
        name,
        unitPrice,
        qty,
        totalPrice,
        id: uuidv4(),
      });
      setName('');
      setQty('');
      setUnitPrice('');
      setTotalPrice('');
      closeModal();
      console.log(
        `item name: ${name}
         unit pr: ${unitPrice}
         qty: ${qty}`
      );
    }
  };
  return (
    <Modal show={modalState} onHide={closeModal} centered>
      <Modal.Header>
        <Modal.Title>Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='form-floating mb-2'>
            <FormControl
              type='text'
              id='name'
              maxLength='18'
              placeholder='Name'
              value={name}
              onChange={handleName}
            />
            <FormLabel htmlFor='name'>Name</FormLabel>
          </Form.Group>
          <Form.Group className='form-floating mb-2'>
            <FormControl
              type='text'
              id='price'
              placeholder='Unit price'
              onChange={handleUnitPrice}
              value={unitPrice}
            />
            <FormLabel htmlFor='itemPrice'>Unit price</FormLabel>
          </Form.Group>
          <Form.Group className='form-floating mb-3'>
            <FormControl
              type='number'
              id='qty'
              placeholder='Quantity'
              onChange={handleQty}
              value={qty}
            />
            <FormLabel htmlFor='qty'>Quantity</FormLabel>
          </Form.Group>
          <p className='text-center text-muted my-3'>
            <i>
              <strong>
                Item total price: {totalPrice ? totalPrice : '0.00'}{' '}
              </strong>
            </i>
          </p>
          <Button type='submit' variant='outline-secondary' className='w-100'>
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddItem;
