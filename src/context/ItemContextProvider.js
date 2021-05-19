import React, {createContext, useState, useEffect} from 'react';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [item, addItem] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (Object.keys(item).length !== 0) {
      setItems([item, ...items]);
      addItem({});
    }
    if (items) {
      let i = 0.0;
      items.forEach((item) => {
        i += item.totalPrice;
      });
      setTotal(i);
    }
  }, [item, items]);

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
      value={{item, addItem, items, total, modalState, openModal, closeModal}}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
