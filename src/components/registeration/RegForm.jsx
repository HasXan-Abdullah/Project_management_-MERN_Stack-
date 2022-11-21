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
    FormHelperText,
    Container

} from '@mui/material';
import {Link} from 'react-router-dom';
import LockOutlined from '@material-ui/icons/LockOutlined';
import React from 'react'
 
import './Reg.css';
 



const Regform = () => {
    return (
        <Container maxWidth="sm" 
       
        >
           <Grid align="center" >
            <Paper elevation={10} className="paperStyle">

                <Grid>
                    <Avatar className='avatarLock'>
                        <LockOutlined />
                    </Avatar>
                    <h2>
                        Sign Up 
                    </h2>
                </Grid>
                <form>
                    <FormGroup>
                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="fname">Full Name</InputLabel>
                            <Input id="fname" aria-describedby="fname-text" />

                        </FormControl>
                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="Lname">Last Name</InputLabel>
                            <Input id="Lname" aria-describedby="Lname-text" />

                        </FormControl>
                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="email">Email address</InputLabel>
                            <Input id="email" aria-describedby="email-text" />

                        </FormControl>
                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="password">Password</InputLabel>
                            <Input type='password' id="password" aria-describedby="password-text" />

                        </FormControl>

                    </FormGroup>
                    
                    <Button className='submitBtn' variant="contained" >Sign Up</Button>
                </form>
               
                <FormGroup className='textFields'>
                     <span>
                
                     have an account ?
                        <Link
                        to='/Login'
                        component="button"

                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                    >
                        Login
                    </Link>
                </span></FormGroup>
               

            </Paper>
        </Grid>
 
        </Container>
        


    )
}

export default Regform