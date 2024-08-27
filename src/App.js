import React, { useEffect, lazy, Suspense } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { useTransaction } from './components/TransactionContext'; // Ensure this path is correct


// Dynamically import the Header component
const Header = lazy(() => import('./components/Header'));
const Services = lazy(() => import('./components/Services'));
const Specials = lazy(() => import('./components/Specials'));
const Services2 = lazy(() => import('./components/Services2'));
const Feedback = lazy(() => import('./components/Feedback'));
const Footer = lazy(() => import('./components/Footer'));
const Booking = lazy(() => import('./components/Booking'));
const Cart = lazy(() => import('./components/Cart'));

const App = () => {
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
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
