import CartButton from '../Cart/CartButton';
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from 'react-redux';

export default function MainHeader() {
  const categories = useSelector(state => state.products.productsCategory);
  const isAuth = useSelector(state => state.login.username)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Link to="/">Books Shop</Link>
      </Nav>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {categories && categories.map(category => (
          <Nav className="mr-auto">
            <Link to={`/category/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
          </Nav>
        ))}
        
        {!isAuth && <Nav className="mr-auto">
          <Link to="/login">Login</Link>
        </Nav>}
        {isAuth && 
          <>
            <Nav className="mr-auto">
              <Link to="/add-product">Add Product</Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/logout">Logout</Link>
            </Nav>
          </>
        }
        <Nav>
          <CartButton />
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
}
