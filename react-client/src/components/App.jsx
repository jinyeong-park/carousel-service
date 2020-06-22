import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RoomList from './RoomList.jsx';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      bookmark: [{
        isBookmark: false,
        user_id: '',
        category: '',
      }],

    };
    this.getRoomList = this.getRoomList.bind(this);
  }

  componentDidMount() {
    this.getRoomList();
  }

  getRoomList() {
    $.ajax({
      method: 'GET',
      url: '/api/rooms/carousel/',
      success: (data) => {
        console.log('coming data type and data is', typeof data, data);
        this.setState({
          rooms: data,
        });
      },
      error: (err) => {
        console.log('err in client get', err);
      },
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo">
            More places to stay
          </span>
        </div>
        <RoomList rooms={this.state.rooms}/>
      </div>
    );
  }
}

export default App;
