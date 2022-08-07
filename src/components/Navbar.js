import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Stack, MenuItem  } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/images/Logo.png';
const Navbar = () => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#2c2c4c',
    '&:hover': {
      backgroundColor: 'rgb(44,44,76,0.5)',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#f0eff3'}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                style={{
                  maxWidth:'200px',
                }}
              />
            </Link>
          </Box>
          <Stack
            direction="row"
            gap='40px'
            fontSize='18px'
          >
            <Link
              to="/"
              style={{
                textDecoration:'none',
                color:'#3A1212',
                borderBottom: '3px solid #2c2c4c'
              }}
            >
              Home
            </Link>
            <a
              href='#exercises'
              style={{
                textDecoration: 'none',
                color:'#3A1212',
                paddingRight: '40px'
              }}
            >
              Exercises
            </a>
          </Stack>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar