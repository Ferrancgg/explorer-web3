import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav=styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
 

`
const StyledNavLink=styled(NavLink)`

color: #c82e2e;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }

`


const Nav = () => {
  return (
    <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/explorer">Explorer</StyledNavLink>

    </StyledNav>
  )
}

export default Nav