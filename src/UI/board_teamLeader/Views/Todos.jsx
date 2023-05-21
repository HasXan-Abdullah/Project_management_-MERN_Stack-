import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, IconButton,Typography,Popover,List,ListItem,ListItemText } from '@material-ui/core';
import { AddCircle, Delete, Edit } from '@material-ui/icons';
import { add_todos, getTodos, deleteTodos, updateTodos } from '../../../actions/todos';
import { useNavigate } from 'react-router-dom';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';

// import Typography from '@mui/material/Typography';
// import Popover from '@mui/material/Popover';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding:theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  textField: {
    
    marginRight: theme.spacing(2),
  },
  addButton: {
    backgroundColor:'#83D0C0',
    marginTop: theme.spacing(1),
  },

}));

const Todo = () => { 
  const user = useSelector((state) => state.auth.user);
  const [todo, setTodo] = useState('');
  const [user_id,setUser_id] = useState(user.user.id)
  const [editIndex, setEditIndex] = useState(-1);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const todos = useSelector((state) => state.todos.todos);

  //
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;




  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      dispatch(getTodos());
    }
  }, [user, navigate, dispatch]);

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      const todoData = {
        userRef: user_id, // Pass user_id as userRef
        todo: todo,
      };
      dispatch(add_todos(todoData)).then(() => {
        setTodo('');
        dispatch(getTodos());
      });
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setTodo(todos[index]?.todo || '');
  };

  const handleUpdateTodo = () => {
    if (todo.trim() !== '') {
      if (todos[editIndex]) {
        const updatedTodo = {
          id: todos[editIndex]._id,
          todo,
        };
        dispatch(updateTodos(updatedTodo.id, { todo: updatedTodo.todo })).then(() => {
          setTodo('');
          setEditIndex(-1);
          dispatch(getTodos());
        });
      }
    }
  };

  const handleDeleteTodos = (index) => {
    if (todos[index]) {
      const todoId = todos[index]._id;
      dispatch(deleteTodos(todoId)).then(() => {
        dispatch(getTodos());
      });
    }
  };

  return (
    
    



<div >
      <Button aria-describedby={id} variant="" style={{
   
         position: 'fixed',
         bottom: '20px',
         right: '20px',
         backgroundColor: '#83D0C0',
         color: 'white',
         width: '50px',
         height: '50px',
         borderRadius: '50%',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
      }} onClick={handleClick}>
      <PlaylistAddIcon />
      </Button>
      <Popover
      
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography sx={{ p: 2 }}>
        <div>
      
        <form className={classes.form}>
  <TextField
    id="todo"
    name="todo"
    label="Todo"
    variant="outlined"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    className={classes.textField}
    fullWidth
  />
  {editIndex === -1 ? (
    <Button
      variant="contained"
      color="primary"
      onClick={handleAddTodo}
      startIcon={<AddCircle />}
      className={classes.addButton}
      fullWidth
    >
      Add Todo
    </Button>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={handleUpdateTodo}
      startIcon={<Edit />}
      className={classes.addButton}
      fullWidth
    >
      Update Todo
    </Button>
  )}
</form>

{todos && todos.length > 0 ? (
  <List>
    {todos.map((todoItem, index) => (
      <ListItem key={todoItem ? todoItem.id : ''}>
        <ListItemText primary={todoItem ? todoItem.todo : ''} />
        <IconButton aria-label="Edit Todo" onClick={() => handleEditTodo(index)}>
          <Edit />
        </IconButton>
        <IconButton aria-label="Delete Todo" onClick={() => handleDeleteTodos(index)}>
          <Delete />
        </IconButton>
      </ListItem>
    ))}
  </List>
) : (
  <p>No todos available.</p>
)}

</div>


        </Typography>
      </Popover>
    </div>

 
  );
};

export default Todo;
