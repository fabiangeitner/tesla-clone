import React from "react";
import styled from "styled-components";
import { Sektion } from "./Sektion";

import ModelS from "../images/model-s.jpg";
import ModelY from "../images/model-y.jpg";
import Model3 from "../images/model-3.jpg";
import ModelX from "../images/model-x.jpg";
import SolarPanel from "../images/solar-panel.jpg";
import SolarRoof from "../images/solar-roof.jpg";
import Accessories from "../images/accessories.jpg";

const Container = styled.div`
  height: 100vh;
`;

export const Home = () => {
  return (
    <Container>
      <Sektion
        titel="Model S"
        beschreibung="Order Online for Touchless Delivery"
        backgroundImg={ModelS}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Sektion
        titel="Model Y"
        beschreibung="Order Online for Touchless Delivery"
        backgroundImg={ModelY}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Sektion
        titel="Model 3"
        beschreibung="Order Online for Touchless Delivery"
        backgroundImg={Model3}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Sektion
        titel="Model X"
        beschreibung="Order Online for Touchless Delivery"
        backgroundImg={ModelX}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Sektion
        titel="Lowest Cost Solar Panels in America"
        beschreibung="Money-back guarantee"
        backgroundImg={SolarPanel}
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Sektion
        titel="Solar for New Roofs"
        beschreibung="Solar Roof Costs Less than a New Roof Plus Solar Panels"
        backgroundImg={SolarRoof}
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Sektion
        titel="Accessories"
        beschreibung=""
        backgroundImg={Accessories}
        leftBtnText="Shop Now"
      />
    </Container>
  );
};
