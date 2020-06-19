import React from 'react';
import moment from 'moment';


function RoomItem(props) {
  console.log('props before return', props)

  return (
    // console.log('props after return', props)
    <div>

      <img src={props.room.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
      <span className="feed-list-item-type">{props.room.type}</span>
      <span className="feed-list-item-bed"> · {props.room.bed > 1 ? props.room.bed +' beds' : props.room.bed + ' bed'} </span>
      <div className="feed-list-item-title">{props.room.title}</div>
      <div className="feed-list-item-price">${props.room.price} / night</div>
        {/* <span className="feed-list-item-lede">{props.room.body} </span> */}
    </div>


  )
}

export default RoomItem;

// const FeedItem = (props) => (


//   <div className="feed">
//       <li className="feed-list-item">
//       <div className="feed-list-item-title" onClick={props.handleClick}>{props.blogs.title}</div>
//         <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{props.blogs.author}</span> {moment().startOf('day').fromNow()}</div>
//         <img src={props.blogs.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
//         <span className="feed-list-item-lede">{props.blogs.body} </span>
//       </li>
//   </div>
// );
