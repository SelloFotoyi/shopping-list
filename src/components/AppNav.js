import React, {useState, useContext} from 'react';
import {ItemContext} from '../context/ItemContextProvider';
import {ModalContext} from '../context/ModalContextProvider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container, Navbar, Nav, Accordion, Card, Button} from 'react-bootstrap';
import {
  faCheckSquare,
  faCalculator,
  faCheck,
  faPlus,
  faSortAmountDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const AppNav = () => {
  const {
    total,
    items,
    totalCheckedItems,
    sortByPriceAscending,
    sortByPriceDescending,
  } = useContext(ItemContext);
  const {openAddModal, openDeleteModal, setDeleteType, openRefreshModal} =
    useContext(ModalContext);

  const [toggler, setToggler] = useState(false);

  const handleDelete = (deleteType) => {
    setDeleteType(deleteType);
    openDeleteModal();
  };

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='px-3 py-1 d-flex app-nav fixed-top'
      bg='secondary'
      variant='dark'
    >
      <Navbar.Brand>
        <FontAwesomeIcon icon={faCalculator} className='me-2' />
        <span>
          <strong>{total.toFixed(2)}</strong>
        </span>
      </Navbar.Brand>
      <Container className='d-none d-lg-flex justify-content-lg-end'>
        <FontAwesomeIcon icon={faCheck} className='me-2 text-light' />
        <span className='text-white'>
          <i>
            <strong>
              {totalCheckedItems}/{items.length}
            </strong>
          </i>
        </span>
      </Container>
      <div className='d-lg-none'>
        <FontAwesomeIcon icon={faCheck} className='me-2 text-light' />
        <span className='text-white'>
          <i>
            <strong>
              {totalCheckedItems}/{items.length}
            </strong>
          </i>
        </span>
      </div>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto d-lg-none py-2 mt-2 app-nav-mobile'>
          <Nav.Item
            as={Button}
            variant='outline-secondary'
            className='d-flex align-items-center my-1 rounded-pill'
            onClick={openAddModal}
          >
            <FontAwesomeIcon icon={faPlus} className='me-2' />
            <span className='h5 mb-0'>Add item</span>
          </Nav.Item>
          <Nav.Item
            as={Button}
            variant='outline-secondary'
            className='d-flex align-items-center my-1 rounded-pill'
            data-bs-toggle='collapse'
            data-bs-target='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
            onClick={() => setToggler(!toggler)}
          >
            <FontAwesomeIcon icon={faSortAmountDown} className='me-2' />
            <span className='h5 mb-0'>Sort items by</span>
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
                  onChange={(e) => {
                    if (e.target.checked) {
                      sortByPriceDescending();
                      openRefreshModal();
                    }
                  }}
                />
                <label htmlFor='totalDesc' className='ms-2 mb-0'>
                  Total price<i>(Descending)</i>
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
                  onChange={(e) => {
                    if (e.target.checked) {
                      sortByPriceAscending();
                      openRefreshModal();
                    }
                  }}
                />
                <label htmlFor='totalAsc' className='ms-2 mb-0'>
                  Total price <i>(Ascending)</i>
                </label>
              </Button>
            </div>
          </div>
          <Nav.Item
            as={Button}
            variant='outline-secondary'
            className='d-flex align-items-center my-1 rounded-pill'
            onClick={() => handleDelete('checked')}
          >
            <FontAwesomeIcon icon={faCheckSquare} className='me-2 bg-danger' />
            <span className='h5 mb-0'>Delete checked items</span>
          </Nav.Item>
          <Nav.Item
            as={Button}
            variant='outline-secondary'
            className='d-flex align-items-center my-1 rounded-pill'
            onClick={() => handleDelete('all')}
          >
            <FontAwesomeIcon icon={faTrash} className='me-2' />
            <span className='h5 mb-0'>Delete all items</span>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNav;
