import React, {useContext} from 'react';
import {ModalContext} from './context/ModalContextProvider';
import AppContainer from './components/AppContainer';
import AppNav from './components/AppNav';
import AddItem from './components/AddItem';
import DeleteConfirmer from './components/DeleteConfirmer';

function App() {
  const {addModalState, deleteModalState} = useContext(ModalContext);
  return (
    <>
      <AppNav />
      <AppContainer />
      {addModalState && <AddItem />}
      {deleteModalState && <DeleteConfirmer />}
    </>
  );
}

export default App;
