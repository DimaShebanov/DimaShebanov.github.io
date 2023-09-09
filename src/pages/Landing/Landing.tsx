import React from "react";

import styled from "styled-components";

import { color, fontSize } from "@/styling/mixins";

import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import OurExperience from "./OurExperience";
import CooperationTerms from "./CooperationTerms/CooperationTerms";
import Prices from "./Prices/Prices";
import HowToStart from "./HowToStart";
import Equipment from "./Equipment";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer";
import PricesPage from "./PricesPage/PricesPage";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Landing = () => (
  <Root>
    <Switch>
      <Route path="/prices" component={PricesPage} />
      <Route path="/">
        <NavBar />
        <Header />
        <OurExperience />
        <CooperationTerms />
        <Prices />
        <HowToStart />
        <Equipment />
        <Contacts />
        <Footer />
      </Route>
    </Switch>
  </Root>
);

export default Landing;

const Root = styled.div`
  font-family: "Rubik", sans-serif !important;
  overflow: auto;
  height: auto;
  max-width: 100vw;
  overflow-x: hidden;
  color: ${color("primaryBlack")};
  scroll-behavior: smooth;
  min-width: 320px;

  h6 {
    ${fontSize("sm")};
  }

  h5 {
    ${fontSize("sm")};
    font-weight: 500;
  }

  h4 {
    ${fontSize("md")};
  }

  h3 {
    ${fontSize("lg")};
    font-weight: 300;
  }

  h2 {
    ${fontSize("xl")};
  }

  h1 {
    ${fontSize("xxl")};
    font-weight: 500;
  }
`;
