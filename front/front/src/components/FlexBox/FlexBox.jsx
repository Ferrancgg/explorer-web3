import React from "react";
import styled from "styled-components";

const StyledFlexBox = styled.div`
width: 100%;
height: 33svh;
background-color:green;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;


// ATENCION cambiar height en  movile

const FlexBox = ({children}) => {
  return <StyledFlexBox>{children}</StyledFlexBox>;
};

export default FlexBox;
