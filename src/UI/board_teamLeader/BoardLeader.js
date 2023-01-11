import React, { useState, useEffect } from "react";
import MainLayout from "./Layouts/MainLayout";
import MyDashboard from "./Views/MyDashboard";
import MyPost from "./Views/MyPost";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import MyOverview from "./Views/MyOverview";
import MyDiscussion from "./Views/MyDiscussion";
import MyTask from "./Views/MyTask";
import TimeTracking from "./Views/TimeTracking";
import Scheduling from "./Views/Scheduling";
import Reporting from "./Views/Reporting";
const BoardLeader = () => {
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   UserService.getUserBoard().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);

  //       if (error.response && error.response.status === 401) {
  //         EventBus.dispatch("logout");
  //       }
  //     }

  //   );
  // }, []);

  return (
    <></>
    // <Routes>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route index element={<MyDashboard />} />
    //     <Route path="/" element={<MyDashboard />} />
    //     <Route path="post" element={<MyPost />} />
    //     <Route path="overview" element={<MyOverview />} />
    //     <Route exact path="discussion" element={<MyDiscussion />} />
    //     <Route exact path="task" element={<MyTask />} />
    //     <Route exact path="timetracking" element={<TimeTracking />} />
    //     <Route exact path="scheduling" element={<Scheduling />} />
    //     <Route exact path="reporting" element={<Reporting />} />
    //   </Route>
    // </Routes>
    // <MainLayout/>
  );
};

export default BoardLeader;
