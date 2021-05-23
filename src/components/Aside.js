import React, {useState, useContext} from 'react';
import {Container, Button} from 'react-bootstrap';
import {ModalContext} from '../context/ModalContextProvider';
import {ItemContext} from '../context/ItemContextProvider';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  // faArrowDown,
  // faBackspace,
  faCheckSquare,
  faPlus,
  faSortAmountDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
  const {openAddModal, openDeleteModal, setDeleteType, openRefreshModal} =
    useContext(ModalContext);
  const {sortByPriceAscending, sortByPriceDescending} = useContext(ItemContext);
  const [toggler, setToggler] = useState(false);

  const handleDelete = (deleteType) => {
    setDeleteType(deleteType);
    openDeleteModal();
  };

  return (
    <Container fluid className='mt-5 position-fixed aside'>
      <div
        className='d-flex align-items-center my-2 p-2 rounded-pill aside-row'
        onClick={openAddModal}
      >
        <FontAwesomeIcon icon={faPlus} className='me-4 ms-2 aside-icon' />
        <span className='h5 mb-0'>Add item</span>
      </div>
      <div
        className='d-flex align-items-center my-2 p-2 rounded-pill  aside-row'
        data-bs-toggle='collapse'
        data-bs-target='#collapseExample'
        aria-expanded='false'
        aria-controls='collapseExample'
        onClick={() => setToggler(!toggler)}
      >
        <FontAwesomeIcon
          icon={faSortAmountDown}
          className='me-4 ms-2 aside-icon'
        />
        <span className='h5 mb-0'>Sort items by</span>
      </div>
      <div
        className={`${toggler ? 'collapse' : 'collapse.show'} `}
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
            <label htmlFor='totalDesc' className='ms-2 h6 mb-0'>
              Total price <i>(descending)</i>
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
            <label htmlFor='totalAsc' className='ms-2 h6 mb-0'>
              Total price <i>(ascending)</i>
            </label>
          </Button>
        </div>
      </div>
      <div
        onClick={() => handleDelete('checked')}
        className='d-flex align-items-center my-2 p-2 rounded-pill w-51 aside-row'
      >
        <FontAwesomeIcon
          icon={faCheckSquare}
          className='me-4 ms-2 aside-icon bg-danger'
        />
        <span className='h5 mb-0'>Delete checked </span>
      </div>
      <div
        onClick={() => handleDelete('all')}
        className='d-flex align-items-center my-2 p-2 rounded-pill w-51 aside-row'
      >
        <FontAwesomeIcon icon={faTrash} className='me-4 ms-2 aside-icon' />
        <span className='h5 mb-0'>Delete all</span>
      </div>
    </Container>
  );
};

export default Aside;
