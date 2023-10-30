import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";

const SocialCardPane = styled.a`
  background-color: ${rootstyles.color.primaryhsl};
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 8.269px;
  border-radius: 8px;
  cursor: pointer;
  transition: all ease-in-out 200ms;

  &:hover *{
    transform: scale(1.2);
    transform: rotate(-40deg)
  }
`;
const ImgCard = styled.img`
  transition: all ease-in-out 200ms;
    &:hover{
    transform: scale(1.2);
  }
`

const SocialCard = ({ icon, alt, href }) => {
  return (
    <SocialCardPane href={href} target="_blank">
      <ImgCard src={icon} alt={alt} />
    </SocialCardPane>
  );
};

export default SocialCard;
