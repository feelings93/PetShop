import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const CategoryContext = React.createContext({
  categories: [],
  setCategories: () => {},
  handleAddCategory: () => {},
  handleEditCategory: () => {},
  editCateObj: {},
  setEditCategory: () => {},
  openEdit: false,
  openAdd: false,
  openDelete: false,
  handleOpenEdit: () => {},
  handleCloseEdit: () => {},
  handleOpenAdd: () => {},
  handleCloseAdd: () => {},
});

const CategoryContextProvider = (props) => {
  const { children } = props;
  const [categories, setCategories] = useState([]);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [editCategory, setEditCategory] = React.useState(null);

  const handleAddCategory = useCallback((category) => {
    setCategories((prev) => [...prev, category]);
  }, []);

  const handleEditCategory = useCallback(
    (category) => {
      const newCategories = categories.map((item) => {
        if (item.id === category.id) {
          return category;
        }
        return item;
      });

      console.log(newCategories);
      setCategories(newCategories);
    },
    [categories]
  );
  const handleChangeEditCategory = useCallback((category) => {
    setEditCategory(category);
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
      editCateObj: editCategory,
      handleChangeEditCategory,
      openEdit,
      openAdd,
      openDelete,
      handleCloseAdd,
      handleCloseEdit,
      handleOpenAdd,
      handleOpenEdit,
      handleOpenDelete,
      handleCloseDelete,
      handleAddCategory,
      handleEditCategory,
    }),
    [
      categories,
      editCategory,
      handleAddCategory,
      handleChangeEditCategory,
      handleCloseAdd,
      handleCloseDelete,
      handleCloseEdit,
      handleEditCategory,
      handleOpenAdd,
      handleOpenDelete,
      handleOpenEdit,
      openAdd,
      openDelete,
      openEdit,
    ]
  );

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CategoryContextProvider;
