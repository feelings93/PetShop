import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ItemPetCart,
  ItemProductCart,
  ItemServiceOrder,
} from './dto/api.dto.ts';
import logo from '../assets/images/logo.png';
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

  const handleAddToCart = useCallback((Item, typeP) => {
    let checkHaving = false;
    switch (typeP) {
      case 'pet':
        let itemPetCart =
          Item?.photos.length > 0
            ? new ItemPetCart(
                Item.name,
                Item.price,
                Item.id,
                1,
                Item.photos[0].url
              )
            : new ItemPetCart(Item.name, Item.price, Item.id, 1, logo);
        items.map((item) => {
          if (item.petId === itemPetCart.petId) {
            checkHaving = true;
          }
          return item;
        });

        if (!checkHaving) {
          console.log(items);
          setItems([...items, itemPetCart]);
        }
        break;
      case 'product':
        let itemProductCart =
          Item?.photos.length > 0
            ? new ItemProductCart(
                Item.name,
                1,
                Item.price,
                1,
                Item.id,
                Item.photos[0].url
              )
            : new ItemProductCart(Item.name, 1, Item.price, 1, Item.id, logo);
        items.map((item) => {
          if (item.productId === itemProductCart.productId) {
            checkHaving = true;
          }
          return item;
        });

        if (!checkHaving) {
          console.log(items);
          setItems([...items, itemProductCart]);
        }
        break;
      case 'service':
        let itemServiceCart =
          Item?.photos.length > 0
            ? new ItemServiceOrder(Item.name, Item.id, 1, 1, Item.photos[0].url)
            : new ItemServiceOrder(Item.name, Item.id, 1, 1, logo);
        items.map((item) => {
          if (item.serviceId === itemServiceCart.serviceId) {
            checkHaving = true;
          }
          return item;
        });

        if (!checkHaving) {
          console.log(items);
          setItems([...items, itemServiceCart]);
        }
        break;
      default:
        break;
    }
  });

  const handleOpenAdd = useCallback(() => {
    setOpenAdd(true);
  }, []);

  const handleCloseAdd = useCallback(() => {
    setOpenAdd(false);
  }, []);

  const handleDeleteItem = useCallback((id, typeP) => {
    switch (typeP) {
      case 'pet':
        setItems(items.filter((item) => item.petId != id));
        break;
      case 'product':
        setItems(items.filter((item) => item.productId != id));
        break;

      case 'service':
        setItems(items.filter((item) => item.serviceId != id));
        break;
      default:
        break;
    }
  });
  const getItem = useCallback((id, typeP) => {
    console.log(typeP,id);

    switch (typeP) {
      case 'pet':
        const newItem = items?.filter((item) => item.petId == id);
        return newItem[0];
      case 'product':
        return (items?.filter((item) => item.productId == id))[0];
      case 'service':
        return (items?.filter((item) => item.serviceId == id))[0];
      default:
        break;
    }
  });
  const handleUpQuantity = useCallback((id) => {
    const newItems = items?.map((item) => {
      if (item.petId == id) {
        item.quantity += 1;
        item.price = (item.price / (item.quantity - 1)) * item.quantity;
      }
      return item;
    });
    setItems(newItems?.filter((item) => item.quantity > 0 && (item.type=="product" || item.type=="service")));
  });
  const handleDowQuantity = useCallback((id) => {
    const newItems = items?.map((item) => {
      if (item.petId == id && item.quantity > 0) {
        item.quantity -= 1;
        item.price = (item.price / (item.quantity + 1)) * item.quantity;
      }
      return item;
    });
    setItems(newItems?.filter((item) => item.quantity > 0 && (item.type=="product" || item.type=="service")));
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
