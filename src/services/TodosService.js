import React from 'react';
import axios from 'axios'
import AuthHeader from './AuthHeader';



  const API_URL = "https://pm-server.vercel.app/v1/todos/";
///get todoss

const get_todos = async () => {
  let user = window.localStorage.getItem("user");

  user = JSON.parse(user);
  let userId = user.user.id;
  const response = await axios.get(API_URL + `getTodosByUserId/${userId}`);
  return response;
};
//get todos by Id

const get_todos_Id = (id) => {
  return axios.get(API_URL + `getTodos/${id}`);
};
//

const add_todos = async (todos) => {
    const response = await axios.post(API_URL + "createTodos", todos);
    return response;
  }
  
const deletetodos = (id) => {
  return axios.delete(API_URL + "deleteTodos/" + id);
};


const updatetodos = (id, todos) => {
  return axios.post(API_URL + "updateTodos/" + id, todos);
};

const TodosService = {
  get_todos_Id,
  deletetodos,
  updatetodos,
  add_todos,
  get_todos,
};
export default TodosService;
/////


