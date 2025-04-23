import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import TemporaryDrawer from './Sidebar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import cities from '../assets/cities';
import { Link, Links, Outlet, useNavigate } from 'react-router-dom';

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
  const navigate=useNavigate()
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
    <marquee width="100%" direction="left">We create..!! You Celebrate..!!</marquee>
    <Box position='sticky' top='0' sx={{zIndex:1, width: "100%"}}>
      <AppBar position='static'>
        <Toolbar>
          <TemporaryDrawer />
          <Typography onClick={()=>navigate('/')}
            variant="h6"
            noWrap
            component="div"
            sx={{cursor:"pointer", fontWeight:'bold', color:'maroon', display: { xs: 'none', sm: 'block' } }}
          >
            HF Event Planners 
          </Typography>
          <Box sx={{ flexGrow:1 }}>
      <FormControl sx={{ width:150, ml:2}} size="small">
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          value={city}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          
          {cities.map((city,ind)=>
          {return(<MenuItem key={ind} value={city} >{city.name}</MenuItem>)})}
          

        </Select>
      </FormControl>
    </Box>
          <Button color='inherit' onClick={()=>navigate('/')}>Home</Button>
          <Button onClick={()=>navigate('/signin')} color='inherit'>Sign In</Button>
          <Button onClick={()=>navigate('/contactus')} color='inherit'>Contact Us</Button>
          <Search >
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
      <Box sx={{display:'flex', justifyContent:'center', gap:4 }} color={"text.main"} >
        <Button color='inherit' onClick={() => {navigate('/customisedweddings')}} >Customised Weddings</Button>
        <Typography variant="h6">|</Typography>
        <Button color='inherit' onClick={() => navigate('/gallery')}>Gallery</Button> 
        <Typography variant="h6">|</Typography>
        <Button color='inherit' onClick={()=>navigate('/babybday')}>Baby B'day</Button> 
        <Typography variant="h6">|</Typography>
        <Button color='inherit' onClick={()=>{navigate('/photography')}}>Photography/Videography</Button> 
        <Typography variant="h6">|</Typography>
        <Button color='inherit'>Props</Button> 
    </Box>
    </>
  );
}
