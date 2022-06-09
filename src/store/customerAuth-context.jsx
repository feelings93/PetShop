import React from 'react';
import PropTypes from 'prop-types';

export const CustomerAuthContext = React.createContext({
  customer: null,
  setCustomer: () => {},
});

const CustomerAuthContextProvider = ({ children }) => {
  const [customer, setCustomer] = React.useState(null);

  const contextValue = {
    customer,
    setCustomer,
  };
  return (
    <CustomerAuthContext.Provider value={contextValue}>{children}</CustomerAuthContext.Provider>
  );
};
CustomerAuthContextProvider.propTypes = {
  children: PropTypes.element,
};
export default CustomerAuthContextProvider;