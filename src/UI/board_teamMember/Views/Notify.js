import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Notify = () => {
    const [openNoti, setOpenNoti] = React.useState(false);

    const handleClick = () => {
        setOpenNoti(true);
    };
  
    const handleCloseNoti = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenNoti(false);
    };
  
    return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button>
        <Snackbar open={openNoti} autoHideDuration={6000} onClose={handleCloseNoti}>
          <Alert onClose={handleCloseNoti} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
   
   
      </Stack>
    );
}

export default Notify