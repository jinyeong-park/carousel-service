import React from 'react';

function RoomItem(props) {
  // console.log('props before return', props);

  return (
    // console.log('props after return', props)
    <div>
      <img src={props.room.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
      <span className="feed-list-item-type">{props.room.type}</span>
      <span className="feed-list-item-bed"> · {props.room.bed > 1 ? props.room.bed +' beds' : props.room.bed + ' bed'} </span>
      <div className="feed-list-item-title">{props.room.title}</div>
      <div className="feed-list-item-price">${props.room.price} / night</div>
    </div>
  )
}

export default RoomItem;
