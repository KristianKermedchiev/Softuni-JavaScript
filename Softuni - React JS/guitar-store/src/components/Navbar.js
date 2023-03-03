import React from 'react';
import '../styles/Navbar.css';
import styled from 'styled-components';

const Nav = styled.nav`
background-color: #333; /* set the background color of the nav bar */
display: flex; /* use flexbox to center the list items */
justify-content: center; /* center the list items horizontally */
align-items: center; /* center the list items vertically */
position: relative;
width: 100%;
height: 8vh;

`
const Ul = styled.ul`
 list-style-type: none; /* remove the bullet points from the list */
    margin: 0; /* remove any default margin */
    padding: 0; /* remove any default padding */
`

const Li = styled.li `
display: inline-block; /* display the list items in A row */
margin: 0 10px; /* add some space between the list items */
`
const A = styled.a`
    color: #fff; /* set the color of the links */
    text-decoration: none; /* remove the underline from the links */
    font-size: 16px; /* set the font size of the links */
    font-weight: bold; /* set the font weight of the links */
    text-transform: uppercase; /* capitalize the links */
`

function Navbar() {
  return (
    <Nav>
      <Ul>
        <Li><A href="/">Home</A></Li>
        <Li><A href="/catalog">Catalog</A></Li>
        <Li><A href="/register">Register</A></Li>
        <Li><A href="/login">Login</A></Li>
      </Ul>
    </Nav>
    
  );
}

export default Navbar;