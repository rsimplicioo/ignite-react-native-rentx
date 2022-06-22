import React, { ReactNode } from 'react';

import { ShoppingCartProvider } from './shoppingCart';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return(
    <ShoppingCartProvider>
      {children}
    </ShoppingCartProvider>
  )
}

export { AppProvider };