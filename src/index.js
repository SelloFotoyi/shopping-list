import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemContextProvider from './context/ItemContextProvider';
import ModalContextProvider from './context/ModalContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ModalContextProvider>
      <ItemContextProvider>
        <App />
      </ItemContextProvider>
    </ModalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
