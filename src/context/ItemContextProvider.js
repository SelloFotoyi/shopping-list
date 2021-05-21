import React, {createContext, useState, useEffect} from 'react';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  const [item, addItem] = useState({});
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [total, setTotal] = useState(0.0);
  const [totalCheckedItems, setTotalCheckedItems] = useState(0);

  useEffect(() => {
    if (Object.keys(item).length !== 0 && !isEdit) {
      setItems([item, ...items]);
      addItem({});
    } else if (Object.keys(item).length !== 0 && isEdit) {
      setItems(
        items.map((item_old) => {
          if (item_old.id === item.id) {
            item_old = item;
          }
          return item_old;
        })
      );
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
      items.map((current_item) => {
        if (id === current_item.id) {
          current_item.isCheck = !current_item.isCheck;
          handleTotalChecked(current_item);
        }
        return current_item;
      })
    );
  };
  const handleTotalChecked = (current_item) => {
    if (current_item.isCheck) {
      setTotalCheckedItems(totalCheckedItems + 1);
    } else {
      setTotalCheckedItems(totalCheckedItems - 1);
    }
  };
  const resetTotalCheckedItems = () => {
    setTotalCheckedItems(0);
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
        totalCheckedItems,
        isEdit,
        setIsEdit,
        addItem,
        toggleCheck,
        removeItem,
        removeCheckedItems,
        resetTotalCheckedItems,
        clearItems,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
