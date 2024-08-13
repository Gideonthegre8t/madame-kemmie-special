import React, { createContext, useContext, useState } from 'react';

// Create a context for managing transaction state
const TransactionContext = createContext();

// Provider component that will wrap the application and provide transaction state
export const TransactionProvider = ({ children }) => {
  // State to track whether there are unprocessed transactions
  const [hasUnprocessedTransaction, setHasUnprocessedTransaction] = useState(false);

  return (
    // Provide the transaction state and the state updater function to all child components
    <TransactionContext.Provider value={{ hasUnprocessedTransaction, setHasUnprocessedTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

// Custom hook to allow easy access to the transaction context in other components
export const useTransaction = () => {
  // Access the transaction context
  const context = useContext(TransactionContext);

  // Ensure the hook is used within a TransactionProvider
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }

  // Return the context value which includes the state and the updater function
  return context;
};
