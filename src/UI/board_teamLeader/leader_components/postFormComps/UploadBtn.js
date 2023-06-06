// import React from 'react';
// import styles from './postForm.module.css';
// import uploadBtnIcon from '../../../../assets/images/Vector.png';
// import FileBase64 from 'react-file-base64';

// const 
// UploadBtn = ({ onDone,value,label}) => {
//   return (
//     <div>
// <label className={`${styles.inpLables} mt-4 mb-2`}>{label}</label>
//       <label className={`${styles.uploadBtn} `} >
  
//          <FileBase64 multiple={false}  id="actual-btn" value={value}  type="file" onDone={onDone} />
   
//    <div className={`d-flex`}>
//     <div className={`${styles.uploadBtnContent}`}>
//       <img src={uploadBtnIcon} alt="uploadicon"/> 
//     </div>
//      <div className={`${styles.uploadBtnText}`}>
//       <span>Upload Project </span>
//      </div>
      
//    </div>

         
// </label>
//     </div>
//   );
// };

// export default UploadBtn;
import React, { useState } from 'react';
import styles from './postForm.module.css';
import uploadBtnIcon from '../../../../assets/images/Vector.png';
import FileBase64 from 'react-file-base64';

const UploadBtn = ({ onDone, value, label }) => {
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (files) => {
    setLoading(true);
    const file = files[0];

    // Perform necessary operations with the file

    // Set the file name
    setFileName('File Uploaded');

    setLoading(false);

    // Call the onDone prop if it exists
    if (onDone) {
      onDone(files);
    }
  };

  return (
    <div>
      <label className={`${styles.inpLables} mt-4 mb-2`}>{label}</label>
      <label className={`${styles.uploadBtn}`}>
        <FileBase64
          multiple={false}
          id="actual-btn"
          value={value}
          type="file"
          onDone={handleFileUpload} // Use the modified handleFileUpload function
        />

        <div className={`d-flex`}>
          <div className={`${styles.uploadBtnContent}`}>
            {loading ? (
              <img src='' alt="loading" />
            ) : (
              <img src={uploadBtnIcon} alt="uploadicon" />
            )}
          </div>
          <div className={`${styles.uploadBtnText}`}>
            <span>
              {loading ? 'Uploading...' : fileName || 'Upload File'}
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default UploadBtn;

