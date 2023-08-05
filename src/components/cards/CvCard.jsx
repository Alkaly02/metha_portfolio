import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";

const CardPane = styled.div`
  background-color: ${rootstyles.color.cardBg};
  height: 120px;
  padding: ${rootstyles.padding.leftPane}px;
  border-radius: ${rootstyles.radius.border};
  margin: 10px 0;
`;
const CardYearPane = styled.span`
  color: rgba(26, 16, 3, 0.5);
  font-family: Raleway;
  font-size: 13.869px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CardTitlePane = styled.p`
  color: #000;
  font-family: Raleway;
  font-size: 13.869px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const CardDescription = styled.p`
  color: #000;
  font-family: Raleway;
  font-size: 13.869px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CvCard = ({ year, title, description }) => {
  return (
    <CardPane>
      <CardYearPane>{year}</CardYearPane>
      <CardTitlePane>{title}</CardTitlePane>
      <CardDescription>{description}</CardDescription>
    </CardPane>
  );
};

export default CvCard;
