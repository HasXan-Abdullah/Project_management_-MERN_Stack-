import { Box, Typography } from '@mui/material'
import React from 'react'

const SecHeader = (props, color) => {
  return (
    <div>
      <Box sx={{bgcolor:'#83d0c0',
                width:'79.5%',
                height:130,
                mt:'5%',
                ml:'20.5%'

    }}>
      <Typography variant='h1' align="left"  padding={5} >{props.children}</Typography>
      {/* <Typography variant='h3' sx={{color:'white', textAlign:'left'}}>{props.children}</Typography>     */}
    </Box>
    </div>
  )
}

export default SecHeader
