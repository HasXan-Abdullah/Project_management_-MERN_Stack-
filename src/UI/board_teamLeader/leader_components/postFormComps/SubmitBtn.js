import React from 'react'
import styles from "./postForm.module.css";
const SubmitBtn = (props) => {
  return (
    <div className='text-center'>
        <button {...props} className={`${styles.submitBtn}`}>Submit</button>
    </div>
  )
}

export default SubmitBtn