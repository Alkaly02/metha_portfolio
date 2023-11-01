import { Image } from "@mantine/core";
import React from "react";
import methaLogo from "../../assets/images/metha-logo-2.png";
import { styled } from "styled-components";

const HeaderPane = styled.header`
  padding: 20px 0;
  position: sticky;
  top: 0;
`;

const Header = () => {
  return (
    <HeaderPane>
      <Image maw={240} radius="md" src={methaLogo} alt="Random image" />
    </HeaderPane>
  );
};

export default Header;
