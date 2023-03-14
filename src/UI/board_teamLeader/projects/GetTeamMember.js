import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTeamMembers } from "../../../actions/users";
const GetTeamMember = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { members, loading } = useSelector((state) => state.member);
  // const { userId } = useSelector((state) => state.auth);

  let user = window.localStorage.getItem("user");

  useEffect(() => {
    user = user ? JSON.parse(user) : navigate("/login");
    dispatch(getTeamMembers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading members...</div>;
  }
console.log({members})
  return  {members} ;
};

export default GetTeamMember;
 