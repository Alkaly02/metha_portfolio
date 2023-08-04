import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";
import { Flex } from "@mantine/core";

const CardPane = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  height: 100%;
  padding: ${rootstyles.padding.leftPane}px;
  border-radius: ${rootstyles.radius.border};
`;
const CardTitle = styled.h3`
  font-weight: ${rootstyles.fontWeight.md};
  font-size: ;
  margin: 0;
`;
const CardDescription = styled.p`
  font-size: ${rootstyles.fontSize.mx}px;
  font-weight: ${rootstyles.fontWeight.mx};
  margin: 0;
  margin-top: 5px;
  line-height: 30px;
`;

const Card = ({ title, description, icon, bgColor }) => {
  return (
    <CardPane bgColor={bgColor}>
      <Flex gap={10}>
        <img src={icon} alt={title} />
        <CardTitle>{title}</CardTitle>
      </Flex>
      <CardDescription>{description}</CardDescription>
    </CardPane>
  );
};

export default Card;
