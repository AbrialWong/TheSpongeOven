// this is for the layout

// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="home"></span>
        Home
      </a>
      <a href="/about">
        <span role="img" aria-label="about"></span>
        About
        </a>
      <a href="/products">
        <span role="img" aria-label="products"></span>
        Products
        </a>
        <a href="/contact">
        <span role="img" aria-label="contact"></span>
        Contact
        </a>
       
       <div className="connect">
        <span role="img" aria-label="connect"></span>
        Connect
        <span role="img" aria-label="connect"><br/>
        <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
        <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
        </span>
        </div>
        
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;