import React from 'react'
import styled from 'styled-components'
const StyledPrincipalContainer=styled.div`
width:45%;
background-color:yellow;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
border:2px solid red ;
border-radius:15px;

`
const PrincipalContainer = () => {
  return (
    <StyledPrincipalContainer>PrincipalContainer</StyledPrincipalContainer>
  )
}

export default PrincipalContainer