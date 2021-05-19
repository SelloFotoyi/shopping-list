import React, {useContext, useState} from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Grid = () => {
  // const {items} = useContext()
  const [items, setItems] = useState([]);
  const item = {
    name: 'Item name',
    qty: '10',
    price: '1500000.24',
    totalPrice: '152.4',
  };
  let itemsTest = [];

  for (let i = 0; i < 20; i++) {
    itemsTest = [...itemsTest, item];
  }
  console.log(`items: ${item}`);
  return (
    <Container fluid className='grid py-3'>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Container>
  );
};

export default Grid;
