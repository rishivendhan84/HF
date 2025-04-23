import {
  Paper,
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const list = [
  { name: 'Weddings' },
  { name: 'Corporate Events' },
  { name: 'Birthdays' },
  { name: 'Parties' },
  { name: 'Get Together' },
  { name: 'Flashmob' },
  { name: 'Open Air Theatre' },
  { name: 'Filmography' },
];

export default function Footer() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        mt: 4,
        bgcolor: 'primary.main',
        px: 3,
        py: 4,
      }}>
        {/* Left Section */}
        <Box sx={{
          width: { xs: '100%', md: '25%' },
          mb: { xs: 3, md: 0 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
            Happy Freak -<br />Your personal Event planner
          </Typography>
        </Box>

        {/* Middle List */}
        <Box sx={{
          width: { xs: '100%', md: '35%' },
          display: 'flex',
          justifyContent: 'center',
          mb: { xs: 3, md: 0 },
        }}>
          <List>
            {list.map((item, index) => (
              <ListItemButton
                key={index}
                sx={{
                  padding: '4px 16px',
                  transition: 'transform 0.3s ease-out',
                  '&:hover': { transform: 'scale(1.1)' },
                  color: 'white'
                }}
              >
                <ListItemIcon sx={{ color: 'white' }}>
                  <CardGiftcardIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', md: 'block' },
            bgcolor: 'white',
            mx: 2
          }}
        />

        {/* Right Side */}
        <Box sx={{ width: { xs: '100%', md: '35%' }, textAlign: 'center', color: 'white' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Become a Partner / Vendor
          </Typography>
          <TextField
            placeholder="Your E-mail ID"
            variant="outlined"
            size="small"
            sx={{ bgcolor: 'white', borderRadius: 1, width: '80%' }}
          />
          <Typography variant="body2" sx={{ mt: 1 }}>We will reach you as soon as possible.</Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, bgcolor: 'white', color: 'text.primary' }}
          >
            Submit
          </Button>

          <Divider sx={{ my: 3, bgcolor: 'white' }} />

          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Registered Address</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            No 571, Opposite to Narayni Avenue,<br />
            Madukkur Road, Sundarakkottai,<br />
            Mannargudi - 614001
          </Typography>

          <Box sx={{
            mt: 3,
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1
          }}>
            <Typography variant="body2">Follow us on</Typography>
            <IconButton
              component="a"
              href="https://www.instagram.com/hf_event_planner/"
              target="_blank"
            >
              <InstagramIcon sx={{ color: 'white', fontSize: 28 }} />
            </IconButton>
            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white' }} />
            <CallIcon sx={{ color: 'white', ml: 1 }} />
            <Typography variant="body2">+91 8248647689</Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom Line */}
      <Paper sx={{
        backgroundColor: "#f5f5f5",
        py: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} elevation={0}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} HF Event Management. All Rights Reserved.
        </Typography>
      </Paper>
    </>
  );
}