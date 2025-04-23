import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";
import c3 from '../assets/c3.jpg';


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
     <img 
        src={c3} 
        alt="c1" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
      />
      <Paper
        elevation={20}
        sx={{mt:24, position: 'absolute', p: 4, width: 400 ,textAlign: "center", bgcolor: "background.paper" }}
      >
        <Typography sx={{fontWeight:'bold'}} variant="h4" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          We'd love to hear from you! Fill out the form below and we'll be in touch.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
