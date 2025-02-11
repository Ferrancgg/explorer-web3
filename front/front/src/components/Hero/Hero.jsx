import React from 'react'
import styled from 'styled-components'
import FlexBox from '../FlexBox/FlexBox'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const StyledHero=styled.div`
width: 100%;
height:60%;
border:3px solid red;
border-radius:15px;
display: flex;
align-items:center;
justify-content: center;
`
const StyledH1=styled.h1`
size: 32px;

`
const StyledH3=styled.h3`
size: 20px;
`

export const Hero = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/explorer")
  }
  return (
    <StyledHero>
      <FlexBox>
                <StyledH1>Soy el explorador de ethereum</StyledH1>
        <StyledH3>el lugar donde chafardear todo el universo ethereum</StyledH3>
        <Button onClick={handleClick} label="vamos"/>
      </FlexBox>
      <FlexBox>
        <p>sera imagen</p>
        
      </FlexBox>

        
    </StyledHero>
  )
}
