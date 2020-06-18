import React from 'react';
import moment from 'moment';


function FeedItem(props) {
  console.log('props before return', props)
  return (
    // console.log('props after return', props)
    <div>
      <div className="feed-list-item-title" onClick={props.handleClick}>{props.blog.title}</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{props.blog.author}</span> {moment().startOf('day').fromNow()}</div>
        <img src={props.blog.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">{props.blog.body} </span>
    </div>


  )
}

export default FeedItem;

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
