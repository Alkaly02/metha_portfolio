import React from "react";
import { styled } from "styled-components";
import { rootstyles } from "../styles/rootstyles";
import { Container, Flex, Grid } from "@mantine/core";
import Header from "../components/header/Header";
import { NavLink } from "react-router-dom";

const AppContainerPane = styled.div`
  background-color: ${rootstyles.color.primary};
  min-height: 100dvh;
`;
const NavbarPane = styled.nav`
  background-color: ${rootstyles.color.primaryhsl};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: ${rootstyles.radius.border};
  padding: 10px;
  border: 1px solid #000;
`;
const NavLinkPane = styled(NavLink)`
  width: 80px;
  height: 80px;
  margin: auto;
  paddin: 5px;
  background-color: ${rootstyles.color.navLinkColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${rootstyles.radius.border};
  text-decoration: none;

  &.active {
    background: ${rootstyles.color.navLinkColor};
    color: #fff;
  }
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
  height: 100%;
`;

const MainApp = () => {
  return (
    <AppContainerPane>
      <Container px={0}>
        <Header />
        <MainContentPane>
          <Flex
            mih={50}
            // bg="rgba(0, 0, 0, .3)"
            gap="md"
            justify="flex-end"
            align="flex-center"
            direction="row"
            wrap="wrap"
          >
            <NavbarPane style={{ flex: 0.5 }}>
              <Grid>
                <Grid.Col span={3}>
                  <NavLinkPane to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M12.959 1.6605C12.8259 1.55674 12.662 1.5004 12.4932 1.5004C12.3245 1.5004 12.1606 1.55674 12.0275 1.6605L1.25 10.0642L2.18225 11.2433L3.5 10.2158V19.5C3.50079 19.8976 3.65908 20.2787 3.94022 20.5598C4.22135 20.8409 4.60242 20.9992 5 21H20C20.3976 20.9992 20.7787 20.8409 21.0598 20.5598C21.3409 20.2787 21.4992 19.8976 21.5 19.5V10.2225L22.8177 11.25L23.75 10.071L12.959 1.6605ZM14 19.5H11V13.5H14V19.5ZM15.5 19.5V13.5C15.4996 13.1023 15.3414 12.721 15.0602 12.4398C14.779 12.1586 14.3977 12.0004 14 12H11C10.6023 12.0004 10.221 12.1586 9.93978 12.4398C9.65856 12.721 9.5004 13.1023 9.5 13.5V19.5H5V9.0465L12.5 3.204L20 9.054V19.5H15.5Z"
                        fill="#F2F7FC"
                      />
                    </svg>
                    <span>Accueil</span>
                  </NavLinkPane>
                </Grid.Col>
                <Grid.Col span={3}>
                  <NavLinkPane>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2ZM7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H7ZM9 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6C16 6.26522 15.8946 6.51957 15.7071 6.70711C15.5196 6.89464 15.2652 7 15 7H9C8.73478 7 8.48043 6.89464 8.29289 6.70711C8.10536 6.51957 8 6.26522 8 6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5ZM9 17H11C11.2652 17 11.5196 17.1054 11.7071 17.2929C11.8946 17.4804 12 17.7348 12 18C12 18.2652 11.8946 18.5196 11.7071 18.7071C11.5196 18.8946 11.2652 19 11 19H9C8.73478 19 8.48043 18.8946 8.29289 18.7071C8.10536 18.5196 8 18.2652 8 18C8 17.7348 8.10536 17.4804 8.29289 17.2929C8.48043 17.1054 8.73478 17 9 17ZM9 13H15C15.2652 13 15.5196 13.1054 15.7071 13.2929C15.8946 13.4804 16 13.7348 16 14C16 14.2652 15.8946 14.5196 15.7071 14.7071C15.5196 14.8946 15.2652 15 15 15H9C8.73478 15 8.48043 14.8946 8.29289 14.7071C8.10536 14.5196 8 14.2652 8 14C8 13.7348 8.10536 13.4804 8.29289 13.2929C8.48043 13.1054 8.73478 13 9 13ZM9 9H15C15.2652 9 15.5196 9.10536 15.7071 9.29289C15.8946 9.48043 16 9.73478 16 10C16 10.2652 15.8946 10.5196 15.7071 10.7071C15.5196 10.8946 15.2652 11 15 11H9C8.73478 11 8.48043 10.8946 8.29289 10.7071C8.10536 10.5196 8 10.2652 8 10C8 9.73478 8.10536 9.48043 8.29289 9.29289C8.48043 9.10536 8.73478 9 9 9Z"
                        fill="#1A1003"
                        fill-opacity="0.5"
                      />
                    </svg>
                    <span>Accueil</span>
                  </NavLinkPane>
                </Grid.Col>
                <Grid.Col span={3}>
                  <NavLinkPane>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 21C3.45 21 2.979 20.804 2.587 20.412C2.195 20.02 1.99934 19.5493 2 19V8C2 7.45 2.196 6.979 2.588 6.587C2.98 6.195 3.45067 5.99934 4 6H8V4C8 3.45 8.196 2.979 8.588 2.587C8.98 2.195 9.45067 1.99934 10 2H14C14.55 2 15.021 2.196 15.413 2.588C15.805 2.98 16.0007 3.45067 16 4V6H20C20.55 6 21.021 6.196 21.413 6.588C21.805 6.98 22.0007 7.45067 22 8V19C22 19.55 21.804 20.021 21.412 20.413C21.02 20.805 20.5493 21.0007 20 21H4ZM4 19H20V8H4V19ZM10 6H14V4H10V6Z"
                        fill="#1A1003"
                        fill-opacity="0.5"
                      />
                    </svg>
                    <span>Accueil</span>
                  </NavLinkPane>
                </Grid.Col>
                <Grid.Col span={3}>
                  <NavLinkPane>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M21.5 2H6.5C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V7H2.5V9H4.5V11H2.5V13H4.5V15H2.5V17H4.5V20C4.5 20.5304 4.71071 21.0391 5.08579 21.4142C5.46086 21.7893 5.96957 22 6.5 22H21.5C21.7652 22 22.0196 21.8946 22.2071 21.7071C22.3946 21.5196 22.5 21.2652 22.5 21V3C22.5 2.73478 22.3946 2.48043 22.2071 2.29289C22.0196 2.10536 21.7652 2 21.5 2ZM13.5 4.999C15.148 4.999 16.5 6.35 16.5 7.999C16.4971 8.79385 16.1801 9.55533 15.6182 10.1175C15.0562 10.6796 14.2948 10.9968 13.5 11C11.853 11 10.5 9.647 10.5 7.999C10.5 6.35 11.853 4.999 13.5 4.999ZM19.5 18H7.5V17.25C7.5 15.031 10.205 12.75 13.5 12.75C16.795 12.75 19.5 15.031 19.5 17.25V18Z"
                        fill="#1A1003"
                        fill-opacity="0.5"
                      />
                    </svg>
                    <span>Accueil</span>
                  </NavLinkPane>
                </Grid.Col>
              </Grid>
            </NavbarPane>
          </Flex>
          <MainContentChild>
            <LeftPane>left</LeftPane>
            <RightPane>right</RightPane>
          </MainContentChild>
        </MainContentPane>
      </Container>
    </AppContainerPane>
  );
};

export default MainApp;
