import React from 'react';
import moment from 'moment';
import FeedItem from './FeedItem.jsx';


const Feed = (props) => (

  <div className="feed">
    <ul>
      <li className="feed-list-item">
        {
          props.blogs.map((blog) => (
            <FeedItem blog={blog} handleClick={props.handleClick}/>
          )
          )
        }
      </li>
     </ul>
  </div>
);

export default Feed;


  {/* <div className="feed-list-item-title" onClick={props.handleClick}>{props.blogs[0].title}</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{props.blogs[0].author}</span> {moment().startOf('day').fromNow()}</div>
        <img src={props.blogs[0].imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">{props.blogs[0].body} </span>
      </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>{props.blogs[1].title}</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{props.blogs[1].author}</span> {moment().startOf('day').fromNow()}</div>
        <img src={props.blogs[1].imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">{props.blogs[1].body}</span>
      </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>{props.blogs[2].title}</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{props.blogs[2].author}</span> {moment().startOf('day').fromNow()}</div>
        <img src={props.blogs[2].imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">{props.blogs[2].body}</span>
        </li>
      <li className="feed-list-item">
        <div className="feed-list-item-title" onClick={props.handleClick}>{props.blogs[3].title}</div>
        <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{props.blogs[3].author}</span> {moment().startOf('day').fromNow()}</div>
        <img src={props.blogs[3].imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
        <span className="feed-list-item-lede">{props.blogs[3].body} </span> */}