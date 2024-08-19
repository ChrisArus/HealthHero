// frontend/src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/dashboard">Dashboard</NavLink>
    </NavbarContainer>
  );
}

export default Navbar;


