import React, { useState } from "react";
import {Link} from "react-router-dom";


// stylesheets
import "./../../components/Header/Navbar/nav-styles.scss";

// // External import files
// import "@components/libraries/external/import-libraries.js";

// // Internal import files
// import "@components/libraries/internal/import-libraries.js";

/*------- Import for external libraries ---------- */
// imports for React-Bootstrap
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
/*------- Import for external libraries ---------- */

/*------- Import for internal libraries ---------- */

// import for images
import logo from "./../../asserts/logo.jpg";
import carrot from "./../../asserts/carrot.jpg";

// imports for rightNav links (search, account, cart)
import Search from "./../../components/Header/Navbar/right-Navbar/Search/search";
import Account from "./../../components/Header/Navbar/right-Navbar/Account/account";
import Cart from "./../../components/Header/Navbar/right-Navbar/ShoppingCart/cart";

//imports for leftNav
import { Burger, Menu } from "./Navbar/left-Navbar/index";

//imports for sliders
import ProductSliders from "./../Slider/slider";

//import for Pages
import Home from "../../pages/Homepage/homepage.js";

// /*------- Import for internal libraries ---------- */

const Header = (props) => {
  const [open, setOpen] = useState(false);
  return (
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
      <img src={logo} alt="logo" className="logo" />
      </Link>
      
      <ProductSliders />
      {/* <Home /> */}
      
    </div>
  );
}; // function components

export default Header;
