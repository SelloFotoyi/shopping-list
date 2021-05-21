import React, {createContext, useState, useEffect} from 'react';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [item, addItem] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0.0);

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

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const removeCheckedItems = () => {
    setItems(items.filter((item) => !item.isCheck));
  };

  const toggleCheck = (id) => {
    setItems(
      items.map((item) => {
        if (id === item.id) {
          item.isCheck = !item.isCheck;
        }
        return item;
      })
    );
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <ItemContext.Provider
      value={{
        item,
        items,
        total,
        addItem,
        toggleCheck,
        removeItem,
        removeCheckedItems,
        clearItems,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
