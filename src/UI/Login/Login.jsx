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
import Pic1 from '../../assets/images/pic1.jpg'
import LockOutlined from '@material-ui/icons/LockOutlined';
import '../registeration/Reg.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { CLEAR_MESSAGE } from "../../actions/types";
import Particle from "../../Particle";
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
    let { message } = useSelector(state => state.message);
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
          
            navigate('/main')
            dispatch({
              type:CLEAR_MESSAGE,
            })
          })
          .catch((err) => {
            setLoading(false);
            console.log({err})
            
          });
      } else {
        setLoading(false);
        message = null;
      }
    };
  
    if (isLoggedIn) {
      return <Navigate to="/main" />;
    }



    return (
      
    <>
    <Particle/>
    <div className='loginPage'>
    <Container >
      <Paper elevation={10}>    
        <Link to="/home">  
          <ArrowBackIcon sx={{marginRight:10, marginTop:2 ,color:'#64c5b1' , fontWeight:'bold' , fontSize:'2rem'}}/>
        </Link>
      <Grid className="mainContainer" container spacing={0} columns={16}>
  <Grid item xs={8} className="imgSection" >
 <img  width="100%" src={Pic1} alt="bg" className="BGimg"/>
  </Grid>
  <Grid item xs={8} align="center" className="loginContainer">
  <Paper   className="paperStyle loginContainer" >
    
    <Grid>
        <Avatar className='avatarLock'>
            <LockOutlined />
        </Avatar>
        <h2 className="">
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
                aria-describedby="email-text"
                required />

            </FormControl>
            <FormControl className='textFields'>
                <InputLabel className='inputLabel' htmlFor="password">Password</InputLabel>
                <Input id="password"
                name="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                aria-describedby="password-text" 
                required/>

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
    {
      message && (
        <Alert severity="error">  
         {message}
        </Alert>
     
    )

    }
     {
      !message && (
        null
     
    )
    
    }
    
  
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
                <span id="linkColor">Create Account</span>
            </Link>
        </span></FormGroup>


</Paper>
  </Grid>
</Grid>
</Paper>

    </Container>
    </div>
    </>
   
   
  )
}

export default Login