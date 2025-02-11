import React from 'react'
import styled from 'styled-components'

const StyledMain=styled.main`
width: 100%;
height: 84svh;
border: 2px solid blue;
` 
const Main = ({children}) => {
  return (
    <StyledMain>{children}</StyledMain>
  )
}

export default Main