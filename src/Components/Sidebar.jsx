import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GestureIcon from '@mui/icons-material/Gesture';
import CakeIcon from '@mui/icons-material/Cake';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import { useNavigate } from 'react-router';

export default function TemporaryDrawer() {
  const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
  const sideItems=[{title:'Stage/Mandap Decor', icon:<FilterVintageIcon/>,path:'/mandapdecor'}, 
    {title:'Photography', icon:<PhotoCameraFrontIcon />,path:'/photography' },
    {title:'Videography', icon: <PhotoCameraFrontIcon />,path:'/videography'}, 
    {title:'Sound System', icon: <MusicNoteIcon />,path:'/soundsystem'}, 
    {title:'Costume Designing', icon: <GestureIcon />,path:'/costumedesigning'} ,
    {title:'Cakes & Add-ons', icon: <CakeIcon />,path:'/cakes'},
    { title:'Catering', icon: <DinnerDiningIcon/>,path:'/catering'},
     {title:'Thanksgiving', icon: <CardGiftcardIcon />,path:'/thanksgiving'} ,
      {title:'Additionals', icon: <SwitchAccessShortcutAddIcon />,path:'/additionals'}]
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, color:'inherit' }} role="presentation" onClick={()=>toggleDrawer(false)}>
      <List>
        {sideItems.map((text, index) => (
          <ListItem key={index} disablePadding>

            <ListItemButton onClick={()=>navigate(text.path)}>
              <ListItemIcon>{text.icon}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)} >
            <MenuIcon/>
          </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
