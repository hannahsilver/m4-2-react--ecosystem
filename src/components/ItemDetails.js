import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { items } from "../data";
import { sellers } from "../data";

const FruitDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FruitImg = styled.img`
  height: 400px;
  width: 400px;
  margin-right: 50px;
  border-radius: 30px;
`;

const InfoDiv = styled.div``;

const Name = styled.h1`
  margin-bottom: 0px;
`;

const LatinName = styled.p`
  margin-top: 0px;
  font-style: italic;
  color: gray;
`;

const Description = styled.p`
  margin-top: 40px;
`;

const Country = styled.p`
  margin-top: 30px;
  font-style: italic;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const BuyButton = styled.button`
  background-color: #5a27c1;
  font-size: 20px;
  color: white;
  border: none;
  padding: 15px 60px;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: navy;
  }
`;

const VendorDiv = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const VendorImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const VendorStore = styled.span`
  font-weight: bold;
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const fruitItem = items[itemId];
  const vendor = sellers[fruitItem.sellerId];

  return (
    <FruitDiv>
      <FruitImg src={fruitItem.imageSrc} alt="fruit-image"></FruitImg>
      <InfoDiv>
        <Name>{fruitItem.name}</Name>
        <LatinName>{fruitItem.latinName}</LatinName>
        <Description>{fruitItem.description}</Description>
        <Country>
          product of <Bold>{fruitItem.countryOfOrigin}</Bold>
        </Country>
        <BuyButton>
          {fruitItem.quantity >= 1
            ? `$${fruitItem.price} - Buy Now`
            : "Out of Stock"}
        </BuyButton>
        <VendorDiv>
          <VendorImg src={vendor.avatarSrc}></VendorImg>
          <span>
            Sold by:
            <VendorStore> {vendor.storeName}</VendorStore>
          </span>
        </VendorDiv>
      </InfoDiv>
    </FruitDiv>
  );
};

export default ItemDetails;
