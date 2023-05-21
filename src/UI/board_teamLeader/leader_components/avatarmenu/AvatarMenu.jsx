import { Avatar, Button, Menu, MenuItem, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckButton from "react-validation/build/button";
import { logout } from '../../../../actions/auth';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AvatarMenu = (props) => {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [dispatch, navigate, user]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user.user.profilepic} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={`/home/profile/${user.user.id}`} style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: "#64c5b1",
                borderRadius: '20px',
                border: "1px solid #64c5b1",
                m: 1,
              }}
              variant="outlined"
            >
              Profile
            </Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                color: "#64c5b1",
                borderRadius: '20px',
                border: "1px solid #64c5b1",
                m: 1,
              }}
              onClick={logOut}
              variant="outlined"
            >
              Logout
            </Button>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AvatarMenu;
