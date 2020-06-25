import React, { useState, useEffect } from 'react';
import ImageItem from './ImageItem.jsx';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0px;
`;

const CardsSliderWapper = styled.span`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  -webkit-transition: -webkit-transform 300ms cubic-bezier(0.45,0.03,0.515,0.955);
  -webkit-transition: transform 300ms cubic-bezier(0.45,0.03,0.515,0.955);
  transition: transform 300ms cubic-bezier(0.45,0.03,0.515,0.955);
  -ms-flex-pack: center;
  padding: 0px;
  max-width: 1120px;
  margin: 0 auto;
  height: 260px;
  // outline: 3px solid gray;
  left: 50%;
  transform: translateX(-50%);
`;

const Container = ({displayRooms, allRooms, startIndex}) => {

  return (
    <Div>
        <CardsSliderWapper>
          {displayRooms && displayRooms.map((room, index) =>
          <ImageItem room={room} key={index} currentImgIdx={index}/>
          )}
        </CardsSliderWapper>
    </Div>
  )
}

export default Container;
