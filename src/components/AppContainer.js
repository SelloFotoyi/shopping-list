import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Aside from './Aside';
import Grid from './Grid';
import Item from './Item';

const AppContainer = () => {
  return (
    <Container fluid className='app-container'>
      <Row className='h-100'>
        <Col className='d-none d-lg-inline-block' lg={3}>
          <Aside />
        </Col>
        <Col className='m-0 pt-5' lg={9}>
          <Grid />
        </Col>
      </Row>
    </Container>
  );
};

export default AppContainer;
