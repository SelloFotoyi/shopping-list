import React, {useContext, useEffect} from 'react';
import {ModalContext} from './context/ModalContextProvider';
import AppContainer from './components/AppContainer';
import AppNav from './components/AppNav';
import AddItem from './components/AddItem';
import DeleteConfirmer from './components/DeleteConfirmer';
import RefreshModal from './components/RefreshModal';

function App() {
  const {addModalState, deleteModalState, refreshModalState} =
    useContext(ModalContext);

  return (
    <>
      <AppNav />
      <AppContainer />
      {addModalState && <AddItem />}
      {deleteModalState && <DeleteConfirmer />}
      {refreshModalState && <RefreshModal />}
    </>
  );
}

export default App;
