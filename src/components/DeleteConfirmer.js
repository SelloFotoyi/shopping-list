import React, {useContext} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {ModalContext} from '../context/ModalContextProvider';
import {ItemContext} from '../context/ItemContextProvider';

const DeleteConfirmer = () => {
  const {deleteModalState, closeModal, deleteType} = useContext(ModalContext);
  const {removeCheckedItems, clearItems, resetTotalCheckedItems} =
    useContext(ItemContext);

  const handleDelete = () => {
    if (deleteType == 'checked') {
      removeCheckedItems();
      resetTotalCheckedItems();
      closeModal();
    } else if (deleteType == 'all') {
      resetTotalCheckedItems();
      clearItems();
      closeModal();
    }
  };
  return (
    <Modal show={deleteModalState} onHide={closeModal} centered>
      <Modal.Header>
        <Modal.Title>
          Delete {deleteType === 'checked' ? 'Checked' : 'All'} Items
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete{' '}
        {deleteType === 'checked' ? 'checked' : 'all'} items?
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-dark' onClick={closeModal}>
          Cancel
        </Button>
        <Button onClick={handleDelete} variant='outline-danger'>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmer;
