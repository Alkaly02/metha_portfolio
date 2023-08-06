import React from "react";

import { Grid } from "@mantine/core";

import { rootstyles } from "../../styles/rootstyles";

import Title from "../../components/shared/Title";
import ContactCard from "../../components/contact/ContactCard";

import phoneSvg from "../../assets/svgs/phone.svg";
import mailContact from "../../assets/svgs/mailContact.svg";

const contacts = {
  personal: [
    {
      title: "Téléphone ",
      icon: phoneSvg,
      infos: ["+221 77 777 77 77", "+221 76 777 77 77"],
      bgColor: rootstyles.color.tercary,
    },
    {
      title: "Email:",
      icon: mailContact,
      infos: ["maymounawade@gmail.com"],
      bgColor: rootstyles.color.primaryhsl,
    },
  ],
};

const ContactHomePage = () => {
  return (
    <div>
      <Title text="Contact " lineBg={rootstyles.color.navbarActive} />
      <Grid>
        {contacts.personal.map((contact) => {
          return (
            <Grid.Col span={6}>
              <ContactCard
                title={contact.title}
                icon={contact.icon}
                infos={contact.infos}
                bgColor={contact.bgColor}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default ContactHomePage;
