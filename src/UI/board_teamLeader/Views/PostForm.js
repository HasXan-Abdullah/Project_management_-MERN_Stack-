import { Input, Select } from "@mui/material";
import styles from "./postForm.module.css";
import uploadBtnIcon from '../../../assets/images/Vector.png'
import add from '../../../assets/images/+.png'
const PostForm = () => {

  return (
    <div className={` mt-5`}>
        <input   className={`${styles.inputFields} mt-5`} placeholder="Project Name"/>
        <input  className={`${styles.inputFields} mt-5`} placeholder="Project Name"/>
        <input  className={`${styles.inputFields} mt-5`} placeholder="Project Name"/>
        <input  className={`${styles.inputFields} mt-5`} placeholder="Project Name"/>
     <label className={`${styles.uploadBtn} mt-5`} htmlFor="actual-btn">
   <div className={`d-flex`}>
    <div className={`${styles.uploadBtnContent}`}>
      <img src={uploadBtnIcon} alt="uploadicon"/> 
    </div>
     <div className={`${styles.uploadBtnText}`}>
      <span>Upload Project </span>
     </div>
      
   </div>
  <input id="actual-btn" type="file"  />
</label>
       <div className={`${styles.DivaddBtn}`} >
         <button className={`${styles.addBtn}`}>
        
        <img src={add} alt="add"/> Add
        </button>
       </div>
       <Select className={`${styles.selectOption}`} value="abc@gmail.com">
   
       </Select>

       <input className={`${styles.radioBtn}`} type="radio" aria-label="helllo"/>
       <input className={`${styles.radioBtn}`} type="radio" aria-label="helllo"/>
       <textarea className={`${styles.textArea}`}></textarea>
    </div>  
  );
};

export default PostForm;

