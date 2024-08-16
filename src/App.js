import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import react-helmet for SEO
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Madame Kemmi Catering - Top Catering Service</title>
          <meta name="description" content="Madame Kemmi offers the best catering services for weddings, corporate events, and parties in [Your City]. Enjoy top-tier catering with customized menus." />
          <meta name="keywords" content="catering service, wedding catering, corporate catering, party catering, event catering" />
          <meta name="author" content="Madame Kemmi Catering" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>Madame Kemmi Catering - Home</title>
                <meta name="description" content="Explore the best catering services in [Your City] by Madame Kemmi. We specialize in weddings, parties, and corporate events." />
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
                <title>Your Cart - Madame Kemmi Catering</title>
                <meta name="description" content="Review your selected items and proceed to checkout. Madame Kemmi Catering provides top-tier service for all events." />
              </Helmet>
              <Cart />
            </>
          } />
          <Route path="/booking" element={
            <>
              <Helmet>
                <title>Book a Service - Madame Kemmi Catering</title>
                <meta name="description" content="Book our catering services for your upcoming event. We offer tailored solutions for weddings, parties, and corporate events." />
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
