import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import Specials from './components/Specials';
import Services2 from './components/Services2';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Cart from './components/Cart';
import { useTransaction } from './components/TransactionContext';

// Main Application Component
function App() {
  // Destructure hasUnprocessedTransaction from useTransaction hook
  const { hasUnprocessedTransaction } = useTransaction();

  // useEffect hook to update a global variable when hasUnprocessedTransaction changes
  useEffect(() => {
    console.log('Updating globalHasUnprocessedTransaction:', hasUnprocessedTransaction);
    window.globalHasUnprocessedTransaction = hasUnprocessedTransaction;
  }, [hasUnprocessedTransaction]); // Dependency array ensures effect runs when hasUnprocessedTransaction changes

  return (
    <Router> {/* Router component to handle client-side routing */}
      <div>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={
            <>
              <Header /> {/* Header component */}
              <Services /> {/* Services component */}
              <Specials /> {/* Specials component */}
              <Services2 /> {/* Additional services component */}
              <Feedback /> {/* Feedback component */}
              <Footer /> {/* Footer component */}
            </>
          } />
          {/* Route for the cart page */}
          <Route path="/cart" element={<Cart />} />
          {/* Route for the booking page */}
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
