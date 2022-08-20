import React, { useState } from "react";
import {Link} from "react-router-dom";

// stylesheets
import "./../../components/Header/Navbar/nav-styles.scss";

// imports for React-Bootstrap
import {Nav} from "react-bootstrap";

// Imports for rightNav
import {Search, Account, Cart} from './Navbar/right-Navbar/index';
//imports for leftNav
import { Burger, Menu } from "./Navbar/left-Navbar/index";
//imports for sliders
import ProductSliders from "./../Slider/slider"; 

export const Header = ()  => {
  const [open, setOpen] = useState(false);
  return (
    //original code
    <div>
      <Nav className="navbar fixed-top">
        <Nav.Item>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </Nav.Item>

        <Nav className="justify-content-end">
          <Nav.Item>
            <Search />
          </Nav.Item>

          <Nav.Item className="dropdown">
            <Account />
          </Nav.Item>

          <Nav.Item>
            <Cart />
          </Nav.Item>
        </Nav>
      </Nav>

      <Link to="/">
      <img src={require('./../../asserts/logo.jpg').default} alt="logo" className="logo" />
      </Link>
      
      <ProductSliders />
      {/* <Home /> */}
      
    </div>
    // <>
    // header here
    // </>
  );
}; // function components


