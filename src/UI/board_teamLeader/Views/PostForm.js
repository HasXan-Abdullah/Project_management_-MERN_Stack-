import { Input } from "@mui/material";
import styles from "./postForm.module.css";


const PostForm = () => {

  return (
    <div className={` mt-5`}>
        <input   className={`${styles.inputFields} mt-5`} placeholder="Project Name"/>
        <input  className={`${styles.inputFields} mt-5`} placeholder="Project Name"/>
        <input  className={`${styles.inputFields} mt-5`} placeholder="Project Name"/>
        <input  className={`${styles.inputFields} mt-5`} placeholder="Project Name"/>
        <label className={`${styles.uploadBtn} mt-5`} for="actual-btn">Choose File</label> 
        <br>
        </br>
        <input className={`${styles.uploadBtn} mt-5`}  id="actual-btn" type="file" />
       
       <div>
         <button className={`${styles.addBtn} mt-5`}>
        + Add
        </button>
       </div>
       <select className={`${styles.selectOption}`} >

       </select>

       <input className={`${styles.radioBtn}`} type="radio" aria-label="helllo"/>
       <input className={`${styles.radioBtn}`} type="radio" aria-label="helllo"/>
    </div>  
  );
};

export default PostForm;

