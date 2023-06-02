/* eslint-disable no-unused-vars */

import { ReactNode, useEffect, useRef, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//  React TS examples components

//  React page layout routes
import pageRoutes from "page.routes";

// Images
import bgImage from "assets/images/bg-pricing.jpg";
import { Container } from "@mui/system";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import video from "assets/hero.mp4";
import homeBg from "assets/images/dosh/homeBg.jpg";
import { Icon, Link } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import MDButton from "../../../../../components/MDButton";

// Declaring props types for Header
interface Props {
  tabValue: number;
  tabHandler: (...arg: any) => void;
  children: ReactNode;
}

function Header({ tabValue, tabHandler, children }: Props): JSX.Element {
  const [mobileView, setMobileView] = useState(false);
  const videoRef = useRef(null);

  return (
    <>
      <HomeNavbar routes={pageRoutes} />
      <MDBox position="relative" sx={{ position: "relative", height: "100vh" }}>
        <MDBox sx={{ position: "relative", height: "100vh" }}>
          <MDBox
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,.2)",
            }}
          ></MDBox>
          <Container>
            <Grid
              container
              spacing={3}
              justifyContent="flex-end"
              sx={{ position: "relative", zIndex: "1", py: 22, textAlign: "left" }}
            >
              <Grid item xs={12} lg={6} sx={{ px: { xs: 4, lg: 0 } }}>
                <MDBox mb={0} mt={mobileView ? 6 : 12}>
                  <MDTypography sx={{ fontSize: "12px" }} color="white" align="right">
                    - CROSSOVER TO WHAT WE DO
                  </MDTypography>
                </MDBox>
                <MDBox mb={1}>
                  <MDTypography variant="h1" color="white" fontWeight="bold" align="right">
                    AUTOMATED TRADING NETWORKING
                  </MDTypography>
                  <MDTypography variant="h1" color="white" fontWeight="bold" align="right">
                    DO$HCOIN
                  </MDTypography>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="body2" color="white" fontWeight="bold" align="right">
                    Our Strategy stems from these two questions:
                  </MDTypography>
                  <MDTypography variant="body2" color="white" fontWeight="light" align="right">
                    How do we win a losing trade in a 6.6 trillion $ market?
                  </MDTypography>
                  <MDTypography variant="body2" color="white" fontWeight="light" align="right">
                    And, how do we do it while we sleep?
                  </MDTypography>
                  <MDBox display="flex" justifyContent={"flex-end"} mt={2}>
                    <MDButton
                      component={Link}
                      to={"/authentication/sign-up/cover"}
                      variant="gradient"
                      color={"info"}
                      size="small"
                      sx={{ mx: 2, mb: 2 }}
                    >
                      {"Send Info"}
                    </MDButton>
                    <MDButton
                      component={Link}
                      to={"/"}
                      variant="gradient"
                      color={"info"}
                      size="small"
                      sx={{ mb: 2 }}
                    >
                      {"Sign Up"}
                    </MDButton>
                  </MDBox>
                </MDBox>
              </Grid>
            </Grid>
          </Container>
          <MDBox
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              // width: "100%",
              // height: "100vh",
              zIndex: "-1",
            }}
          >
            <img src={homeBg} alt="home background" style={{ width: "100%", height: "100vh" }} />
            {/* <video
              ref={videoRef}
              style={{ width: "100%" }}
              autoPlay={true}
              loop
              muted
              src={video}
            ></video> */}
          </MDBox>
        </MDBox>
      </MDBox>
      <Grid container sx={{ px: 6, my: 8 }}>
        <Grid item xs={12}>
          <MDBox minWidth={{ xs: "22rem", md: "25rem" }} mx="auto" mt={6}></MDBox>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
