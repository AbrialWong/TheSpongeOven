// this will contain the styles

import React from "react";
import styled from 'styled-components';

// This is the common stylesheet library
import "./../../../../../libraries/_library.scss";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #9E9D89;
  opacity: 80%;
  height: 100vh;  
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  position:fixed;

  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a  {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    
    &:hover {
      color: black;
    }
  }
  .connect{
      font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    padding-top:200px;
    i{
      font-size:1.3rem;
      letter-spacing: 1rem;
    }
    }
  
`;