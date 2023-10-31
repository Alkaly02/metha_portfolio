import React from "react";
import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";
import { Grid } from "@mantine/core";
import PorfolioCard from "../../components/portfolio/PorfolioCard";
import FadeTransition from "../../components/fadeTransition/FadeTransition";

const portfolio = {
  all: [
    {
      title: "Affiche",
      description: "NS Prestation",
    },
    {
      title: "Affiche",
      description: "NS Prestation",
    },
    {
      title: "Affiche",
      description: "NS Prestation",
    },
    {
      title: "Affiche",
      description: "NS Prestation",
    },
    {
      title: "Affiche",
      description: "NS Prestation",
    },
  ],
};

const TravailHomePage = () => {
  return (
    <FadeTransition fadeTransition="animate__fadeIn">
      <Title text="Portfolio" lineBg={rootstyles.color.navbarActive} />

      <Grid>
        {portfolio.all.map((work) => (
          <Grid.Col span={6}>
            <FadeTransition fadeTransition="animate__fadeInUp">
            <PorfolioCard title={work.title} description={work.description} />
            </FadeTransition>
          </Grid.Col>
        ))}
      </Grid>
    </FadeTransition>
  );
};

export default TravailHomePage;
