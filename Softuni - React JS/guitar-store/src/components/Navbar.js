import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
background-color: #333;
display: flex; 
justify-content: center; 
align-items: center; 
position: relative;
width: 100%;
height: 8vh;

`
const Ul = styled.ul`
 list-style-type: none;
    margin: 0; 
    padding: 0; 
`

const Li = styled.li `
display: inline-block; 
margin: 0 10px; 
`
const NavItem = styled.div`
    color: #fff; 
    text-decoration: none; 
    font-size: 16px; 
    font-weight: bold; 
    text-transform: uppercase; 
    cursor: pointer;
`

function Navbar() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user ? true : false);
    });
    
    return () => unsubscribe();
  }, []);
  
  const navigate = useNavigate();

  const handleRouteChange = (routeName) => {
    navigate(routeName);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Nav>
      <Ul>
        <Li><NavItem onClick={() => handleRouteChange("/")}>Home</NavItem></Li>
        <Li><NavItem onClick={() => handleRouteChange("/catalog")}>Catalog</NavItem></Li>
        {isLoggedIn ? (
          <>
          <Li><NavItem onClick={() => handleRouteChange("/profile")}>Profile</NavItem></Li>
          <Li><NavItem onClick={() => handleRouteChange("/create")}>Create an offer</NavItem></Li>
          <Li><NavItem onClick={handleLogout}>Logout</NavItem></Li>
        </>
        ) : (
          <>
            <Li><NavItem onClick={() => handleRouteChange("/register")}>Register</NavItem></Li>
            <Li><NavItem onClick={() => handleRouteChange("/login")}>Login</NavItem></Li>
          </>
        )}
      </Ul>
    </Nav>
  );
};

export default Navbar;