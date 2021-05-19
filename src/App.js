import React from 'react';
import AppContainer from './components/AppContainer';
import AppNav from './components/AppNav';

function App() {
  return (
    <React.Fragment className='app'>
      <AppNav />
      <AppContainer />
    </React.Fragment>
  );
}

export default App;
