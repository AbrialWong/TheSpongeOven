import React from 'react';
import "./../../nav-styles.scss"; // import stylesheet into the project

const Cart = props => {
    return(
    <div>
       <button className="btn btn-secondary cart nav-link" type="button">
          <i className="fa fa-shopping-cart"></i>
        </button> 
      </div>
    );
}; // function components

export default Cart;
