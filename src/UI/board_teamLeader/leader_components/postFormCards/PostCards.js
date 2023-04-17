import React from 'react'
import style from './card.module.css';
const PostCards = (props) => {
  return (
    <div className={`${style.mainDiv}`}>
        <div  className={` d-flex justify-content-between`}>
         <div className={`${style.cardRow}`}> {props.cardtitle}</div>
         <div>
            {props.button}
         </div>
        </div>
        
        <div>
            {props.content}
        </div>
        </div>
  )
}

export default PostCards