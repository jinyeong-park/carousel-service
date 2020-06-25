import React from 'react';
import styled from 'styled-components';

const RoomImage = styled.img`
  width: 260px;
  height: 180px;
  background-size: contain;
  border-radius:5%;
  padding: 0;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;

const Superhost = styled.span`
  background-color: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(34, 34, 34);
  border-image: initial;
`;

const Roomtype = styled.span`
  -webkit-box-align: center;
  font-size: 14px;
  color: rgb(113,113,113);
  line-height: 18px;
  align-items: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  width: 28%;
  padding: 5px;
`;

const BedNo = styled.span`
  -webkit-box-align: center;
  font-size: 12px;
  color: rgb(113,113,113);
  line-height: 18px;
  align-items: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  width: 20%;
  display: inline-block;
`;

const StarRating = styled.span`
  -webkit-box-align: center;
  font-size: 11px;
  line-height: 18px;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  img {
    width:17px;
    heigh:17px;
  }
`;

const ReviewNo = styled.span`
  -webkit-box-align: center;
  font-size: 12px;
  color: rgb(113,113,113);
  line-height: 18px;
  align-items: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  width: 33%;
  display: inline-block;
`

const Price = styled.span`
  -webkit-box-align: center;
  align-items: center;
  color: rgb(34,34,34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  font: bold;
  // display: inline-block;
`

const Span = styled.span`
  margin-right: 15px;
`

const ImageItem = ({room}) => {

  return (
    <Span>
      <RoomImage src= {room.imageUrl}/>
      <Superhost>SUPERHOST</Superhost>
      <Roomtype> {room.type}</Roomtype>
      <BedNo>· {room.bed > 1 ? room.bed +' beds' : room.bed + ' bed'} </BedNo>
      <StarRating> <img src='./star.png'/>{room.stars}</StarRating>
      <div>{room.title}</div>
      <Price>${room.price}</Price>
      <span> / night</span>
   </Span>
  );
}

export default ImageItem;



