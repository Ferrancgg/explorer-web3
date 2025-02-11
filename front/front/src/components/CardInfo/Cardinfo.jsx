import React from "react";
import styled from "styled-components";

const StyledCardInfo = styled.div`
  height: 280px;
  width: 200px;
  border: 2px solid red;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const StyledContainerImg = styled.div`
  height: 200px;
  width: 180px;
  background-color:grey;
  border: 2px solid, blue;
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Cardinfo = ({ text, title, img }) => {
  return (
    <StyledCardInfo>
      <h2>{title}</h2>
      <StyledContainerImg>
        <StyledImg src={img} />
      </StyledContainerImg>

      <p>{text}</p>
    </StyledCardInfo>
  );
};

export default Cardinfo;
