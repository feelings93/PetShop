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

  const handleAddToCart = useCallback((Item, typeP, quantity = 0) => {
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
        items?.map((item) => {
          if (item.itemId === itemPetCart.itemId && item.type == 'pet') {
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
        items?.map((item) => {
          if (
            item.itemId === itemProductCart.itemId &&
            item.type == 'product'
          ) {
            checkHaving = true;
          }
          return item;
        });

        if (!checkHaving) {
          console.log(items);
          setItems([...items, itemProductCart]);
        } else {
          items?.map((e) => {
            if (e.itemId == Item.id) {
              e.quantity += Number(quantity);
              e.price =
                (e.price / (e.quantity - Number(quantity))) * e.quantity;
            }
            return e;
          });
          setItems(items);
        }
        break;
      case 'service':
        let itemServiceCart =
          Item?.photos.length > 0
            ? new ItemServiceOrder(Item.name, Item.id, 1, 1, Item.photos[0].url)
            : new ItemServiceOrder(Item.name, Item.id, 1, 1, logo);
        items?.map((item) => {
          if (
            item.itemId === itemServiceCart.itemId &&
            item.type == 'service'
          ) {
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
    setItems(
      items?.filter((item) => {
        if (item.type == typeP && item.itemId == id) return false;
        return true;
      })
    );
  });
  const getItem = useCallback((id, typeP) => {
    return (items?.filter(
      (item) => item.itemId == id && item.type == typeP
    ))[0];
  });
  const handleUpQuantity = useCallback((id, typeP) => {
    const newItems = items?.map((item) => {
      if (item.itemId == id && item.type == typeP) {
        item.quantity += 1;
        item.price = (item.price / (item.quantity - 1)) * item.quantity;
      }
      return item;
    });
    setItems(newItems?.filter((item) => item.quantity > 0 || !item.quantity));
  });
  const handleDowQuantity = useCallback((id, typeP) => {
    const newItems = items?.map((item) => {
      if (item.itemId == id && item.quantity > 0 && item.type == typeP) {
        item.quantity -= 1;
        item.price = (item.price / (item.quantity + 1)) * item.quantity;
      }
      return item;
    });
    setItems(newItems?.filter((item) => item.quantity > 0 || !item.quantity));
  });
  const handleGetTotal = () => {
    let total = 0;
    items?.forEach((item) => (total += item.price));
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
