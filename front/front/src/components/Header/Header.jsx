import React from 'react'
import styled from 'styled-components'
import Nav from '../Nav/Nav'


const StyledHeader=styled.header`
border:2px solid red;
height:7svh;
width:100%;`


const Header = () => {
  return (
    <StyledHeader>
      <Nav/>

    </StyledHeader>
  )
}

export default Header