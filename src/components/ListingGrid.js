import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const ItemDiv = styled.div`
  width: 230px;
  margin: 30px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 34px 4px rgba(191, 191, 191, 0.41);
  border-radius: 20px;
`;

const Image = styled.img`
  height: 200px;
  width: 200;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  border-bottom: 2px solid lightgray;
`;

const FruitLink = styled(Link)``;

const LatinName = styled.p`
  margin-top: 15px;
`;

const ListingGrid = (props) => {
  const itemsArray = Object.values(props.items);
  return (
    <Grid>
      {itemsArray.map((fruit) => {
        return (
          <ItemDiv>
            <FruitLink to={`/items/${fruit.id}`}>
              <Image src={fruit.imageSrc} alt="fruit-image"></Image>
            </FruitLink>
            <Name>{fruit.name}</Name>
            <LatinName>{fruit.latinName}</LatinName>
          </ItemDiv>
        );
      })}
    </Grid>
  );
};

export default ListingGrid;
