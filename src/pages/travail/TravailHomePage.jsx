import React from "react";
import { Flex, Grid } from "@mantine/core";
import styled from "styled-components";

import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";
import PorfolioCard from "../../components/portfolio/PorfolioCard";
import FadeTransition from "../../components/fadeTransition/FadeTransition";

import nsPresentation1 from "../../assets/images/creas/ns-presentation-1.png"
import nsPresentation2 from "../../assets/images/creas/ns-presentation-2.png"
import nsPresentation3 from "../../assets/images/creas/ns-presentation-3.png"
import img1 from "../../assets/images/creas/ya-seyda-mbery-affiche-1.png"
import img2 from "../../assets/images/creas/ya-fatou-restaurant-affiche-1.png"
import img3 from "../../assets/images/creas/minane-travel-affiche-1.png"
import img4 from "../../assets/images/creas/she-codes-affiche-1.png"
import img5 from "../../assets/images/creas/so-elle-affiche-1.png"
import img6 from "../../assets/images/creas/honorablecon-affiche-1.png"
import img7 from "../../assets/images/creas/she-codes-affiche-2.png"
import img8 from "../../assets/images/creas/trophee.png"
import img9 from "../../assets/images/creas/red-team-affiche-1.png"
import img10 from "../../assets/images/creas/fat-fat-mockup-1.png"
import img11 from "../../assets/images/creas/fat-fat-mockup-2.png"
import img12 from "../../assets/images/creas/bonheure-conjugal-affiche-1.png"
import img13 from "../../assets/images/creas/fat-fat-logo-1.png"
import img14 from "../../assets/images/creas/ataya-express-affiche-1.png"
import img15 from "../../assets/images/creas/ataya-express-affiche-2.png"
import img16 from "../../assets/images/creas/ataya-express-affiche-3.png"
import img17 from "../../assets/images/creas/ataya-express-affiche-4.png"
import img18 from "../../assets/images/creas/she-codes-affiche-3.png"
import img19 from "../../assets/images/creas/ket-ket-logo.png"
import img20 from "../../assets/images/creas/faju-affiche-1.png"
import img21 from "../../assets/images/creas/bonheure-conjugal-affiche-2.png"
import img22 from "../../assets/images/creas/le-coran-soigne-affiche-1.png"
import img23 from "../../assets/images/creas/ket-ket-affiche-1.png"
import img24 from "../../assets/images/creas/le-coran-soigne-affiche-2.png"
import img25 from "../../assets/images/creas/bonheure-conjugal-affiche-3.png"
import img26 from "../../assets/images/creas/bonheure-conjugal-affiche-4.png"
import img27 from "../../assets/images/creas/bonheure-conjugal-affiche-5.png"
import img28 from "../../assets/images/creas/bonheure-conjugal-logo.png"
import img29 from "../../assets/images/creas/bonheure-conjugal-affiche-6.png"
import img30 from "../../assets/images/creas/lka-dev.png"
import img31 from "../../assets/images/creas/mbaymi-connect-logo.png"
import img32 from "../../assets/images/creas/btp-logo.png"
import img33 from "../../assets/images/creas/teranga-chicken.png"
import img34 from "../../assets/images/creas/teranga-chicken-affiche-1.png"
import img35 from "../../assets/images/creas/univ-logo.png"
import img36 from "../../assets/images/creas/tayeur-logo.png"
import img37 from "../../assets/images/creas/elikia-affiche-1.png"
import img38 from "../../assets/images/creas/elikia-affiche-2.png"
import img39 from "../../assets/images/creas/elikia-affiche-3.png"
import img40 from "../../assets/images/creas/fewnu-illustration.png"
import img41 from "../../assets/images/creas/fewnu-affiche-1.png"
import img42 from "../../assets/images/creas/fewnu-affiche-2.png"
import img43 from "../../assets/images/creas/fewnu-affiche-3.png"
import img44 from "../../assets/images/creas/fewnu-affiche-4.png"
import img45 from "../../assets/images/creas/fewnu-affiche-5.png"
import img46 from "../../assets/images/creas/komyu-affiche-1.png"
import img47 from "../../assets/images/creas/komyu-mentorat.png"
import img48 from "../../assets/images/creas/komyu-affiche-2.png"
import img49 from "../../assets/images/creas/komyu-affiche-3.png"
import img50 from "../../assets/images/creas/komyu-affiche-4.png"
import img51 from "../../assets/images/creas/khaire-travel-affiche-1.png"
import img52 from "../../assets/images/creas/khaire-travel-logo.png"
import img53 from "../../assets/images/creas/red-team-affichee-1.png"
import { Link, Outlet } from "react-router-dom";

const portfolio = {
  all: [
    {
      img: nsPresentation1,
      title: "Affiche",
      description: "NS Prestation",
    },
    {
      img: nsPresentation2,
      title: "Affiche",
      description: "NS Prestation",
    },
    {
      img: nsPresentation3,
      title: "Affiche",
      description: "NS Prestation / Kovalys Connect",
    },
    {
      img: img1,
      title: "Affiche",
      description: "Ya Seyda Mbery",
    },
    {
      img: img2,
      title: "Affiche",
      description: "Ya Fatou Restaurant",
    },
    {
      img: img3,
      title: "Affiche",
      description: "Minane travel",
    },
    {
      img: img4,
      title: "Affiche",
      description: "She Code's",
    },
    {
      img: img5,
      title: "Affiche",
      description: "So'Elle",
    },
    {
      img: img6,
      title: "Affiche",
      description: "HonorableCon",
    },
    {
      img: img7,
      title: "Affiche",
      description: "She Code's",
    },
    {
      img: img8,
      title: "Modelisation",
      description: "Trophée Bakeliste du mois",
    },
    {
      img: img9,
      title: "Affiche",
      description: "RED Team",
    },
    {
      img: img10,
      title: "Mock-up",
      description: "Fot Fat Fat",
    },
    {
      img: img11,
      title: "Mock-up",
      description: "Fot Fat Fat",
    },
    {
      img: img12,
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: img13,
      title: "Logo",
      description: "Fot Fat Fat",
    },
    {
      img: img14,
      title: "Affiche",
      description: "Ataya express",
    },
    {
      img: img15,
      title: "Affiche",
      description: "Ataya express",
    },
    {
      img: img16,
      title: "Affiche",
      description: "Ataya express",
    },
    {
      img: img17,
      title: "Affiche",
      description: "Ataya express",
    },
    {
      img: img18,
      title: "Affiche",
      description: "She Code's",
    },
    {
      img: img19,
      title: "Logo",
      description: "Ket Ket",
    },
    {
      img: img20,
      title: "Affiche",
      description: "Faju",
    },
    {
      img: img21,
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: img22,
      title: "Affiche",
      description: "Le coran Soigne",
    },
    {
      img: img23,
      title: "Affiche",
      description: "Ket Ket",
    },
    {
      img: img24,
      title: "Affiche",
      description: "Le coran Soigne",
    },
    {
      img: img25,
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: img26,
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: img27,
      title: "Affiche",
      description: "Bonheure Conjugal",
    },
    {
      img: img28,
      title: "Logo",
      description: "Bonheure Conjugal",
    },
    {
      img: img29,
      title: "Logo",
      description: "Bonheure Conjugal",
    },
    {
      img: img30,
      title: "Logo",
      description: "Lka Dev",
    },
    {
      img: img31,
      title: "Logo",
      description: "Mbay'mi Connect",
    },
    {
      img: img32,
      title: "Logo",
      description: "Technocons BTP",
    },
    {
      img: img33,
      title: "Logo",
      description: "Teranga Chicken",
    },
    {
      img: img34,
      title: "Affiche",
      description: "Teranga Chicken",
    },
    {
      img: img35,
      title: "Logo",
      description: "Univ",
    },
    {
      img: img36,
      title: "Logo",
      description: "Tayeur Gestion",
    },
    {
      img: img37,
      title: "Affiche",
      description: "Elikia Ventur",
    },
    {
      img: img38,
      title: "Affiche",
      description: "Elikia Ventur",
    },
    {
      img: img39,
      title: "Affiche",
      description: "Elikia Ventur",
    },
    {
      img: img40,
      title: "Illustration",
      description: "Fewnu",
    },
    {
      img: img41,
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: img42,
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: img43,
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: img44,
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: img45,
      title: "Affiche",
      description: "Fewnu",
    },
    {
      img: img46,
      title: "Affiche",
      description: "NS Prestation / Komyu Plus",
    },
    {
      img: img47,
      title: "Mantorat",
      description: "Komyu Plus",
    },
    {
      img: img48,
      title: "Affiche",
      description: "Komyu Plus",
    },
    {
      img: img49,
      title: "Affiche",
      description: "Komyu Plus",
    },
    {
      img: img50,
      title: "Affiche",
      description: "Komyu Plus",
    },
    {
      img: img51,
      title: "Affiche",
      description: "Khaira Travel",
    },
    {
      img: img52,
      title: "Logo",
      description: "Khaira Travel",
    },
    {
      img: img53,
      title: "Affiche",
      description: "Bakeli / RED Team",
    },
  ],
};

const LinkPane = styled(Link)`
  color: black;
`


const TravailHomePage = () => {
  return (
    <FadeTransition fadeTransition="animate__fadeIn">
      <Title text="Portfolio" lineBg={rootstyles.color.navbarActive} />
      <Flex justify={"flex-end"} gap={10}>
        <LinkPane to={""}>Mes realisations</LinkPane>
        <LinkPane to={"lien-utiles"}>Liens utiles</LinkPane>
      </Flex>
      <div style={{ marginTop: "30px" }}>
        <Outlet />
      </div>
    </FadeTransition>
  );
};

export default TravailHomePage;
