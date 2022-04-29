import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ItemCart } from './dto/api.dto.ts';


export const PetCartContext = React.createContext({
  items: [],
  setItems: () => {},
  handleAddToCart: () => {},
  handleOpenAdd: () => {},
  handleCloseAdd: () => {},
  handleDeleteItem:()=>{},
  handleUpQuantity:()=>{},
  handleDowQuantity:()=>{},
});

const PetCartContextProvider = (props) => {
  const { children } = props;
  const [items, setItems] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);

  const handleAddToCart = useCallback((Item) => {
    if(items.indexOf(Item)<0)
    {
      let itemCart= Item.photos ? new ItemCart(Item.id,1,Item.name,Item.price,Item.photos[0].url) : new ItemCart(Item.id,1,Item.name,Item.price,"https://p.kindpng.com/picc/s/264-2642768_shopping-icon-vector-and-shopping-cart-hd-png.png")
      setItems([...items, Item]);

    }
    else console.log("Khong co them");
  });

  const handleOpenAdd = useCallback(() => {
    setOpenAdd(true);
  }, []);

  const handleCloseAdd = useCallback(() => {
    setOpenAdd(false);
  }, []);

  const handleDeleteItem = useCallback(()=>{
    
  })
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
    }),
    [
      items,
      handleAddToCart,
      handleCloseAdd,
      handleOpenAdd,
      handleDeleteItem,
      handleUpQuantity,
      handleDowQuantity,
    ]
  );

  return (
    <PetCartContext.Provider value={contextValue}>{children}</PetCartContext.Provider>
  );
};

PetCartContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PetCartContextProvider;
