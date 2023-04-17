import React from 'react'
import styles from "./postForm.module.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const RadioBtn = (props) => {
  return (
    <div>
         <label className={`${styles.inpLables} mt-4 mb-2`}>Task Status</label>

                <FormLabel id="demo-row-radio-buttons-group-label">
                  Task Status
                </FormLabel>
                <RadioGroup
               {...props}
                >
                  <FormControlLabel
                    value="Active"
                    control={<Radio  className={`${styles.radioBtn}`}/>}
                    label="Active"
                  />
                  <FormControlLabel
                    value="Pending"
                    control={<Radio  className={`${styles.radioBtn}`}/>}
                    label="Pending"
                  />
                  <FormControlLabel
                    value="Completed"
                    control={<Radio  className={`${styles.radioBtn}`}/>}
                    label="Completed"
                  />
                </RadioGroup>
    </div>
  )
}

export default RadioBtn