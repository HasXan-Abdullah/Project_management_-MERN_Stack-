import { TextField, Typography } from "@mui/material";
import './App.css';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import RegForm from './UI/registeration/RegForm';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./UI/Login/Login";
import Home from "./UI/home/Home";
import MyDashboard from './UI/board_teamLeader/Views/MyDashboard';
import MyPost from "./UI/board_teamLeader/Views/MyPost";
import MyOverview from "./UI/board_teamLeader/Views/MyOverview";
import MyTask from "./UI/board_teamLeader/Views/MyTask";
import TimeTracking from "./UI/board_teamLeader/Views/TimeTracking";
import Scheduling from "./UI/board_teamLeader/Views/Scheduling";
import Reporting from "./UI/board_teamLeader/Views/Reporting";
import MyDiscussion from "./UI/board_teamLeader/Views/MyDiscussion";
import MainLayout from "./UI/board_teamLeader/Layouts/MainLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import typography from "./typography";
function App() {
    const theme = createTheme({
      // typography: {
      //   "fontFamily": `'Comfortaa', cursive`,
      //   "fontSize": 14,
      //   "fontWeightLight": 300,
      //   "fontWeightRegular": 400,
      //   "fontWeightMedium": 500
      //  },
      typography,
    });
  return (
    <div className="App">
      
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/reg" element={<RegForm />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/mydashboard" element={<MyDashboard />} />
            <Route exact path="/post" element={<MyPost />} />
            <Route exact path="/overview" element={<MyOverview />} />
            <Route exact path="/discussion" element={<MyDiscussion />} />
            <Route exact path="/task" element={<MyTask />} />
            <Route exact path="/timetracking" element={<TimeTracking />} />
            <Route exact path="/scheduling" element={<Scheduling />} />
            <Route exact path="/reporting" element={<Reporting />} />
          </Routes>
          <MainLayout />
        </Router>
      </ThemeProvider>
    </div>
  );

}

export default App;
