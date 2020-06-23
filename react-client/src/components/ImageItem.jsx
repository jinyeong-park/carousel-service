import React from 'react';
import styled from 'styled-components';

const ImageItem = ({room}) => {

  return (
    <div>
    <img src= {room.imageUrl} className="room-list-item-image"/>
    <span>{room.type}</span>
    <span> · {room.bed > 1 ? room.bed +' beds' : room.bed + ' bed'} </span>
    <div>{room.title}</div>
    <div>${room.price} / night</div>
  </div>
  );
}

export default ImageItem;