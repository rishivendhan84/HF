import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
// import photo1 from '../assets/photo1.jpg';
// import photo2 from '../assets/photo2.jpg';
// import photo3 from '../assets/photo3.jpg';

export default function Photography() {
  return (
    <Box sx={{ p: 4 }}>
      {/* Main Section */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
        Capture Every Precious Moment
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 5 }}>
        Our professional photography and videography services ensure every laugh, tear, and celebration is beautifully preserved. Be it a dreamy wedding, vibrant birthday, or a grand corporate event — we capture it all with elegance and creativity.
      </Typography>

      {/* Services */}
      <Grid container spacing={4} justifyContent="center">
        {[{ title: "Candid Photography", desc: "Natural, storytelling-style photography that captures genuine emotions."},
          {title: "Traditional Coverage", desc: "Classic group shots and ceremonial moments in timeless style."},
          { title: "Cinematic Videography", desc: "High-end videos with cinematic cuts, transitions & storytelling."}]
          .map((item, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card elevation={15} sx={{ borderRadius: 3 }}>
              {/* <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.title}
              /> */}
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* CtA */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Ready to Freeze Your Favorite Memories?
        </Typography>
        <Button variant="contained" size="large" color="primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Book a Photographer
        </Button>
      </Box>
    </Box>
  );
}
