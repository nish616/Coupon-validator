import React from "react";
import CouponList from "./Coupons/CouponList";
import Nav from "./components/Nav";
import Checkout from "./Checkout/Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/CouponList" component={CouponList} />
        <Route path="/Checkout" component={Checkout} />
      </div>
    </Router>
  );
}

export default App;
