import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import MyPost from '../../Views/MyPost';
import { Route, Routes } from 'react-router-dom';
import MyDashboard from '../../Views/MyDashboard';
import Todos from '../../Views/Todos';
import MyDiscussion from '../../Views/MyDiscussion';
import ProjectsList from '../../Views/ProjectsList';
import TimeTracking from '../../Views/TimeTracking';
import Scheduling from '../../Views/Scheduling';
import Reporting from '../../Views/Reporting';
import LeaderSideBar from '../../../Components/LeaderSideBar';
import AvatarMenu from '../avatarmenu/AvatarMenu';
import { Container } from '@mui/material';
import Update from '../../Views/Update';
import SingleProject from '../../projects/SingleProject';
import Profile from '../../Views/Profile';
import { useSelector } from 'react-redux';
import Todo from '../../Views/Todos';
import AssignedTask from '../../../board_teamMember/Views/AssignedTask';
import MemberDashboard from '../../../board_teamMember/Views/MemberDashboard';
import Submissions from '../../../board_teamMember/Views/Submissions';
import MemberSubmission from '../../Views/MemberSubmission';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function SideMenu() {
  
    const user = useSelector((state) => state.auth.user);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ display: 'flex'}}   >
            <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ bgcolor: '#83d0c0' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                    {user.user.category !== 'leader' ? 'Member' : 'Leader'}

                    </Typography>
<AvatarMenu />
                </Toolbar>
                
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
               <LeaderSideBar/>

            </Drawer>
            <Main open={open}>
            <div style={{
       
       color:"aqua",width:'fit-content'
       ,position:'absolute',
       zIndex:'9',
       top:'80%'
       ,left:'80%'
     }}>
       <Todo/>
     </div>
                    <Routes>
                        
                    {user.user.category !== 'leader' ? <Route index element={<MemberDashboard />} />:  <Route index element={<MyDashboard />} />}
                    {user.user.category == 'leader' ? null:  <Route path='projects' element={<AssignedTask />} />}
                        <Route path="/home" element={<MyDashboard />} />
                        <Route path='submissions' element={<Submissions/>}/>
                        <Route path="post" element={<MyPost />} />
                        <Route path="overview" element={<Todos />} />
                        <Route exact path="discussion" element={<MyDiscussion />} />
                        <Route exact path="projects" element={<ProjectsList />} />
                        <Route exact path="todos" element={<Todos />} />
                        <Route exact path="timetracking" element={<TimeTracking />} />
                        <Route exact path="scheduling" element={<Scheduling />} />
                        <Route exact path="reporting" element={<Reporting />} />
                        <Route exact path='update/:id' element={<Update />}/>
                        <Route exact path='view/:id' element={<SingleProject />} />
                        <Route exact path='profile/:id' element={<Profile />} />


                        <Route exact path='membersubmission' element={<MemberSubmission/>} />
                      
                        
                    </Routes>
            </Main>
        </Box>    
        </div>
  
    );
}