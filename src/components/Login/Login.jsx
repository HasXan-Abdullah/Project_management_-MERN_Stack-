import React from 'react'
import {
    Avatar,
    Grid,
    Paper,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormControl,
    Input,
    InputLabel,

    Container

} from '@mui/material';

import LockOutlined from '@material-ui/icons/LockOutlined';
import '../registeration/Reg.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
      <Container maxWidth="sm">
           <Grid align="center" >
          <Paper elevation={10} className="paperStyle">

              <Grid>
                  <Avatar className='avatarLock'>
                      <LockOutlined />
                  </Avatar>
                  <h2>
                      Sign in
                  </h2>
              </Grid>
              <form>
                  <FormGroup>
                      <FormControl className='textFields'>
                          <InputLabel className='inputLabel' htmlFor="email">Email address</InputLabel>
                          <Input id="email" aria-describedby="email-text" />

                      </FormControl>
                      <FormControl className='textFields'>
                          <InputLabel className='inputLabel' htmlFor="password">Password</InputLabel>
                          <Input id="password" aria-describedby="password-text" />

                      </FormControl>
                      <FormGroup className='textFields'>
                          <FormControlLabel control={<Checkbox defaultChecked style={{ "color": "#64c5b1" }} />} label="Remmber Me" />

                      </FormGroup>
                  </FormGroup>

                  <Button className='submitBtn' variant="contained" >Sign Up</Button>
              </form>
              <FormGroup className='textFields'>
                  <span >

                      haven't Created account Yet ?
                      <Link
                            to="/reg"

                          onClick={() => {
                              console.info("I'm a button.");
                          }}
                      >
                          Create Account
                      </Link>
                  </span></FormGroup>


          </Paper>
      </Grid>

    </Container>
   
  )
}

export default Login