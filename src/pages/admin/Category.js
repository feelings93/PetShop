import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';

import AddCategoryForm from '../../components/admin/category/AddCategoryForm';
import useHttp from '../../hooks/use-http';
import { getCategories } from '../../lib/api/category';
import CategoryGrid from '../../components/admin/category/CategoryGrid';
import EditCategoryForm from '../../components/admin/category/EditCategoryForm';

const Category = () => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [editCategory, setEditCategory] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const { data, error, status, sendRequest } = useHttp(getCategories, true);

  const handleAddCategory = (category) => {
    const newCategories = [...categories, category];
    console.log(newCategories);
    setCategories(newCategories);
  };

  const handleEditCategory = (category) => {
    const newCategories = categories.map((item) => {
      if (item.id === category.id) {
        return category;
      }
      return item;
    });

    console.log(newCategories);
    setCategories(newCategories);
  };

  React.useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  React.useEffect(() => {
    if (status === 'completed' && data) {
      setCategories(data);
    }
  }, [setCategories, data, status]);

  if (status === 'pending') return <h1>Loading...</h1>;
  if (error) return <h1>Đã có lỗi xảy ra</h1>;
  return (
    <>
      <Stack
        mb={2}
        justifyContent='space-between'
        alignItems='center'
        direction='row'
      >
        <Typography>Danh mục</Typography>
        <Stack spacing={1} alignItems='center' direction='row'>
          <TextField
            size='small'
            id='search'
            label='Tìm kiếm'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Button
            onClick={() => {
              setOpenAdd(true);
            }}
            sx={{ color: '#fff' }}
            variant='contained'
            color='success'
          >
            Thêm
          </Button>
        </Stack>
      </Stack>
      <CategoryGrid
        handleChangeEditCategory={(category) => {
          setEditCategory(category);
          setOpenEdit(true);
        }}
        categories={categories}
      />

      {openAdd && (
        <AddCategoryForm
          categories={categories}
          open={openAdd}
          onClose={() => {
            setOpenAdd(false);
          }}
          handleAddCategory={handleAddCategory}
        />
      )}
      {openEdit && (
        <EditCategoryForm
          categories={categories}
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          category={editCategory}
          handleEditCategory={handleEditCategory}
        />
      )}
      {openDelete && (
        <EditCategoryForm
          categories={categories}
          open={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          category={editCategory}
          handleEditCategory={handleEditCategory}
        />
      )}
    </>
  );
};

export default Category;
