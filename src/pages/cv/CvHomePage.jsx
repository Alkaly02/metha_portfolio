import React from "react";
import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";
import { Flex, Grid } from "@mantine/core";
import { TitleDesciption } from "../../styles/sharedStyles";
import CvCard from "../../components/cards/CvCard";
import educationSvg from "../../assets/svgs/educationSvg.svg";
import experienceSvg from "../../assets/svgs/experienceSvg.svg";

const cv = {
  Éducation: {
    icon: educationSvg,
    data: [
      {
        annee: "2020-2021",
        title: "Développement de logiciels",
        description: "École de Moringa",
      },
      {
        annee: "2012-2016",
        title: "La gestion des catastrophes",
        description: "Université Masinde Muliro",
      },
    ],
  },
  Expérience: {
    icon: experienceSvg,
    data: [
      {
        annee: "2022 - Présent",
        title: "Mentor technique",
        description: "École de Moringa",
      },
      {
        annee: "2021-2022",
        title: "Développement de site Web",
        description: "Village 2 Nation",
      },
    ],
  },
};

const CvHomePage = () => {
  return (
    <>
      <Title text="Cv" lineBg={rootstyles.color.navbarActive} />
      <Grid style={{ marginTop: 10 }} gutterXs={40}>
        {Object.entries(cv).map((item) => {
          return (
            <Grid.Col span={6}>
              <Flex align="center" gap={10}>
                <img src={item[1].icon} alt={item[0]} />
                <TitleDesciption>{item[0]}</TitleDesciption>
              </Flex>
              {item[1].data.map(({ annee, title, description }) => {
                return (
                  <CvCard
                    year={annee}
                    title={title}
                    description={description}
                  />
                );
              })}
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};

export default CvHomePage;
