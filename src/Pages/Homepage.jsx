import { Box, Button, Typography } from '@mui/material';
import a1 from '../assets/a2.jpg';
import a2 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'
import a7 from '../assets/a7.jpg'
import a8 from '../assets/a8.jpg'
import { Link, useNavigate } from 'react-router';
// import ImageList1 from '../assets/gallery';
import Packages from '../assets/packages';
import { useState } from 'react';
import reviews from '../assets/reviews';
import Reviews from '../assets/reviews';
import PopularSearch from '../Components/Popularsearch';

export default function HomePage() {
  const navigate= useNavigate()
  const [selectedCard, setSelectedCard] = useState(0);
  
  return (
    <>
    <Box 
      sx={{ 
        position: 'relative',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '450px', 
        width: '100%', 
      }}
    >
      <img 
        src={a1} 
        alt="a1" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          color: '#E6A4B4', 
          padding: '16px 24px', 
        }}
      >
        <Button variant='contained' sx={{fontFamily: 'Parisienne' }} onClick={()=>navigate('/weddingplanner')}>Plan Your Wedding with Us.</Button>
      </Box>
    </Box>
          <Packages/>
      <PopularSearch/>
        <Reviews/>
    </>
  );
}