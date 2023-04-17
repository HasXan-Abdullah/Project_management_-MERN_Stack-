import React from 'react'
import styles from "./postForm.module.css";
import X from '../../../../assets/images/del.png'
const DelBtn = (props) => {
  return (
    <button className={`${styles.DelBtn}`}
     {...props}>
      
      <img width='8.11px' height='8.11px' src={X}alt='del'/>
     </button>
  )
}

export default DelBtn