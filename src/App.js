import { TextField, Typography } from "@mui/material";
import './App.css';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import RegForm from './components/registeration/RegForm';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reg" element={<RegForm />} />
        </Routes>
      </Router>
      ,
    </div>
  );

}

export default App;
