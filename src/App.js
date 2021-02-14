import React from "react";
import CouponList from "./Coupons/CouponList";
import Nav from "./components/Nav";
import Validate from "./Validate/Validate";
import CreateCoupon from "./Coupons/CreateCoupon";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/CouponList" component={CouponList} />
        <Route path="/Validate" component={Validate} />
        <Route path="/CreateCoupon" component={CreateCoupon} />
      </div>
    </Router>
  );
}

export default App;
