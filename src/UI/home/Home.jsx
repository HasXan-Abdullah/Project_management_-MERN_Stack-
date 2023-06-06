
// import { Link } from "react-router-dom";
// import React, { useState, useEffect, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, useNavigate  } from 'react-router-dom';
// import { logout } from '../../actions/auth';

// import CircularProgress from '@mui/material/CircularProgress';

// const Home = () => {


//   let navigate = useNavigate();
//   const [content, setContent] = useState("");
//   const dispatch = useDispatch();
//   const logOut = useCallback(() => {
//     dispatch(logout());
//   }, [dispatch]);
//   useEffect(() => {
//     let user = window.localStorage.getItem("user");
//     console.log(user);
//     user = user ? JSON.parse(user) : navigate('/login');
//     setContent(user.user);
//   }, []);
  
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulating data loading with a timeout
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // Simulating a 2-second data loading process
//   }, []);
//   console.log(content.category)
//       if (content.category === "leader"){
//     console.log(content.category)
//     return
//        <Navigate to="/home" />
//         </div>;
//     }
//   else  if (content.category === "member"){
//     console.log(content.category)
//     return <Navigate to="/member" />;
//     }



// };

// export default Home


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setContent(parsedUser.user);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoading) {
    return (
     
      
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  <div className="text-center">
    <CircularProgress style={{ color: '#64c5b1' }} />
    <br />
    <div className="mt-3">
      Be patient<br />
      Loading your<br />
      work....
    </div>
  </div>
</div>

    );
  }

  if (content) {
    if (content.category === 'leader') {
      navigate('/home');
    } else if (content.category === 'member') {
      navigate('/home');
    }
  }

  return (
    <div>
      {/* Your Home component content */}
      {content && (
        <div>
          {/* <h1>Welcome, {content.username}!</h1>
          <button onClick={handleLogout}>Logout</button> */}
        </div>
      )}
    </div>
  );
};

export default Home;

