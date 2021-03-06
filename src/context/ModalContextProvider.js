import React, {useState, createContext} from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [addModalState, setAddModalState] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [refreshModalState, setRefreshModalState] = useState(false);
  const [deleteType, setDeleteType] = useState('');
  const [itemEdit, setItemEdit] = useState({});

  const setEditModal = (item) => {
    setItemEdit(item);
    openAddModal();
  };

  const resetEditModal = () => {
    setItemEdit({});
  };

  const openAddModal = () => {
    setAddModalState(true);
  };
  const openDeleteModal = () => {
    setDeleteModalState(true);
  };
  const openRefreshModal = () => {
    setRefreshModalState(true);
  };
  const closeModal = () => {
    setAddModalState(false);
    setDeleteModalState(false);
    setRefreshModalState(false);
  };
  return (
    <ModalContext.Provider
      value={{
        addModalState,
        deleteModalState,
        deleteType,
        itemEdit,
        refreshModalState,
        openRefreshModal,
        setDeleteType,
        openAddModal,
        openDeleteModal,
        closeModal,
        setEditModal,
        resetEditModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
