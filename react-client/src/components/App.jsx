import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RoomList from './RoomList.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        {
          room_id:7,
          title:"tempora aut nemo",
          bed:2,
          type:"Entire house",
          price:122,
          stars:4,
          imageUrl:"https://carousels.s3.us-east-2.amazonaws.com/6f4df6fd-0be0-400c-a5a4-4fea34c78504.jpg",
          isSuperhost:true,
          review_no:519,
          bookmark:[{
            user_id: 1,
            isBookmark:false,
            category:"Port Jayson",
          }]
        }
      ]
    }

  }

  render() {
    return (
      <div>
        <div className="container">
          <span>
            More places to stay
          </span>
        </div>
        <RoomList rooms={this.state.rooms}/>
      </div>
    );
  }
}

export default App;
