import React from 'react';
import { Link } from "gatsby"
import logo from '../assets/logo.png';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: calc(100% - 50px);
  margin: 0 auto;
  position: relative;

  @media (min-width: 550px) {
    width: calc(100% - 100px);
  }
`;

const Logo = styled(Link)`
  width: 121px;
  display: inline-block;
  vertical-align: middle;
`;

const Kontakt = styled(Link)`
  font-family: Avenir-Heavy;
  font-size: 14px;
  color: #D8D8D8;
  text-align: right;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: 4px;
  right: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">
        <img alt="PalmMedia logo" src={logo} />
      </Logo>
      <Kontakt to="#kontakt">Kontakt</Kontakt>
    </HeaderContainer>
  );
}

export default Header;
