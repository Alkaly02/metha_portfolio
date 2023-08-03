import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../../styles/rootstyles";
import { Button, Flex, Grid } from "@mantine/core";
import methaProfil from "../../assets/images/methaProfil.png";
import SocialCard from "./SocialCard";
import ProfilInfo from "./ProfilInfo";
import ProfilInfoCardItem from "./ProfilInfoCardItem";

import facebookSvg from "../../assets/svgs/facebook.svg";
import linkedInSvg from "../../assets/svgs/linkedin.svg";
import twitterSvg from "../../assets/svgs/twitter.svg";
import instaSvg from "../../assets/svgs/instagram.svg";

import phoneSvg from "../../assets/svgs/phone.svg";
import emailSvg from "../../assets/svgs/mail.svg";
import locationSvg from "../../assets/svgs/location.svg";

const ImageContainerPane = styled.div`
  width: 200px;
  height: 200px;
  margin-top: -100px;
  //   background-color: rgba(10, 15, 25, 0.5);
`;
const NamePane = styled.p`
  font-size: ${rootstyles.fontSize.md}px;
  font-weight: ${rootstyles.fontWeight.lg};
  margin: 15px 10px 0;
`;
const ProfilDescPane = styled.span`
  color: rgba(11, 9, 9, 0.5);
  font-size: ${rootstyles.fontSize.sm};
`;

const Profil = () => {
  return (
    <>
      <Flex justify="center" direction="column" align="center">
        <ImageContainerPane>
          <img src={methaProfil} alt="Je suis Mouhamet Badiane" />
        </ImageContainerPane>
        <NamePane>Mouhamet Badiane</NamePane>
        <ProfilDescPane>Graphic, UX/UI Designer, Video editer </ProfilDescPane>

        <Grid mt="sm">
          <Grid.Col span={3}>
            <SocialCard icon={facebookSvg} alt="Facebook" />
          </Grid.Col>
          <Grid.Col span={3}>
            <SocialCard icon={linkedInSvg} alt="LinkedIn" />
          </Grid.Col>
          <Grid.Col span={3}>
            <SocialCard icon={twitterSvg} alt="Twitter" />
          </Grid.Col>
          <Grid.Col span={3}>
            <SocialCard icon={instaSvg} alt="Instagram" />
          </Grid.Col>
        </Grid>
      </Flex>

      <ProfilInfo>
        <ProfilInfoCardItem
          icon={phoneSvg}
          alt="Call me here"
          label="Téléphone "
          content="+221 77 114 29 84"
        />
        <ProfilInfoCardItem
          icon={emailSvg}
          alt="Send me a mail here"
          label="Email "
          content="mouhametbadiane78@gmail.com"
        />
        <ProfilInfoCardItem
          icon={locationSvg}
          alt="Find my location here"
          label="Localisation"
          content="Dakar / Sénégal "
        />

        <Flex justify="center" my="sm" pb="lg">
          <Button
            // radius="lg"
            sx={{
              background: "linear-gradient(127deg, #153942 0%, #061D26 100%)",
              height: "40px",
              borderRadius: "20px",
            }}
          >
            TÉLÉCHARGER LE CV{" "}
          </Button>
        </Flex>
      </ProfilInfo>
    </>
  );
};

export default Profil;
