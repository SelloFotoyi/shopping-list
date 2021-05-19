import React, {createContext, useState, useEffect} from 'react';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [item, addItem] = useState({});
  const [items, setItems] = useState([]);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (Object.keys(item).length !== 0) {
      setItems([item, ...items]);
      addItem({});
    }
  }, [item]);

  const openModal = () => {
    console.log('open modal');
    setModalState(true);
  };
  const closeModal = () => {
    console.log('close modal');
    setModalState(false);
  };

  return (
    <ItemContext.Provider
      value={{item, addItem, items, modalState, openModal, closeModal}}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
