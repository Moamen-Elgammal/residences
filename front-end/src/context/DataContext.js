import React from 'react';

const DataContext = React.createContext({
  name: '',
  mobileNumber: '',
  email: '',
  setName: () => {},
  setMobileNumber: () => {},
  setEmail: () => {},
});

export default DataContext;
