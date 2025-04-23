import React, { useState } from 'react';
import { Box, Typography, TextField, MenuItem, Button, Grid, Paper } from '@mui/material';
import cities from '../assets/cities';
import { useLocation } from 'react-router';

const eventTypes = [
  'Wedding',
  'Birthday Party',
  'Baby Shower',
  'Corporate Event',
  'Engagement',
  'Other'
];

export default function Booking() {
    const location = useLocation()
    const data = location.state.card
    console.log(data)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    eventType: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted! We will get back to you shortly.');
    setForm({
      name: '',
      email: '',
      phone: '',
      city: '',
      eventType: '',
      date: '',
      message: ''
    });
  };

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Book Your Celebration
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
        Fill in the details below and our team will connect with you to turn your dream event into reality.
      </Typography>

      <Grid container>
        <Grid item xs={12} md={8}>
          {/* <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}> */}
            {/* <form onSubmit={handleSubmit}> */}
              {/* <Grid container spacing={2}> */}
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} type="email" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number" name="phone" value={form.phone} onChange={handleChange} required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="City"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  >
                    {cities.map((city, index) => (
                      <MenuItem key={index} value={city.name}>{city.name}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Event Type"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    required
                  >
                    {eventTypes.map((type, index) => (
                      <MenuItem key={index} value={type}>{type}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Preferred Date"
                    name="date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Additional Message / Notes"
                    name="message"
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button type="submit" variant="contained" size="large">
                    Submit Booking
                  </Button>
                </Grid>
              {/* </Grid> */}
            {/* </form> */}
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Box>
  );
}
