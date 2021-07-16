import React from 'react';
import { NavLink } from 'react-router-dom';
const link = {
  width: '100px',
  padding: '12px',
  margin: '1em',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
const Navbar = (props) =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/doctors"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Doctors</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
    <NavLink
      to="/signon"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signon</NavLink>
  </div>;
  export default Navbar;