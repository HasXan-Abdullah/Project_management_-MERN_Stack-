import React from 'react'
import styles from './postForm.module.css';
import Select from "@mui/material/Select";
const SelectOp = (props) => {
  return (
    <div>
     
          <label className={`${styles.inpLables} mb-2`}>{props.label}</label>
              <Select
            className={`${styles.selectOption}`}
            {...props}
              >
             
                
               
              </Select>
           
      
    </div>
  )
}

export default SelectOp