import React, {useContext, useState} from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import {ItemContext} from '../context/ItemContextProvider';

const Grid = () => {
  const {items} = useContext(ItemContext);
  return (
    <Container fluid className='grid my-3 h-100 border border-secondary'>
      {items && items.map((item) => <Item key={item.id} item={item} />)}
    </Container>
  );
};

export default Grid;
