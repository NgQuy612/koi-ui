import React from 'react';
import { UserProvider } from './UserProvider';
import { OrderProvider } from './OrderProvider';

function AppProvider({ children }) {
  return (
    <UserProvider>
      <OrderProvider>
        {children}
      </OrderProvider>
    </UserProvider>
  );
}

export default AppProvider;
