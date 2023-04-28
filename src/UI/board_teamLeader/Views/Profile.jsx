import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfilePage from './ProfilePage';

const Profile = () => {
  let navigate = useNavigate();
  const [content, setContent] = useState("");
  let user = window.localStorage.getItem("user");
  useEffect(() => {
    user = user ? JSON.parse(user) : navigate("/login");
    setContent(user.user);
    console.log(user.user.id);
  }, []);
  return (
<>
    
      <ProfilePage user={content}/>
</>
  )
}

export default Profile