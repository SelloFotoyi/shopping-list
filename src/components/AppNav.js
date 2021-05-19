import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container, Navbar, Nav, Accordion, Card, Button} from 'react-bootstrap';
import {
  faArrowDown,
  faBackspace,
  faCalculator,
  faCheck,
  faPlus,
  faSortAmountDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const AppNav = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <Navbar expand='lg' className='px-3 d-flex app-nav fixed-top'>
      <Navbar.Brand>
        <FontAwesomeIcon icon={faCalculator} className='me-2' />
        <span style={{fontWeight: 'bold'}}>0.00</span>
      </Navbar.Brand>
      <Container className='d-none d-lg-flex justify-content-lg-end'>
        <FontAwesomeIcon icon={faCheck} className='me-2' />
        <span style={{fontStyle: 'italic'}}>5/7</span>
      </Container>
      <div className='d-lg-none'>
        <FontAwesomeIcon icon={faCheck} className='me-2' />
        <span style={{fontStyle: 'italic'}}>5/7</span>
      </div>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto d-lg-none py-2 app-nav-mobile'>
          <Nav.Item
            as={Button}
            variant='outline-secondary'
            className='d-flex align-items-center my-1 rounded-pill'
          >
            <FontAwesomeIcon icon={faPlus} className='me-2' />
            <span className=''>Add item</span>
          </Nav.Item>
          <Nav.Item
            as={Button}
            variant='outline-secondary'
            className='d-flex align-items-center my-1'
            data-bs-toggle='collapse'
            data-bs-target='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
            onClick={() => setToggler(!toggler)}
          >
            <FontAwesomeIcon icon={faSortAmountDown} className='me-2' />
            <span>Sort items by</span>
          </Nav.Item>
          <div
            className={`${toggler ? 'collapse' : 'collapse.show'}`}
            id='collapseExample'
          >
            <div className='mx-2 pl-2'>
              <Button
                variant='outline-secondary'
                className='d-flex align-items-center my-1 border-0'
              >
                <input
                  type='radio'
                  name='sort'
                  id='totalDesc'
                  className='form-check-input'
                  // onChange={(e) => {
                  //   if (e.target.checked) {
                  //     setSortType(e.target.value);
                  //   }
                  // }}
                />
                <label htmlFor='totalDesc' className='ms-2 mb-0'>
                  item total price <span>(highest to lowest)</span>
                </label>
              </Button>
              <Button
                variant='outline-secondary'
                className='d-flex align-items-center my-1 border-0'
              >
                <input
                  type='radio'
                  name='sort'
                  id='totalAsc'
                  className='form-check-input'
                  // onChange={(e) => {
                  //   if (e.target.checked) {
                  //     setSortType(e.target.value);
                  //   }
                  // }}
                />
                <label htmlFor='totalAsc' className='ms-2 mb-0'>
                  item total price <span>(lowest to highest)</span>
                </label>
              </Button>
            </div>
          </div>
          <Nav.Item
            as={Button}
            variant='outline-secondary'
            className='d-flex align-items-center my-1'
          >
            <FontAwesomeIcon icon={faBackspace} className='me-2' />
            <span>Delete checked items</span>
          </Nav.Item>
          <Nav.Item
            as={Button}
            variant='outline-secondary'
            className='d-flex align-items-center my-1'
          >
            <FontAwesomeIcon icon={faTrash} className='me-2' />
            <span>Delete all items</span>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNav;
