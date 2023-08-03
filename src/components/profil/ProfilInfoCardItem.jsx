import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";
import { Divider, Flex } from "@mantine/core";

const DivPane = styled.div`
  padding: 0 ${rootstyles.padding.leftPane}px 10px;
`;
const LabelPane = styled.span`
  color: ${rootstyles.color.hslmeuve};
  font-size: ${rootstyles.fontSize.mx};
  font-family: ${rootstyles.fontFamily.raleway};
`;
const ContentPane = styled.p`
  font-size: ${rootstyles.fontSize.mx};
  font-weight: ${rootstyles.fontWeight.md};
  margin: 0;
  font-family: ${rootstyles.fontFamily.raleway};
`;

const ProfilInfoCardItem = ({ label, content, icon, alt }) => {
  return (
    <DivPane>
      <Flex align="center" gap="md" py="sm">
        <img src={icon} alt={alt} />
        <div>
          <LabelPane>{label}</LabelPane>
          <ContentPane>{content}</ContentPane>
        </div>
      </Flex>
      <Divider />
    </DivPane>
  );
};

export default ProfilInfoCardItem;
