import React from 'react';

class RoomItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    // this.toggleHoverState = this.toggleHoverState.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }


  render() {
    // console.log('props:', props);
    return (
      <div>
        <img src= {this.props.room.imageUrl} className="room-list-item-image"
        onMouseEnter={this.handleMouseHover} />
        {/* {this.state.showBookmark ? <button>Your Button</button> : null} */}
        <span className="room-list-item-type">{this.props.room.type}</span>
        <span className="room-list-item-bed"> · {this.props.room.bed > 1 ? this.props.room.bed +' beds' : this.props.room.bed + ' bed'} </span>
        <div className="room-list-item-title">{this.props.room.title}</div>
        <div className="room-list-item-price">${this.props.room.price} / night</div>
      </div>
    );
  }
}

export default RoomItem;
