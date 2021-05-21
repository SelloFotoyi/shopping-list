import React, {useState, createContext} from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [addModalState, setAddModalState] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [deleteType, setDeleteType] = useState('');

  const openAddModal = () => {
    setAddModalState(true);
  };
  const openDeleteModal = () => {
    setDeleteModalState(true);
  };
  const closeModal = () => {
    setAddModalState(false);
    setDeleteModalState(false);
  };
  return (
    <ModalContext.Provider
      value={{
        addModalState,
        deleteModalState,
        deleteType,
        setDeleteType,
        openAddModal,
        openDeleteModal,
        closeModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
