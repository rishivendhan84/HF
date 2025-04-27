import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton } from '@mui/material';
import TemporaryDrawer from './Sidebar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import cities from '../assets/cities';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    width: '150px',
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
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '15ch',
      },
    },
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
    },
  },
};

export default function NavBar() {
  const navigate = useNavigate();
  const [city, setCity] = React.useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Customised Weddings', path: '/customisedweddings' },
    { label: 'Gallery', path: '/gallery' },
    { label: "Baby B'day", path: '/babybday' },
    { label: 'Photography/Videography', path: '/photography' },
    { label: 'Props', path: '#' },
  ];

  return (
    <>
      <marquee
        width="100%"
        direction="left"
        style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', padding: '8px 0' }}
      >
        We create..!! You Celebrate..!!
      </marquee>
      <Box position="sticky" top="0" sx={{ zIndex: 1, width: '100%' }}>
        <AppBar position="static">
          <Toolbar sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
            <TemporaryDrawer />
            <Typography
              onClick={() => navigate('/')}
              variant="h6"
              noWrap
              component="div"
              sx={{
                cursor: 'pointer',
                fontWeight: 'bold',
                color: 'maroon',
                display: { xs: 'none', sm: 'block' },
                fontSize: { xs: '1rem', sm: '1.25rem' },
              }}
            >
              HF Event Planners
            </Typography>
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <FormControl
                sx={{
                  width: { xs: 120, sm: 150 },
                  ml: { xs: 1, sm: 2 },
                  mt: { xs: 1, sm: 0 },
                }}
                size="small"
              >
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  value={city}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  {cities.map((city, ind) => (
                    <MenuItem key={ind} value={city}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button color="inherit" onClick={() => navigate('/')}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate('/signin')}>
                Sign In
              </Button>
              <Button color="inherit" onClick={() => navigate('/contactus')}>
                Contact Us
              </Button>
            </Box>
            <Search sx={{ mt: { xs: 1, sm: 0 } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton
              color="inherit"
              sx={{ display: { md: 'none' } }}
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: { xs: mobileMenuOpen ? 'flex' : 'none', md: 'flex' },
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 2, md: 4 },
          py: 2,
          bgcolor: 'background.paper',
          flexWrap: 'wrap',
        }}
      >
        {navItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <Button
              color="inherit"
              onClick={() => navigate(item.path)}
              sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
            >
              {item.label}
            </Button>
            {index < navItems.length - 1 && (
              <Typography
                variant="h6"
                sx={{
                  display: { xs: 'none', md: 'block' },
                  color: 'text.secondary',
                }}
              >
                |
              </Typography>
            )}
          </React.Fragment>
        ))}
      </Box>
    </>
  );
}