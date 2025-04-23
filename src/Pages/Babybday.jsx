import React from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
// import baby1 from '../assets/baby1.jpg';
// import baby2 from '../assets/baby2.jpg';
// import baby3 from '../assets/baby3.jpg';

export default function BabyBday() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Celebrate Your Little One’s Special Day with Joy!
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'center', mb: 6 }}>
        From magical themes to adorable decor, Happy Freak makes your baby's birthday a day to cherish forever. Whether it's the 1st birthday or 5th, we customize every element to bring your vision to life.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[{ title: "Themed Decorations"},
          { title: "Custom Cakes & Catering"},
          { title: "Fun Games & Activities"}].map((item, ind) => (
          <Grid item xs={12} md={4} key={ind}>
            <Card elevation={15} sx={{ borderRadius: 3 }}>
              {/* <CardMedia
                component="img"
                height="200"
                // image={item.img}
                alt={item.title}
              /> */}
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Let’s make your baby’s birthday magical!
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Book Now
        </Button>
      </Box>
    </Box>
  );
}
