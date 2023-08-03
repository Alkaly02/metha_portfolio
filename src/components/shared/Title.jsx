import { Flex } from "@mantine/core";
import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";

const TitlePane = styled.h1`
  font-size: ${rootstyles.fontSize.lg}px;
  font-weight: ${rootstyles.fontWeight.sm};
  margin: 0;
`;
const LinePane = styled.div`
  width: 252px;
  height: 2px;
  background: ${({ lineBg }) => lineBg};
`;

const Title = ({ text, lineBg }) => {
  return (
    <Flex align="center" gap={20}>
      <TitlePane>{text}</TitlePane>
      <LinePane lineBg={lineBg}></LinePane>
    </Flex>
  );
};

export default Title;
