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
          annee: "Avril 2022 - Présent",
          title: "Formation en Design",
          description: "Bakéli School Of Technology",
        },
        {
          annee: "2018-2019",
          title: "Licence 1 en Allemand",
          description: "Université Cheikh Anta Diop de Dakar",
        },
      ],
    },
    Expérience: {
      icon: experienceSvg,
      data: [
        {
          annee: "Février - Mai 2023",
          title: "Stage en tant que Designer à  Red Team",
          description: "Bakéli School Of Technology",
        },
        {
          annee: "Mai - 2023 Présent",
          title: "Alternance en tant que Designer à Red Team",
          description: "Bakéli School Of Technology",
        },
      ],
    },
  },
  competances: {
    "Compétences Professionnelles": [
      "Inkscape",
      "Photoshop",
      "Illustrator",
      "Indesign",
      "Filmora",
      "Figma",
      "Gimp",
      "Canva",
      "Cap Cut",
      "Pixellab",
      "Corel Draw",
      "Adobe XD"
    ],
    "Compétences non techniques": [
      "Gestion du temps",
      "Mentorat",
      "Communication",
      "Flexibility",
      "Recherche",
      "Rédiger des contenus"
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
