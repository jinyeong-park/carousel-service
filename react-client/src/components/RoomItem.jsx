import React from 'react';

function RoomItem(props) {
  // console.log('props before return', props);

  return (
    // console.log('props after return', props)
    <div>
      <img src={props.room.imageUrl} onClick={props.handleClick} className="room-list-item-image"/>
      <span className="room-list-item-type">{props.room.type}</span>
      <span className="room-list-item-bed"> · {props.room.bed > 1 ? props.room.bed +' beds' : props.room.bed + ' bed'} </span>
      <div className="room-list-item-title">{props.room.title}</div>
      <div className="room-list-item-price">${props.room.price} / night</div>
    </div>
  )
}

export default RoomItem;
