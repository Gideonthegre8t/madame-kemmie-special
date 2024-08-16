import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import react-helmet
import Header from './components/Header';
import Services from './components/Services';
import Specials from './components/Specials';
import Services2 from './components/Services2';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Cart from './components/Cart';
import { useTransaction } from './components/TransactionContext';

function App() {
  const { hasUnprocessedTransaction } = useTransaction();

  useEffect(() => {
    console.log('Updating globalHasUnprocessedTransaction:', hasUnprocessedTransaction);
    window.globalHasUnprocessedTransaction = hasUnprocessedTransaction;
  }, [hasUnprocessedTransaction]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>Welcome to Madame Kemi Special</title>
                <meta name="description" content="Offering top-tier catering services for weddings, corporate events, and parties." />
                <meta name="keywords" content="catering, food, events, wedding, corporate, party" />
              </Helmet>
              <Header />
              <Services />
              <Specials />
              <Services2 />
              <Feedback />
              <Footer />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Helmet>
                <title>Your Cart - Madame Kemi Special</title>
                <meta name="description" content="Review your selected items and proceed to checkout." />
              </Helmet>
              <Cart />
            </>
          } />
          <Route path="/booking" element={
            <>
              <Helmet>
                <title>Book a Service - Madame Kemi Special</title>
                <meta name="description" content="Book our services for your next event. We're here to make your day special." />
              </Helmet>
              <Booking />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
