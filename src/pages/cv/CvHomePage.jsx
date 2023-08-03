import React from "react";
import Title from "../../components/shared/Title";
import { rootstyles } from "../../styles/rootstyles";

const CvHomePage = () => {
  return (
    <div>
      <Title text="Cv" lineBg={rootstyles.color.navbarActive} />
    </div>
  );
};

export default CvHomePage;
