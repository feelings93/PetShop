import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext({
  users: [],
  setUsers: () => {},
  handleAddUser: () => {},
  handleEditUser: () => {},
  editUserObj: {},
  delUserObj: {},
  setEditUser: () => {},
  openEdit: false,
  openAdd: false,
  openDelete: false,
  handleOpenEdit: () => {},
  handleCloseEdit: () => {},
  handleOpenAdd: () => {},
  handleCloseAdd: () => {},
  handleOpenDelete: () => {},
  handleCloseDelete: () => {},
  handleChangeDelUser: () => {},
  handleDelUser: () => {},
});

const UserContextProvider = (props) => {
  const { children } = props;
  const [users, setUsers] = useState([]);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [editUser, setEditUser] = React.useState(null);
  const [delUser, setDelUser] = React.useState(null);

  const handleAddUser = useCallback((User) => {
    setUsers((prev) => [...prev, User]);
  }, []);

  const handleEditUser = useCallback(
    (User) => {
      const newusers = users.map((item) => {
        if (item.id === User.id) {
          return User;
        }
        return item;
      });

      console.log(newusers);
      setUsers(newusers);
    },
    [users]
  );
  const handleDelUser = useCallback(
    (User) => {
      const newusers = users.filter((item) => item.id !== User.id);

      console.log(newusers);
      setUsers(newusers);
    },
    [users]
  );
  const handleChangeEditUser = useCallback((User) => {
    setEditUser(User);
    setOpenEdit(true);
  }, []);
  const handleChangeDelUser = useCallback((User) => {
    setDelUser(User);
    setOpenDelete(true);
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
      users,
      setUsers,
      editUserObj: editUser,
      delUserObj: delUser,
      handleChangeEditUser,
      openEdit,
      openAdd,
      openDelete,
      handleCloseAdd,
      handleCloseEdit,
      handleOpenAdd,
      handleOpenEdit,
      handleOpenDelete,
      handleCloseDelete,
      handleAddUser,
      handleEditUser,
      handleChangeDelUser,
      handleDelUser,
    }),
    [
      users,
      editUser,
      delUser,
      handleAddUser,
      handleChangeEditUser,
      handleCloseAdd,
      handleCloseDelete,
      handleCloseEdit,
      handleEditUser,
      handleOpenAdd,
      handleOpenDelete,
      handleOpenEdit,
      handleChangeDelUser,
      handleDelUser,
      openAdd,
      openDelete,
      openEdit,
    ]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserContextProvider;
