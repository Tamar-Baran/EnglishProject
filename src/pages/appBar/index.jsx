import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SchoolIcon from '@mui/icons-material/School';
import MenuListComposition from './MenuListComposition';

const pages = ['Home', 'AboutUs','personal-area'];
const settings = ['Login','Profile','Level' ];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
    
  const handleCloseNavMenu = (page) => {
    
    navigate(`/${page}`)
    console.log(page)
    setAnchorElNav(null);
   
  };

  const handleCloseUserMenu = (page) => {
     navigate(`/${page}`)
    console.log(page)
    setAnchorElUser(null)
   
  };

  return (
    <AppBar position="static" style={{ background: 'white', height:70}} >
      <Container  style={{marginTop:-20 }}  >
        <Toolbar >
          <SchoolIcon sx={{ display: { xs: 'none', md: 'flex', color:'#79b7c0', }, mr: 1 }}/>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Handlee", cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color:'#79b7c0',
              textDecoration: 'none',
              fontSize:40
            }}
          >
            ENGLISH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='pink'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                
                <MenuItem  key={page} onClick={(e)=>handleCloseNavMenu(page)}>
                  <Typography style={{gap:100}} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuListComposition></MenuListComposition>
            </Menu>
            
          </Box>
          <SchoolIcon></SchoolIcon>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: '"Handlee", cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#00394f',
              textDecoration: 'none',
              fontFamily:'"Handlee", cursive',
              
            }}
          >
            English
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(e)=>handleCloseNavMenu(page)}
                sx={{ fontFamily:'"Handlee", cursive', color: '#00394f', display: 'block' }}
              >
                {page}
              </Button>
            ))}              
             <MenuListComposition  sx={{  color: '#00394f', display: 'block' }}></MenuListComposition>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={(e)=>handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>

              ))}
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
