import React, {useContext} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {ModalContext} from '../context/ModalContextProvider';

const RefreshModal = () => {
  const {refreshModalState, closeModal} = useContext(ModalContext);
  return (
    <Modal size='sm' show={refreshModalState} onHide={closeModal}>
      <Modal.Body className='display-6'>List sorted! </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' className='w-100' onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RefreshModal;
