import React from "react";
import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";
import { Badge, Flex, Grid } from "@mantine/core";
import { TitleDesciption } from "../../styles/sharedStyles";
import CvCard from "../../components/cards/CvCard";
import educationSvg from "../../assets/svgs/educationSvg.svg";
import experienceSvg from "../../assets/svgs/experienceSvg.svg";
import { styled } from "styled-components";
import FadeTransition from "../../components/fadeTransition/FadeTransition";

const TitlePane = styled.h4`
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 46.229px;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
`;

const cv = {
  cv: {
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
  },
  competances: {
    "Compétences Professionnelles": [
      "Angular",
      "Android",
      "SQL",
      "JavaScript",
      "CSS 3",
    ],
    "Compétences non techniques": [
      "Time Management",
      "Mentorship",
      "Impeccable Communication",
      "Flexibility",
      "Research",
      "Writing",
    ],
  },
};

const CvHomePage = () => {
  return (
    <FadeTransition fadeTransition="animate__fadeIn">
      <Title text="Cv" lineBg={rootstyles.color.navbarActive} />
      <Grid gutterXs={40}>
        {Object.entries(cv.cv).map((item) => {
          return (
            <Grid.Col span={6}>
              <Flex align="center" gap={10}>
                <img src={item[1].icon} alt={item[0]} />
                <TitleDesciption>{item[0]}</TitleDesciption>
              </Flex>
              {item[1].data.map(({ annee, title, description }) => {
                return (
                  <FadeTransition fadeTransition="animate__fadeInUp">
                    <CvCard
                      year={annee}
                      title={title}
                      description={description}
                    />
                  </FadeTransition>
                );
              })}
            </Grid.Col>
          );
        })}
      </Grid>

      <Grid>
        {Object.entries(cv.competances).map((competance) => {
          return (
            <Grid.Col span={6}>
              <FadeTransition fadeTransition="animate__fadeInUp">
              <TitlePane>{competance[0]}</TitlePane>
              <Flex wrap="wrap" gap="sm">
                {competance[1].map((tag) => (
                  <Badge p="sm" color="dark" fw="normal" bg="#E1E8EF">
                    {tag}
                  </Badge>
                ))}
              </Flex>
              </FadeTransition>
            </Grid.Col>
          );
        })}
      </Grid>
    </FadeTransition>
  );
};

export default CvHomePage;
