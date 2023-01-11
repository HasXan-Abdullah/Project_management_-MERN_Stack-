import React from 'react'

import './simpleBtn.css'
const SimpleButton = ( {props,btnLabel} ) => {
  return (
    <div>
      <button className='Btn' {...props}>{btnLabel}</button>

    </div>
  )
}

export default SimpleButton