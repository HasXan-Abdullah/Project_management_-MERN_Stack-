import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import CheckButton from "react-validation/build/button";
import {login} from '../../actions/auth';
import Form from "react-validation/build/form";
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
    Alert,

    Container

} from '@mui/material';
import bg from '../../assets/4380.jpg'
import LockOutlined from '@material-ui/icons/LockOutlined';
import '../registeration/Reg.css'
import { Link } from 'react-router-dom';
const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
const Login = () => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();
    const { message } = useSelector(state => state.message);
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const onChangeemail = (e) => {
      const email = e.target.value;
      setemail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e) => {
      
      e.preventDefault();
  
      setLoading(true);
  
    form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        console.log(" to home")
        dispatch(login(email, password))
        
          .then(() => {
          
            navigate('/home')
           
          })
          .catch((err) => {
            setLoading(false);
            console.log({err})
            
          });
      } else {
        setLoading(false);
        
      }
    };
  
    if (isLoggedIn) {
      return <Navigate to="/home" />;
    }



    return (
    <>
    <div className='loginPage'>
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
              <Form onSubmit={handleLogin} ref={form}>
                  <FormGroup>
                      <FormControl className='textFields'>
                          <InputLabel className='inputLabel' htmlFor="email">Email address</InputLabel>
                          <Input id="email" 
                           name="email"
                           type="email"
                           value={email}
                           onChange={onChangeemail}
                           validations={[required]}
                          aria-describedby="email-text" />

                      </FormControl>
                      <FormControl className='textFields'>
                          <InputLabel className='inputLabel' htmlFor="password">Password</InputLabel>
                          <Input id="password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={onChangePassword}
                          validations={[required]}
                          aria-describedby="password-text" />

                      </FormControl>
                      <FormGroup className='textFields'>
                          <FormControlLabel control={<Checkbox defaultChecked style={{ "color": "#64c5b1" }} />} label="Remmber Me" />

                      </FormGroup>
                  </FormGroup>
                  <Button className='submitBtn' variant="contained" type="submit"disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
                <span>Sign In</span>

              </Button>
              {message && (
                <Alert severity="error">  
                 {message}
                </Alert>
             
            )}
              
            
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
               
              </Form>
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
    </div>
    </>
   
   
  )
}

export default Login