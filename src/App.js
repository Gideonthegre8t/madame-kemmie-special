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
