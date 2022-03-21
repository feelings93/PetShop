import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = React.createContext({
  categories: [],
  setCategories: () => {},
  handleAddProduct: (Product) => {},
  handleEditProduct: (Product) => {},
  editCateObj: {},
  setEditProduct: () => {},
  openEdit: false,
  openAdd: false,
  openDelete: false,
  handleOpenEdit: () => {},
  handleCloseEdit: () => {},
  handleOpenAdd: () => {},
  handleCloseAdd: () => {},
});

const ProductContextProvider = (props) => {
  const { children } = props;
  const [categories, setCategories] = useState([]);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [editProduct, setEditProduct] = React.useState(null);

  const handleAddProduct = useCallback((Product) => {
    setCategories((prev) => [...prev, Product]);
  }, []);

  const handleEditProduct = useCallback(
    (Product) => {
      const newCategories = categories.map((item) => {
        if (item.id === Product.id) {
          return Product;
        }
        return item;
      });

      console.log(newCategories);
      setCategories(newCategories);
    },
    [categories]
  );
  const handleChangeEditProduct = useCallback((Product) => {
    setEditProduct(Product);
    setOpenEdit(true);
  }, []);
  const handleOpenEdit = useCallback(() => {
    setOpenEdit(true);
  }, []);

  const handleCloseEdit = useCallback(() => {
    setOpenEdit(false);
  }, []);

  const handleOpenAdd = useCallback(() => {
    setOpenAdd(true);
  }, []);

  const handleCloseAdd = useCallback(() => {
    setOpenAdd(false);
  }, []);

  const handleOpenDelete = useCallback(() => {
    setOpenDelete(true);
  }, []);

  const handleCloseDelete = useCallback(() => {
    setOpenDelete(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      categories,
      setCategories,
      editCateObj: editProduct,
      handleChangeEditProduct,
      openEdit,
      openAdd,
      openDelete,
      handleCloseAdd,
      handleCloseEdit,
      handleOpenAdd,
      handleOpenEdit,
      handleOpenDelete,
      handleCloseDelete,
      handleAddProduct,
      handleEditProduct,
    }),
    [
      categories,
      editProduct,
      handleAddProduct,
      handleChangeEditProduct,
      handleCloseAdd,
      handleCloseDelete,
      handleCloseEdit,
      handleEditProduct,
      handleOpenAdd,
      handleOpenDelete,
      handleOpenEdit,
      openAdd,
      openDelete,
      openEdit,
    ]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProductContextProvider;
