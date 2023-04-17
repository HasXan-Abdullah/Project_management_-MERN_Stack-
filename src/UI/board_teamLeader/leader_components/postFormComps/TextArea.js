import React from 'react'
import styles from './postForm.module.css';
const TextArea = (props) => {
  return (
    <div>
        
        <label className={`${styles.inpLables} mt-4 mb-2`}>Task Description</label>
           <textarea {...props} className={`${styles.textArea}`}></textarea>
    </div>
  )
}

export default TextArea