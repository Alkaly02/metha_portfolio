import React from "react";
import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";
import Text from "../../components/shared/Text";

const AccueilHomePage = () => {
  return (
    <div>
      <Title text="À propos de moi " lineBg={rootstyles.color.blackLinear} />
      <Text fw={rootstyles.fontWeight.sm} lh={rootstyles.lineHeight.lg}>
        Bonjour! Je suis ravi de vous accueillir dans mon portfolio. Je suis un
        passionné et polyvalent Designer full-stack avec un vif intérêt pour
        l'exploration des dernières technologies de pointe. Mon parcours dans le
        monde du design a été tout simplement exaltant, et Je m'efforce
        constamment d'améliorer mes compétences et d'adopter les nouvelles
        tendance actuelle du marché
      </Text>
    </div>
  );
};

export default AccueilHomePage;
