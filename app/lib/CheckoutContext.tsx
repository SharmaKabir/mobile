import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

// Define the structure of a shipping address
export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  city: string;
  postalCode: string;
  country: string;
}

// Define what our context will provide
interface CheckoutContextType {
  shippingAddress: ShippingAddress | null;
  saveShippingAddress: (address: ShippingAddress) => void;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined);

export const CheckoutProvider = ({ children }: PropsWithChildren<{}>) => {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);

  const saveShippingAddress = (address: ShippingAddress) => {
    console.log("Saving shipping address:", address);
    setShippingAddress(address);
  };

  return (
    <CheckoutContext.Provider value={{ shippingAddress, saveShippingAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
};

// Custom hook to easily use the checkout context in other components
export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (context === undefined) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
};