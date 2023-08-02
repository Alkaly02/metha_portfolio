import { Flex, Grid } from "@mantine/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";
import {
  ACCUEIL_PATH,
  CONTACT_PATH,
  CV_PATH,
  TRAVAIL_PATH,
} from "../../routes/navigation/navigationPaths";
import accueilSvg from "../../assets/svgs/accueil.svg";
import travailSvg from "../../assets/svgs/travail.svg";
import contactSvg from "../../assets/svgs/contact.svg";

const NavbarPane = styled.nav`
  background-color: ${rootstyles.color.primaryhsl};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: ${rootstyles.radius.border};
  padding: 5px 20px;
  border: 1px solid #000;
`;
const NavLinkPane = styled(NavLink)`
  width: 80px;
  height: 70px;
  margin: auto;
  paddin: 5px;
  background-color: ${rootstyles.color.navLinkColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${rootstyles.radius.border};
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &.active {
    background: ${rootstyles.color.blackLinear};
    color: #fff;
  }
  &:hover {
    background-color: rgba(50, 60, 255, 0.5);
  }
`;

const links = [
  {
    to: ACCUEIL_PATH,
    svg: accueilSvg,
    label: "Accueil",
  },
  {
    to: CV_PATH,
    svg: accueilSvg,
    label: "Cv",
  },
  {
    to: TRAVAIL_PATH,
    svg: travailSvg,
    label: "Travail",
  },
  {
    to: CONTACT_PATH,
    svg: contactSvg,
    label: "Contact",
  },
];

const NavLinkSpanPane = styled.span`
  font-size: 14px;
`;

const Navbar = () => {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="flex-end"
      align="flex-center"
      direction="row"
      wrap="wrap"
    >
      <NavbarPane>
        <Grid justify="space-evenly">
          {links.map(({ to, svg, label }) => (
            <Grid.Col span={3}>
              <NavLinkPane to={to}>
                <img src={svg} alt={label} />
                <NavLinkSpanPane>{label}</NavLinkSpanPane>
              </NavLinkPane>
            </Grid.Col>
          ))}
        </Grid>
      </NavbarPane>
    </Flex>
  );
};

export default Navbar;
