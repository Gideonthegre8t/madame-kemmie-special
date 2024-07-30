import React from "react";
import Header from "../src/components/Header";
import Services from "./components/Services";
import Specials from "./components/Specials";
import Services2 from "./components/Services2";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
// import Booking from "./components/Booking";
// import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Header />
      <Services />
       <Specials />
       <Services2 />
       <Feedback />
       <Footer />

      {/*
   


  
    <Booking />

      */}
    
      {/* <Cart /> */}
    </div>
  );
}

export default App;
