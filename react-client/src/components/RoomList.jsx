import React from 'react';
import RoomItem from './RoomItem.jsx';

const RoomList = (props) => (

  <div className="rooms">
    <ul>
      <li className="room-list-item">
        {
          props.rooms.map((room) => (
            <RoomItem room={room} handleClick={props.handleClick} />
          )
          )
        }
      </li>
     </ul>
  </div>
);

export default RoomList;