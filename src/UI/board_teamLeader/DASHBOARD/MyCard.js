import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



const MyCard = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height:200,
       
      }));
      
  return (
    <div>
        <Grid container spacing={3} sx={{mt:-25, height:'111px', width:'45rem'}}>
            <Grid xs= {8} >
                <Item>My Projects</Item>
            </Grid>
            <Grid xs={4}>
                <Item>My Team</Item>
            </Grid>
        </Grid>
    </div>
  )
}

export default MyCard

