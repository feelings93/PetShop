import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';



export const PetCartContext = React.createContext({
  items: [],
  setItems: () => {},
  handleAddToCart: () => {},
  handleOpenAdd: () => {},
  handleCloseAdd: () => {},
});

const PetCartContextProvider = (props) => {
  const { children } = props;
  const [items, setItems] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);

  const handleAddToCart = useCallback((Item) => {
    if(items.indexOf(Item)<0)
    setItems([...items, Item]);
    else console.log("Khong co them");
  });

  const handleOpenAdd = useCallback(() => {
    setOpenAdd(true);
  }, []);

  const handleCloseAdd = useCallback(() => {
    setOpenAdd(false);
  }, []);

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
    }),
    [
      items,
      handleAddToCart,
      handleCloseAdd,
      handleOpenAdd,
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
