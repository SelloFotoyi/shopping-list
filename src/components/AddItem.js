import React, {useState, useContext, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {ItemContext} from '../context/ItemContextProvider';
import {ModalContext} from '../context/ModalContextProvider';
import {Button, Form, FormControl, FormLabel, Modal} from 'react-bootstrap';

const AddItem = () => {
  const {addModalState, closeModal, itemEdit, resetEditModal} =
    useContext(ModalContext);
  const {addItem, setIsEdit} = useContext(ItemContext);
  const [name, setName] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [id, setId] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  let floatQty = 0.0;
  let floatUnitPrice = 0.0;

  useEffect(() => {
    if (Object.keys(itemEdit).length !== 0) {
      setIsEdit(true);
      setName(itemEdit.name);
      setUnitPrice(itemEdit.unitPrice);
      setQty(itemEdit.qty);
      setTotalPrice(itemEdit.totalPrice);
      setId(itemEdit.id);
      setIsCheck(itemEdit.isCheck);
    } else if (Object.keys(itemEdit).length === 0) {
      setId(uuidv4());
    }
  }, []);

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
        id,
        isCheck,
      });
      resetEditModal();
      setName('');
      setQty('');
      setUnitPrice('');
      setTotalPrice('');
      closeModal();
    }
  };
  return (
    <Modal
      show={addModalState}
      onHide={() => {
        resetEditModal();
        closeModal();
      }}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          {Object.keys(itemEdit).length !== 0 ? 'Edit Item' : 'Add Item'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='form-floating mb-2 rounded'>
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
              min={1}
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
          <Button
            type='submit'
            variant='outline-secondary'
            className='w-100 rounded h2'
          >
            <b>Add</b>
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddItem;
