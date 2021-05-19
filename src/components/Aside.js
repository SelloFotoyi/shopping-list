import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faBackspace,
  faPlus,
  faSortAmountDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <Container fluid className='pt-5 position-fixed'>
      <div className='d-flex align-items-center my-2 p-2 rounded-pill aside-row'>
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
              class='form-check-input'
              // onChange={(e) => {
              //   if (e.target.checked) {
              //     setSortType(e.target.value);
              //   }
              // }}
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
              class='form-check-input'
              // onChange={(e) => {
              //   if (e.target.checked) {
              //     setSortType(e.target.value);
              //   }
              // }}
            />
            <label htmlFor='totalAsc' className='ms-2 h6 mb-0'>
              Total price <i>(ascending)</i>
            </label>
          </Button>
        </div>
      </div>
      <div className='d-flex align-items-center my-2 p-2 rounded-pill w-51 aside-row'>
        <FontAwesomeIcon icon={faBackspace} className='me-4 ms-2 aside-icon' />
        <span className='h5 mb-0'>Delete checked items</span>
      </div>
      <div className='d-flex align-items-center my-2 p-2 rounded-pill w-51 aside-row'>
        <FontAwesomeIcon icon={faTrash} className='me-4 ms-2 aside-icon' />
        <span className='h5 mb-0'>Delete all items</span>
      </div>
    </Container>
  );
};

export default Aside;
