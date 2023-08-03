import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";

const ProfilInfoPane = styled.div`
  background-color: ${rootstyles.color.primary};
  min-height: 200px;
  border-radius: ${rootstyles.radius.border};
  margin-top: 20px;
`;

const ProfilInfo = ({ children }) => {
  return <ProfilInfoPane>{children}</ProfilInfoPane>;
};

export default ProfilInfo;
