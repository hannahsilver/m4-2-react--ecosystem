import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Text = styled.h1`
  font-weight: bold;
  line-height: 35px;
`;

const HeaderDiv = styled.div`
  margin: 50px 100px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: blue;
  margin: 30px;
  &:hover {
    color: #e35e5e;
    border-bottom: 2px solid #e35e5e;
  }
`;

const Header = (props) => {
  return (
    <HeaderDiv>
      <Text>Fruit Emporium</Text>
      <LinkDiv>
        <StyledNavLink
          exact
          to="/"
          activeStyle={{
            color: "#E35E5E",
            borderBottom: "2px solid #E35E5E",
          }}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          ecaxt
          to="/about"
          activeStyle={{
            color: "#E35E5E",
            borderBottom: "2px solid #E35E5E",
          }}
        >
          About
        </StyledNavLink>
      </LinkDiv>
    </HeaderDiv>
  );
};

export default Header;
