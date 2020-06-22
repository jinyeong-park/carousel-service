import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import sampleData from '../sample_Data.js';
import RoomList from './RoomList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
    // this.changeView = this.changeView.bind(this);
    this.getRoomList = this.getRoomList.bind(this);
  }

  componentDidMount() {
    this.getRoomList();
  }

  getRoomList() {
    // console.log('getting')
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
        <RoomList handleClick={() => this.changeView('anypostview')} rooms={this.state.rooms}/>
      </div>
    );
  }
}

export default App;