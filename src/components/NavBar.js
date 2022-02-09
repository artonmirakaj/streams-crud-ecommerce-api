import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavBar = () => {
  // const location = useLocation();
  return (
    <StyledNav>
      <h1><Link to='/'>Home</Link></h1>
      <ul>
        <li>
          <Link to='/events/create'>Create</Link>
        </li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </StyledNav>
  )
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #fabaaf;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #23d997;
    }
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
`

export default NavBar;
