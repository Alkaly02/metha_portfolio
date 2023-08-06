import { Card, Flex } from "@mantine/core";
import React from "react";
import { styled } from "styled-components";

const CardTitlePane = styled.h5`
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 200% */
  letter-spacing: 0.5px;
  margin: 0;
`;

const ContactCard = ({ icon, title, infos, bgColor }) => {
  return (
    <Card radius="lg" h={150} bg={bgColor}>
      <Flex gap="lg">
        <div style={{ marginTop: 5 }}>
          <img src={icon} alt={title} />
        </div>
        <div>
          <CardTitlePane>{title}</CardTitlePane>
          {infos.map((info) => (
            <p style={{ margin: "5px 0" }}>{info}</p>
          ))}
        </div>
      </Flex>
    </Card>
  );
};

export default ContactCard;
