import React from "react";
import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";
import { Grid } from "@mantine/core";
import PorfolioCard from "../../components/portfolio/PorfolioCard";

const portfolio = {
  all: [
    {
      title: "Développement d'applications",
      description: "Smart Bank App",
    },
    {
      title: "Blog",
      description: "NEXT.js",
    },
    {
      title: "UI/UX",
      description: "Rental",
    },
    {
      title: "Mentorat",
      description: "Tech Mentor",
    },
    {
      title: "Développement web",
      description: "IdeaFlow",
    },
  ],
};

const TravailHomePage = () => {
  return (
    <div>
      <Title text="Portfolio" lineBg={rootstyles.color.navbarActive} />

      <Grid>
        {portfolio.all.map((work) => (
          <Grid.Col span={6}>
            <PorfolioCard title={work.title} description={work.description} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default TravailHomePage;
