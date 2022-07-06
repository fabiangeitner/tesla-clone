import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../images/Tesla_Logo.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  width: 100%;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  img {
    width: 150px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 20;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <Logo>
        <img src={LogoImg} alt="Tesla Logo" />
      </Logo>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
        {/* <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a> */}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setOpen(true)}></CustomMenu>
      </RightMenu>
      <BurgerNav show={open}>
        <CloseWrapper>
          <CustomClose onClick={() => setOpen(false)}></CustomClose>
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Verfügbarer Bestand</a>
        </li>
        <li>
          <a href="#">Gebrauchtwagen</a>
        </li>
        <li>
          <a href="#">Inzahlungnahme</a>
        </li>
        <li>
          <a href="#">Probefahrt</a>
        </li>
        <li>
          <a href="#">Energie für Unternehmen</a>
        </li>
        <li>
          <a href="#">Energieversorger</a>
        </li>
        <li>
          <a href="#">Energie</a>
        </li>
        <li>
          <a href="#">Uns Finden</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
};
