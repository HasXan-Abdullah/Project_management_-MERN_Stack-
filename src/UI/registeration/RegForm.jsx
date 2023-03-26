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
  Container,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Pic2 from '../../assets/images/remote-project-manager-software.png';
import { Link } from "react-router-dom";
import LockOutlined from "@material-ui/icons/LockOutlined";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import CheckButton from "react-validation/build/button";
import { register } from "../../actions/auth";
import Form from "react-validation/build/form";
import Particle from "../../Particle";
import "./Reg.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" category="alert">
        This field is required!
      </div>
    );
  }
};

const Regform = () => {
  ///

  ///

  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();
  const { message } = useSelector((state) => state.message);
  const [category, setcategory] = useState("");
  const [role, setrole] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

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
  const handlecategoryChange = (e) => {
    const category = e.target.value;
    setcategory(category);
  
  };
  const handleroleChange = (e) => {
    const role = e.target.value;
    setrole(role);

  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(category)
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      console.log(" to register");
      dispatch(register(name, email, phone, address, gender, password, category, role))
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          setLoading(false);
          console.log({ err });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
        <Particle/>
        <Container  className="regForm mainRegform">           
        <Paper elevation={10} align="center"> 
            
            <Link to="/">
            {/* <Avatar className="avatarLock" onClick={goBack} sx={{marginRight:125}}> */}
              <ArrowBackIcon  sx={{marginRight:128, marginTop:2 ,color:'#64c5b1' , fontWeight:'bold' , fontSize:'2rem'}}/>
            {/* </Avatar>   */}
            </Link>

        <Grid className="mainContainer" container spacing={0} columns={16} align="center">

    <Grid item xs={8} className="imgSection" >
   <img  width="100%" src={Pic2} alt="bg" className="bgimg"/>
    </Grid>
    <Grid item xs={8} align="center" className="loginContainer">
    <Paper elevation={0} className="paperStyle">
      <div className="regForm">
      <Grid>
            <Avatar className="avatarLock">
              <LockOutlined />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <Form onSubmit={handleRegister} ref={form}>
            <FormGroup>
              <FormControl className="textFields">
                <InputLabel className="inputLabel" htmlFor="name">
                  Full Name
                </InputLabel>
                <Input
                  id="name"
                  aria-describedby="fname-text"
                  name="name"
                  value={name}
                  onChange={onChangename}
                  validations={[required]}
                  required
                />
              </FormControl>
              <FormControl className="textFields">
                <InputLabel className="inputLabel" htmlFor="email">
                  Email address
                </InputLabel>
                <Input
                  id="email"
                  aria-describedby="email-text"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChangeemail}
                  validations={[required]}
                  required
                />
              </FormControl>
              <FormControl className="textFields">
                <InputLabel className="inputLabel" htmlFor="address">
                  Address
                </InputLabel>
                <Input
                  id="address"
                  aria-describedby="address-text"
                  name="address"
                  value={address}
                  onChange={onChangeaddress}
                  validations={[required]}
                  required
                />
              </FormControl>

              <FormControl className="textFields">
                <InputLabel className="inputLabel" htmlFor="Phone">
                  Phone no
                </InputLabel>
                <Input
                  id="Phone"
                  aria-describedby="Phone-text"
                  name="phone"
                  value={phone}
                  onChange={onChangephone}
                  validations={[required]}
                  required
                />
              </FormControl>

              <FormControl className="textFields">
                <InputLabel className="inputLabel" htmlFor="password">
                  Password
                </InputLabel>
                <Input
                  type="password"
                  id="password"
                  aria-describedby="password-text"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                  required
                />
              </FormControl>
              <FormControl className="textFields">
                <InputLabel className="inputLabel" id="demo-simple-select-label">category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="category"
                  name="category"
                  className="inputLabel"
                  value={category}
                  label="category"
                  onChange={handlecategoryChange}
                  validations={[required]}
                  required
                >
                  <MenuItem className="inputLabel" value="leader">Team Leader</MenuItem>
                  <MenuItem  className="inputLabel" value="member">Team Member</MenuItem>
                </Select>
              </FormControl>
                      <FormControl className="textFields">
                        <InputLabel className="inputLabel" id="demo-simple-select-label">role</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="role"
                          name="role"
                          className="inputLabel"
                          value={role}
                          label="role"
                          onChange={handleroleChange}
                          validations={[required]}
                          required
                        >
                          <MenuItem className="inputLabel" value="admin">admin</MenuItem>
                          <MenuItem className="inputLabel" value="user">user</MenuItem>
                        </Select>
                      </FormControl>
             
              <FormControl
                name="gender"
                value={gender}
                onChange={onChangegender}
                validations={[required]}
              >
                <FormLabel
                  className="genderText"
                  id="demo-row-radio-buttons-group-label"
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  // name="row-radio-buttons-group"
                  required
                  name="gender"
                  value={gender}
                  onChange={onChangegender}
                  validations={[required]}
                >
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        className="radioBtn"
                        sx={{
                          "&, &.Mui-checked": {
                            color: "#64c5b1",
                          },
                        }}
                      />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        className="radioBtn"
                        sx={{
                          "&, &.Mui-checked": {
                            color: "#64c5b1",
                          },
                        }}
                      />
                    }
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </FormGroup>

            <Button
              className="submitBtn"
              variant="contained"
              type="submit"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Sign Up</span>
            </Button>

            {message && <Alert severity="error">{message}</Alert>}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>

          <FormGroup className="textFields">
            <span>
              have an account ?
              <Link
                to="/Login"
                component="button"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
               <span id="linkColor">Login</span>
              </Link>
            </span>
          </FormGroup>
      </div>

        </Paper>
    </Grid>
  </Grid>
  </Paper>
  
      </Container>
      </>
  );
};

export default Regform;
