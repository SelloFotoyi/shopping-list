import React, {useContext, useState} from 'react';
import Item from './Item';
import Container from 'react-bootstrap/Container';
import {ItemContext} from '../context/ItemContextProvider';
//import EmptyGrid from './EmptyGrid';

const Grid = () => {
  const {items} = useContext(ItemContext);

  let EmptyGrid = () => (
    <Container className='my-3 h-100 d-flex justify-content-center align-items-center border border-secondary'>
      <p className='display-5 text-secondary'>
        Added items will be displayed here...{' '}
      </p>
    </Container>
  );
  return items.length !== 0 ? (
    <Container fluid className='grid my-3 h-100'>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Container>
  ) : (
    <EmptyGrid />
  );
};

export default Grid;
