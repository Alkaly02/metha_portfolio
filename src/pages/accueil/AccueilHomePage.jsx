import React from "react";
import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";
import Text from "../../components/shared/Text";
import { Grid } from "@mantine/core";
import Card from "../../components/cards/Card";
import { TitleDesciption } from "../../styles/sharedStyles";
import graphicDesignSvg from "../../assets/svgs/graphicDesign.svg";
import uxDesignSvg from "../../assets/svgs/uxDesign.svg";
import montageSvg from "../../assets/svgs/montageVideo.svg";
import coachingSvg from "../../assets/svgs/coaching.svg";
import FadeTransition from "../../components/fadeTransition/FadeTransition";

const aproposDeMoi = {
  apropos:
    "Bonjour! Je suis ravi de vous accueillir dans mon portfolio. Je suis un passionné et polyvalent Designer avec un vif intérêt pour l'exploration des dernières technologies de pointe. Mon parcours dans le monde du design a été tout simplement exaltant, et Je m'efforce constamment d'améliorer mes compétences et d'adopter les nouvelles tendances actuelles du marché.",
  "Ce que je fais": [
    {
      title: "Graphic Design",
      description:
        "En tant que designer graphique, je crée des visuels percutants, jonglant avec la couleur, la typographie, et la mise en page pour capturer l'essence des projets et communiquer leur message avec une esthétique visuelle soignée.",
      icon: graphicDesignSvg,
      bgColor: rootstyles.color.cardBg,
    },
    {
      title: "UX/UI DESIGN",
      description:
        "En tant que UX/UI Designer, je conçois des expériences utilisateur intuitives en optimisant les interfaces numériques pour une utilisation conviviale. Mon travail combine la conception visuelle avec une réflexion centrée sur l'utilisateur pour créer des interfaces esthétiques et fonctionnelles.",
      icon: uxDesignSvg,
      bgColor: rootstyles.color.primaryhsl,
    },
    {
      title: "Montage Vidéo ",
      description:
        "En tant que vidéaste, je crée des vidéos captivantes, en utilisant mon expertise en tournage, montage, et post-production pour raconter des histoires visuelles de manière impactante.",
      icon: montageSvg,
      bgColor: rootstyles.color.primaryhsl,
    },
    {
      title: "Coaching",
      description:
        "En tant que coach assistant en design, j'accompagne les designers en herbe pour développer leurs compétences créatives et techniques. Mon rôle est de fournir des conseils et des ressources pour les aider à progresser dans leur parcours de conception.",
      icon: coachingSvg,
      bgColor: rootstyles.color.cardBg,
    },
  ],
};

const AccueilHomePage = () => {
  return (
    <FadeTransition fadeTransition="animate__fadeIn">
      <Title
        text="À propos de moi "
        lineBg={rootstyles.color.blackLinear}
      />
      <Text
        fw={rootstyles.fontWeight.sm}
        lh={rootstyles.lineHeight.lg}
      >
        {aproposDeMoi.apropos}
      </Text>
      <TitleDesciption>{Object.entries(aproposDeMoi)[1][0]}</TitleDesciption>
      <Grid style={{ marginTop: 10 }}>
        {Object.entries(aproposDeMoi)[1][1].map(
          ({ title, description, bgColor, icon }) => {
            return (
              <Grid.Col span={6}>
                <FadeTransition fadeTransition="animate__fadeInUp">
                  <Card
                    icon={icon}
                    title={title}
                    description={description}
                    bgColor={bgColor}
                  />
                </FadeTransition>
              </Grid.Col>
            );
          }
        )}
      </Grid>
    </FadeTransition>
  );
};

export default AccueilHomePage;