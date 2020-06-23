import React from 'react';
import ImageItem from './ImageItem.jsx';
import styled from 'styled-components';

const ImageContainer = ({rooms}) => {

  return (
    <div>
        {rooms && rooms.map((room, index) =>
          <ImageItem room={room} key={index} />
        )}
    </div>
  )
}

export default ImageContainer
