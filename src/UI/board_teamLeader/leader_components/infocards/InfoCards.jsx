
import React from 'react'
import'./infocard.css'
const InfoCards = (props) => {
  return (
    <div className='card_div'>
        <h5>
            {props.card_title}
        </h5>
        <hr></hr>
          <p className='card_content'>
              {props.card_content}
        </p>
    </div>
  )
}

export default InfoCards