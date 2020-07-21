import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Text = styled.h1`
  font-weight: bold;
  line-height: 35px;
`;

const HeaderDiv = styled.div`
  padding: 20px 50px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
  padding: 30px;
  &:hover {
    color: pink;
  }
`;

const Header = (props) => {
  return (
    <HeaderDiv>
      <Text>Fruit Emporium</Text>
      <LinkDiv>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </LinkDiv>
    </HeaderDiv>
  );
};

export default Header;
