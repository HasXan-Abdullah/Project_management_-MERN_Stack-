import React from 'react'
import styles from "./postForm.module.css";
import add from '../../../../assets/images/+.png'
function AddButton(porps) {
  return (
         <button {...porps} className={`${styles.addBtn}`}>
        
        <img src={add} alt=''/> Add
        </button>
  )
}

export default AddButton