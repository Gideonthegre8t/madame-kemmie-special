import React, { useEffect } from 'react';
import './index.css';
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
import { Helmet } from 'react-helmet-async'; // Import Helmet

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
      <Helmet>
        <title>Home - Catering Services</title>
        <meta name="description" content="Delicious catering services for all your events. Book now for special offers!" />
        <meta property="og:title" content="Catering Services" />
        <meta property="og:description" content="We offer a wide variety of catering services to meet your needs." />
       
      </Helmet>
      <div>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={
            <>
              <Header /> 
              <Services /> 
              <Specials />
              <Services2 /> 
              <Feedback /> 
              <Footer /> 
            </>
          } />
     
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
