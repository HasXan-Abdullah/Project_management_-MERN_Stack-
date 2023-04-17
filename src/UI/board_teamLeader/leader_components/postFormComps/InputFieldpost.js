import React from 'react'
import styles from "./postForm.module.css";
const InputFieldpost = (porps) => {
  return (
    <div>
        <label className={`${styles.inpLables} mt-4 mb-2`}>{porps.label}</label>
        <input {...porps}  className={`${styles.inputFields}`} />
    </div>
  )
}

export default InputFieldpost