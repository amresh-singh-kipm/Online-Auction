import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Heros from "../../pages/Heros";
import Signin from "../../pages/Signin";
import SignUp from "../../pages/SignUp";
import NavbarComp from "../Navbar/NavbarComp";
import ProductList from "../../pages/ProductList";
import MyAccount from "../../pages/MyAccount";
import WinningList from "../../pages/WinningList";
import SellForm from "../../pages/SellForm";
import ContactUs from "../../pages/ContactUs";
import About from "../../pages/About";
import Footer from "../Footer/Footer";
function PublicRouter() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        {/* <Route path="*" element={<Heros />} /> */}
        <Route path="/" element={<Heros />} />
        {/* <Route path="/signin" element={<Signin />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default PublicRouter;
