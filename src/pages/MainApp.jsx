import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../styles/rootstyles";
import { Container } from "@mantine/core";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Profil from "../components/profil/Profil";

const AppContainerPane = styled.div`
  background-color: ${rootstyles.color.primary};
  min-height: 100dvh;
`;

const MainContentPane = styled.div`
  margin-top: 80px;
`;
const MainContentChild = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  min-height: 400px;
`;
const LeftPane = styled.div`
  background-color: #fff;
  flex: 1;
  height: 100%;
  padding: 10px ${rootstyles.padding.leftPane}px;
  border-radius: ${rootstyles.radius.border};
`;
const RightPane = styled.div`
  background-color: #fff;
  flex: 2;
  height: 100%;
  padding: 10px ${rootstyles.padding.rightPane - 10}px;
  border-radius: ${rootstyles.radius.border};
`;

const MainApp = () => {
  return (
    <AppContainerPane>
      <Container size="xl" p={10}>
        <Header />
        <MainContentPane>
          <Navbar />
          <MainContentChild>
            <LeftPane>
              <Profil />
            </LeftPane>
            <RightPane>
              <Outlet />
            </RightPane>
          </MainContentChild>
        </MainContentPane>
      </Container>
    </AppContainerPane>
  );
};

export default MainApp;
