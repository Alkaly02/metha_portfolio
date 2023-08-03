import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";

const SocialCardPane = styled.div`
  background-color: ${rootstyles.color.primaryhsl};
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 8.269px;
  border-radius: 8px;
`;

const SocialCard = ({ icon, alt }) => {
  return (
    <SocialCardPane>
      <img src={icon} alt={alt} />
    </SocialCardPane>
  );
};

export default SocialCard;
