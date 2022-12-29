import { AppBar, Avatar, Box, Button, Toolbar } from '@mui/material'
// import SearchBar from 'material-ui-search-bar'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MySearch from './MySearch';
import SecHeader from './SecHeader';

const MyHeader = () => {
  return (
    <div>
      <AppBar position='fixed' elevation={0}>
            <Toolbar sx={{ml:'15rem', bgcolor:'rgb(255, 255, 255)' , color:'black'}}>
                {/* FYP */}
                {/* <SearchBar/> */} 
                <MySearch/>
                <Box sx={{
                          ml:65 ,
                          display:'flex',
                          justifyContent:'space-between',
                          width:'5%',
                          mt:0,
                          
                          
                         }}>
                <NotificationsNoneIcon sx ={{color:'rgb(153,153,153)' , fontSize:'1.3rem', "fontWeightLight": 300, cursor:'pointer'}}/>
                <MailOutlineIcon sx ={{color:'rgb(153,153,153)' , fontSize:'1.3rem', cursor:'pointer'}}/>
                
                </Box>
                <Avatar 
                    alt="?"
                    src="/static/images/avatar/1.jpg"
                    sx={{width: 30, height: 30, ml:12}}
                />
            </Toolbar>
        </AppBar>
        
    </div>
  )
}
 
export default MyHeader
