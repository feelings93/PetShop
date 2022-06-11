import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import useHttp from '../hooks/use-http';
import { getProfile } from '../lib/api/auth';
export const AuthContext = React.createContext({
  user: null,
  setUser: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const { data, status, sendRequest } = useHttp(getProfile, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  useEffect(() => {
    if (status === 'completed') {
      if (data) {
        setUser(data);
      }
    }
  }, [data, status, setUser]);
  console.log('Vo user');
  console.log(user);
  const contextValue = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
AuthContextProvider.propTypes = {
  children: PropTypes.element,
};
export default AuthContextProvider;
