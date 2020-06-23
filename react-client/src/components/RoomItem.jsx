import React from 'react';
import styled, { css } from 'styled-components';
class RoomItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div>
        <img src= {this.props.room.imageUrl} className="room-list-item-image"/>
        <span className="room-list-item-type">{this.props.room.type}</span>
        <span className="room-list-item-bed"> · {this.props.room.bed > 1 ? this.props.room.bed +' beds' : this.props.room.bed + ' bed'} </span>
        <div className="room-list-item-title">{this.props.room.title}</div>
        <div className="room-list-item-price">${this.props.room.price} / night</div>
      </div>
    );
  }
}

export default RoomItem;