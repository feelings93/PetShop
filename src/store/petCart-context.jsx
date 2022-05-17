import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ItemCart } from './dto/api.dto.ts';

export const PetCartContext = React.createContext({
  items: [],
  setItems: () => {},
  handleAddToCart: () => {},
  handleOpenAdd: () => {},
  handleCloseAdd: () => {},
  handleDeleteItem: () => {},
  handleUpQuantity: () => {},
  handleDowQuantity: () => {},
  handleGetTotal: () => {},
  getItem: () => {},
});

const PetCartContextProvider = (props) => {
  const { children } = props;
  const [items, setItems] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);

  const handleAddToCart = useCallback((Item) => {
    let checkHaving = false;
    console.log(Item);
    let itemCart = Item?.photos.length > 0
      ? new ItemCart(Item.id, 1, Item.name, Item.price, Item.photos[0].url)
      : new ItemCart(
          Item.id,
          1,
          Item.name,
          Item.price,
          // 'https://p.kindpng.com/picc/s/264-2642768_shopping-icon-vector-and-shopping-cart-hd-png.png'
        );
    items.map((item) => {
      if (item.petId === itemCart.petId) {
        checkHaving = true;
      }
    });
    if (!checkHaving) setItems([...items, itemCart]);
  });

  const handleOpenAdd = useCallback(() => {
    setOpenAdd(true);
  }, []);

  const handleCloseAdd = useCallback(() => {
    setOpenAdd(false);
  }, []);

  const handleDeleteItem = useCallback((id) => {
    setItems(items.filter((item) => item.petId != id));
    console.log(items);
  });
  const getItem = useCallback((id) => {
    const newItem = items?.filter((item) => item.petId == id);
    return newItem[0];
  });
  const handleUpQuantity = useCallback((id) => {
    const newItems = items?.map((item) => {
      if (item.petId == id) {
        item.quantity += 1;
        item.price = (item.price / (item.quantity - 1)) * item.quantity;
      }
      return item;
    });
    setItems(newItems?.filter((item) => item.quantity > 0));
  });
  const handleDowQuantity = useCallback((id) => {
    const newItems = items?.map((item) => {
      if (item.petId == id && item.quantity > 0) {
        item.quantity -= 1;
        item.price = (item.price / (item.quantity + 1)) * item.quantity;
      }
      return item;
    });
    setItems(newItems?.filter((item) => item.quantity > 0));
  });
  const handleGetTotal = () => {
    let total = 0;
    items.forEach((item) => (total += item.price));
    return total;
  };
  // React.useEffect(() => {
  //   if (query === '' || !query) {
  //     setSearchPets(pets);
  //   } else {
  //     setSearchPets(
  //       pets.filter((x) => x.name.toUpperCase().includes(query.toUpperCase()))
  //     );
  //   }
  // }, [pets, query]);

  const contextValue = useMemo(
    () => ({
      items,
      setItems,

      handleCloseAdd,
      handleOpenAdd,
      handleAddToCart,
      handleDeleteItem,
      handleUpQuantity,
      handleDowQuantity,
      handleGetTotal,
      getItem,
    }),
    [
      items,
      handleAddToCart,
      handleCloseAdd,
      handleOpenAdd,
      handleDeleteItem,
      handleUpQuantity,
      handleDowQuantity,
      handleGetTotal,
      getItem,
    ]
  );

  return (
    <PetCartContext.Provider value={contextValue}>
      {children}
    </PetCartContext.Provider>
  );
};

PetCartContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PetCartContextProvider;
