import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyAccount from "../pages/MyAccount";
// import Signin from "../pages/Signin";
// import SignUp from "../pages/SignUp";
import ProductList from "../pages/ProductList";
import WinningList from "../pages/WinningList";
import SellForm from "../pages/SellForm";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Heros from "../pages/Heros";
import NavbarComp from "../Navbar/NavbarComp";
import SellerPage from "../pages/SellerPage";
function PrivateRouter() {
  return (
    <Router>
        <NavbarComp/>
      <Routes>
      <Route path="/" element={<Heros />} />
        {/* <Route path="/signin" element={<Signin />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/buy" element={<ProductList />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/winninglist" element={<WinningList />} />
        <Route path="/sell" element={<SellForm />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About/>}/>
        <Route path="seller" element={<SellerPage/>}/>
        </Routes>
    </Router>
  );
}

export default PrivateRouter;
