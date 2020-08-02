import React from "react";
import styled from "styled-components";

const Span = styled.span``;

const Bold = styled.span`
  font-weight: bold;
`;

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 30px;
  margin: 0px 100px;
  font-size: 18px;
`;

const Par = styled.p`
  margin-top: 20px;
`;
const About = (props) => {
  return (
    <Wrapper>
      <Span>
        Fruit emporium is founded on a very simple principle:
        <Bold> Fruit is good.</Bold>
      </Span>
      <Par>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </Par>
    </Wrapper>
  );
};

export default About;
