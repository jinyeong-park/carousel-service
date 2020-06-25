import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Container from './Container.jsx';
import styled from 'styled-components';
import data from './sampleData.js'

const Div = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`

const Outline = styled.div`
  width: 1140px;
  height: 400px;
  margin: 40px auto;
`;

const Header = styled.div`
  overflow: hidden;
`

const H1 = styled.h1`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
  color: #222222;
  font-size: 22px;
  display: inline-block;
  margin: 20px;
  float: left;
`;

const ButtonGroup = styled.span`
  float: right;
`

const Pages = styled.div`
  color: black;
  font-size: 14px;
  display: inline-block;
`

const Arrow_Prev = styled.button`
  /* Adapt the colors based on primary prop */
  background: white;
  color: black;
  font-size: 1.2em;
  margin: 20px;
  padding: 0.25em 0.5em;
  border: 1px solid lightgray;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  &:hover {
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }
`;

const Arrow_Next = styled.button`
  background: white;
  color: black;
  font-size: 1.2em;
  margin: 20px;
  padding: 0.25em 0.5em;
  border: 1px solid lightgray;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  &:hover {
    box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }
`;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allRooms: data.rooms,
      startIndex: 0,
      displayRooms:
      [
        data.rooms[0],
        data.rooms[1],
        data.rooms[2],
        data.rooms[3],
      ],
    }
  }

  prevProperty() {
    console.log('prev button')
    let newIndex = this.state.startIndex-4;
    this.setState({
      displayRooms: [
        data.rooms[newIndex],
        data.rooms[newIndex+1],
        data.rooms[newIndex+2],
        data.rooms[newIndex+3]
      ],
      startIndex: newIndex,
    })
  };

  nextProperty() {
    console.log('next button')
    let newIndex = this.state.startIndex+4;
    console.log('typeof newIndex', typeof newIndex)
    this.setState({
      displayRooms: [
        data.rooms[newIndex],
        data.rooms[newIndex+1],
        data.rooms[newIndex+2],
        data.rooms[newIndex+3]
      ],
      startIndex: newIndex,
    })
  }

  render() {
    return (
      <Div className="App">
        <Outline>
          <Header>
            <H1>More places to stay</H1>
            <ButtonGroup>
              <Pages>{ Math.ceil((this.state.startIndex + 1) / 4) } / { Math.ceil(this.state.allRooms.length / 4) } </Pages>
              <Arrow_Prev onClick={() => this.prevProperty()}
              disabled={this.state.displayRooms[0] === data.rooms[0]}>&lt;</Arrow_Prev>
              <Arrow_Next onClick={() => this.nextProperty()}
              disabled={this.state.displayRooms.length-1 === data.rooms.length-1}>&gt;</Arrow_Next>
            </ButtonGroup>
          </Header>

          <Container displayRooms={this.state.displayRooms} allRooms={this.state.allRooms} startIndex={this.state.startIndex}/>
        </Outline>
      </Div>
    );
  }
}

export default App;
