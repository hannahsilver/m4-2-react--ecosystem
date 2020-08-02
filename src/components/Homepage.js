import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";

const Par = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px 100px 20px 100px;
`;

const BoldPar = styled.p`
  margin: 0px 100px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  font-size: 18px;
`;

const Homepage = (props) => {
  return (
    <Wrapper>
      <Par>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Par>
      <BoldPar>Browse items:</BoldPar>
      <div>
        <ListingGrid sellers={props.sellers} items={props.items} />
      </div>
    </Wrapper>
  );
};

export default Homepage;
