import React, {useContext} from 'react';
import {ItemContext} from './context/ItemContextProvider';
import AppContainer from './components/AppContainer';
import AppNav from './components/AppNav';
import AddItem from './components/AddItem';

function App() {
  const {modalState} = useContext(ItemContext);
  return (
    <>
      <AppNav />
      <AppContainer />
      {modalState && <AddItem />}
    </>
  );
}

export default App;
