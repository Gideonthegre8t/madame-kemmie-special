import React from 'react';
import { useTransaction } from '../components/TransactionContext'; // Adjust the path if needed

function BeforeUnloadHandler() {
  const { hasUnprocessedTransaction } = useTransaction();

  React.useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (hasUnprocessedTransaction) {
        event.preventDefault();
        event.returnValue = "You have unprocessed transactions. Are you sure you want to leave?";
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasUnprocessedTransaction]);

  return null;
}

export default BeforeUnloadHandler;
