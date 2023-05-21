import React from 'react';
import styles from './postForm.module.css';
import uploadBtnIcon from '../../../../assets/images/Vector.png';
import FileBase64 from 'react-file-base64';

const 
UploadBtn = ({ onDone,value,label}) => {
  return (
    <div>
<label className={`${styles.inpLables} mt-4 mb-2`}>{label}</label>
      <label className={`${styles.uploadBtn} `} >
         <FileBase64 multiple={false}  id="actual-btn" value={value}  type="file" onDone={onDone} />
   
   <div className={`d-flex`}>
    <div className={`${styles.uploadBtnContent}`}>
      <img src={uploadBtnIcon} alt="uploadicon"/> 
    </div>
     <div className={`${styles.uploadBtnText}`}>
      <span>Upload Project </span>
     </div>
      
   </div>

         
</label>
    </div>
  );
};

export default UploadBtn;
