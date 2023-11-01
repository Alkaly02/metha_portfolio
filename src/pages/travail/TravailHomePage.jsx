import React from "react";
import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";
import { Grid } from "@mantine/core";
import PorfolioCard from "../../components/portfolio/PorfolioCard";
import FadeTransition from "../../components/fadeTransition/FadeTransition";
import styled from "styled-components";

const portfolio = {
  all: [
    {
      img: "../../assets/images/creas/ns-presentation-1.png",
      title: "Affiche",
      description: "NS Prestation",
    },
    {
      img: "../../assets/images/creas/ns-presentation-2.png",
      title: "Affiche",
      description: "NS Prestation",
    },
    {
      img: "../../assets/images/creas/ns-presentation-3.png",
      title: "Affiche",
      description: "NS Prestation / Kovalys Connect",
    },
    {
      img: "../../assets/images/creas/ya-seyda-mbery-affiche-1.png",
      title: "Affiche",
      description: "Ya Seyda Mbery",
    },
    {
      img: "../../assets/images/creas/ya-fatou-restaurant-affiche-1.png",
      title: "Affiche",
      description: "Ya Fatou Restaurant",
    },
    {
      img: "../../assets/images/creas/minane-travel-affiche-1.png",
      title: "Affiche",
      description: "Minane travel",
    },
    {
      img: "../../assets/images/creas/she-codes-affiche-1.png",
      title: "Affiche",
      description: "She Code's",
    },
    {
      img: "../../assets/images/creas/so-elle-affiche-1.png",
      title: "Affiche",
      description: "So'Elle",
    },
    {
      img: "../../assets/images/creas/honorablecon-affiche-1.png",
      title: "Affiche",
      description: "HonorableCon",
    },
    {
      img: "../../assets/images/creas/she-codes-affiche-2.png",
      title: "Affiche",
      description: "She Code's",
    },
    {
      img: "../../assets/images/creas/trophee.png",
      title: "Modelisation",
      description: "Trophée Bakeliste du mois",
    },
    {
      img: "../../assets/images/creas/red-team-affiche-1.png",
      title: "Affiche",
      description: "RED Team",
    },
    {
      img: "../../assets/images/creas/fat-fat-mockup-1.png",
      title: "Mock-up",
      description: "Fot Fat Fat",
    },
    {
      img: "../../assets/images/creas/fat-fat-mockup-2.png",
      title: "Mock-up",
      description: "Fot Fat Fat",
    },
    {
      img: "../../assets/images/creas/bonheure-conjugal-affiche-1.png",
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: "../../assets/images/creas/fat-fat-logo-1.png",
      title: "Logo",
      description: "Fot Fat Fat",
    },
    {
      img: "../../assets/images/creas/ataya-express-affiche-1.png",
      title: "Affiche",
      description: "Ataya express",
    },
    {
      img: "../../assets/images/creas/ataya-express-affiche-2.png",
      title: "Affiche",
      description: "Ataya express",
    },
    {
      img: "../../assets/images/creas/ataya-express-affiche-3.png",
      title: "Affiche",
      description: "Ataya express",
    },
    {
      img: "../../assets/images/creas/ataya-express-affiche-4.png",
      title: "Affiche",
      description: "Ataya express",
    },
    {
      img: "../../assets/images/creas/she-codes-affiche-3.png",
      title: "Affiche",
      description: "She Code's",
    },
    {
      img: "../../assets/images/creas/ket-ket-logo.png",
      title: "Logo",
      description: "Ket Ket",
    },
    {
      img: "../../assets/images/creas/faju-affiche-1.png",
      title: "Affiche",
      description: "Faju",
    },
    {
      img: "../../assets/images/creas/bonheure-conjugal-affiche-2.png",
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: "../../assets/images/creas/le-coran-soigne-affiche-1.png",
      title: "Affiche",
      description: "Le coran Soigne",
    },
    {
      img: "../../assets/images/creas/ket-ket-affiche-1.png",
      title: "Affiche",
      description: "Ket Ket",
    },
    {
      img: "../../assets/images/creas/le-coran-soigne-affiche-2.png",
      title: "Affiche",
      description: "Le coran Soigne",
    },
    {
      img: "../../assets/images/creas/bonheure-conjugal-affiche-3.png",
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: "../../assets/images/creas/bonheure-conjugal-affiche-4.png",
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: "../../assets/images/creas/bonheure-conjugal-affiche-5.png",
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: "../../assets/images/creas/bonheure-conjugal-logo.png",
      title: "Logo",
      description: "Bonheure Conjugal",
    },
    {
      img: "../../assets/images/creas/bonheure-conjugal-affiche-6.png",
      title: "Logo",
      description: "Bonheure Conjugal",
    },
    {
      img: "../../assets/images/creas/lka-dev.png",
      title: "Logo",
      description: "Lka Dev",
    },
    {
      img: "../../assets/images/creas/mbaymi-connect-logo.png",
      title: "Logo",
      description: "Mbay'mi Connect",
    },
    {
      img: "../../assets/images/creas/btp-logo.png",
      title: "Logo",
      description: "Technocons BTP",
    },
    {
      img: "../../assets/images/creas/teranga-chicken.png",
      title: "Logo",
      description: "Teranga Chicken",
    },
    {
      img: "../../assets/images/creas/teranga-chicken-affiche-1.png",
      title: "Affiche",
      description: "Teranga Chicken",
    },
    {
      img: "../../assets/images/creas/univ-logo.png",
      title: "Logo",
      description: "Univ",
    },
    {
      img: "../../assets/images/creas/tayeur-logo.png",
      title: "Logo",
      description: "Tayeur Gestion",
    },
    {
      img: "../../assets/images/creas/elikia-affiche-1.png",
      title: "Affiche",
      description: "Elikia Ventur",
    },
    {
      img: "../../assets/images/creas/elikia-affiche-2.png",
      title: "Affiche",
      description: "Elikia Ventur",
    },
    {
      img: "../../assets/images/creas/elikia-affiche-3.png",
      title: "Affiche",
      description: "Elikia Ventur",
    },
    {
      img: "../../assets/images/creas/fewnu-illustration.png",
      title: "Illustration",
      description: "Fewnu",
    },
    {
      img: "../../assets/images/creas/fewnu-affiche-1.png",
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: "../../assets/images/creas/fewnu-affiche-2.png",
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: "../../assets/images/creas/fewnu-affiche-3.png",
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: "../../assets/images/creas/fewnu-affiche-4.png",
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: "../../assets/images/creas/fewnu-affiche-5.png",
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: "../../assets/images/creas/komyu-affiche-1.png",
      title: "Affiche",
      description: "NS Prestation / Komyu Plus",
    },
    {
      img: "../../assets/images/creas/komyu-mentorat.png",
      title: "Mantorat",
      description: "Komyu Plus",
    },
    {
      img: "../../assets/images/creas/komyu-affiche-2.png",
      title: "Affiche",
      description: "Komyu Plus",
    },
    {
      img: "../../assets/images/creas/komyu-affiche-3.png",
      title: "Affiche",
      description: "Komyu Plus",
    },
    {
      img: "../../assets/images/creas/komyu-affiche-4.png",
      title: "Affiche",
      description: "Komyu Plus",
    },
    {
      img: "../../assets/images/creas/khaire-travel-affiche-1.png",
      title: "Affiche",
      description: "Khaira Travel",
    },
    {
      img: "../../assets/images/creas/khaire-travel-logo.png",
      title: "Logo",
      description: "Khaira Travel",
    },
    {
      img: "../../assets/images/creas/red-team-affichee-1.png",
      title: "Affiche",
      description: "Bakeli / RED Team",
    },
  ],
};

const ImageContainer = styled.div`
  height: 93vh;
  overflow: auto;
  padding: 15px;

  &::-webkit-scrollbar {
  width: 5px;
}

&::-webkit-scrollbar-track {
  background: #F6F9FB;
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
  background: #FF9C1A;
  border-radius: 10px;
  border: 2px solid #FF9C1A;
}
`

const TravailHomePage = () => {
  return (
    <FadeTransition fadeTransition="animate__fadeIn">
      <Title text="Portfolio" lineBg={rootstyles.color.navbarActive} />

      {
        `+ de ${portfolio.all.length} realisations`
      }
      <ImageContainer>
      <Grid>
        {portfolio.all.map((work) => (
          <Grid.Col span={6}>
            <FadeTransition fadeTransition="animate__fadeInUp">
            <PorfolioCard title={work.title} description={work.description} />
            </FadeTransition>
          </Grid.Col>
        ))}
      </Grid>
      </ImageContainer>
    </FadeTransition>
  );
};

export default TravailHomePage;
