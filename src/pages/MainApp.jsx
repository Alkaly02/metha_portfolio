import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../styles/rootstyles";
import { Container } from "@mantine/core";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

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
  height: 400px;
`;
const LeftPane = styled.div`
  background-color: #fff;
  flex: 1;
  height: 100%;
  padding: 20px;
`;
const RightPane = styled.div`
  background-color: #fff;
  flex: 2;
  height: 100%;new-
`;

const MainApp = () => {
  return (
    <AppContainerPane>
      <Container px={0}>
        <Header />
        <MainContentPane>
          <Navbar />
          <MainContentChild>
            <LeftPane>left</LeftPane>
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
