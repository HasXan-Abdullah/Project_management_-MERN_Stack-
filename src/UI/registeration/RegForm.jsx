import {
    Avatar,
    Radio,
    Grid,
    Paper,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    RadioGroup,
    Input,
    Alert,
    InputLabel,
    FormHelperText,
    Container

} from '@mui/material';
import {Link} from 'react-router-dom';
import LockOutlined from '@material-ui/icons/LockOutlined';
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import CheckButton from "react-validation/build/button";
import {register} from '../../actions/auth';
import Form from "react-validation/build/form";
 
import './Reg.css';
 
const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };


const Regform = () => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();
    const { message } = useSelector(state => state.message);
   
    const [gender,setGender]= useState("");
    const [address,setAddress]= useState("");
    const [phone,setPhone]= useState("");
    const [name,setName]= useState("");
    
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();
 
    const onChangegender = (e) => {
        const gender = e.target.value;
        setGender(gender);
      };
      const onChangeaddress = (e) => {
        const address = e.target.value;
        setAddress(address);
      };
      const onChangename = (e) => {
        const name = e.target.value;
        setName(name);
      };      
      const onChangephone = (e) => {
        const phone = e.target.value;
        setPhone(phone);
      };

    const onChangeemail = (e) => {
      const email = e.target.value;
      setemail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
    const handleRegister = (e)=>{
          
      e.preventDefault();
  
      setLoading(true);
  
    form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        console.log(" to register")
        dispatch(register(name,email,phone,address,gender,password))
        
          .then(() => {
          
            navigate('/login')
           
          })
          .catch((err) => {
            setLoading(false);
            console.log({err})
            
          });
      } else {
        setLoading(false);
        
      }
    }
  

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
                <Form onSubmit={handleRegister} ref={form}>
                    <FormGroup>
                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="name">Full Name</InputLabel>
                            <Input id="name" aria-describedby="fname-text"
                             name="name"
                             value={name}
                             onChange={onChangename}
                             validations={[required]} />

                        </FormControl>                        
                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="email">Email address</InputLabel>
                            <Input id="email" aria-describedby="email-text" 
                             name="email"
                             value={email}
                             onChange={onChangeemail}
                             validations={[required]}/>

                        </FormControl>
                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="address">Address</InputLabel>
                            <Input id="address" aria-describedby="address-text" 
                             name="address"
                             value={address}
                             onChange={onChangeaddress}
                             validations={[required]}/>

                        </FormControl>
                        
                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="Phone">Phone no</InputLabel>
                            <Input id="Phone" aria-describedby="Phone-text" 
                             name="phone"
                             value={phone}
                             onChange={onChangephone}
                             validations={[required]}/>

                        </FormControl>

                        <FormControl className='textFields'>
                            <InputLabel className='inputLabel' htmlFor="password">Password</InputLabel>
                            <Input type='password' id="password" aria-describedby="password-text" 
                             name="password"
                             value={password}
                             onChange={onChangePassword}
                             validations={[required]}/>

                        </FormControl>
                        <FormControl 
                         name="gender"
                         value={gender}
                         onChange={onChangegender}
                         validations={[required]}>
                        <FormLabel className='genderText' id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            
                        >
                            <FormControlLabel  value="female" control={<Radio className='radioBtn'
                             sx={{
                                '&, &.Mui-checked': {
                                  color: '#64c5b1',
                                },
                              }}
                            />} label="Female" />
                            <FormControlLabel value="male" control={<Radio  className='radioBtn'
                              sx={{
                                '&, &.Mui-checked': {
                                  color: '#64c5b1',
                                },
                              }}                           
                            />} label="Male" />
                           
                          
                        </RadioGroup>
                        </FormControl>
                     

                    </FormGroup>
                    
                    <Button className='submitBtn' variant="contained" type="submit"disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
                <span>Sign Up</span>
                
              </Button>


              {message && (
                <Alert severity="error">  
                 {message}
                </Alert>
             
            )}
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
               
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