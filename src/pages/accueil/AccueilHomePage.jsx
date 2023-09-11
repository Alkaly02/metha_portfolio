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
    "Bonjour! Je suis ravi de vous accueillir dans mon portfolio. Je suis un passionné et polyvalent Designer full-stack avec un vif intérêt pour l'exploration des dernières technologies e pointe. Mon parcours dans le monde du design a été tout simplement exaltant, et Je m'efforce constamment d'améliorer mes compétences et d'adopter les nouvelles tendance actuelle du marché",
  "Ce que je fais": [
    {
      title: "Graphic Design",
      description:
        "En tant que développeur, je me trouve le plus captivépar la puissance et la flexibilité de NEXT.js. Je suistoujours iconviviales.",
      icon: graphicDesignSvg,
      bgColor: rootstyles.color.cardBg,
    },
    {
      title: "UX/UI DESIGN",
      description:
        "En tant que développeur, je me trouve le plus captivépar la puissance et la flexibilité de NEXT.js. ",
      icon: uxDesignSvg,
      bgColor: rootstyles.color.primaryhsl,
    },
    {
      title: "Montage Vidéo ",
      description:
        "Créer un utilisateur visuellement attrayant et intuitif des interfaces qui offrent un plaisir d'utilisation l'expérience est quelque chose dont je suis vraiment fanatique à propos de. ",
      icon: montageSvg,
      bgColor: rootstyles.color.primaryhsl,
    },
    {
      title: "Coaching",
      description:
        "J'ai aussi trouvé une grande joie à partager mon connaissance avec les autres. Être un technicien mentor me permet de redonner à la communauté qui m'a soutenu tout au long de ma carrière.",
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