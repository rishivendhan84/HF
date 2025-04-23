import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";

export default function CustomisedWeddings(){
    return(
        <>
        <Box sx={{display:'flex'}}>
    <Box sx={{ px: 4, py: 6 }}>
      {/* Hero Section */}
      <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
        Your Dream Wedding, Your Way
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
        From intimate ceremonies to grand celebrations, we specialise in creating magical weddings that reflect your unique story and style. Every element — décor, music, food, entry, and ambiance — is curated just for you.
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={4}>
        {[{
        //   img: decor,
          title: "Personalised Wedding Decor",
          desc: "Choose from floral, royal, boho, or minimalist themes — all tailored to your taste."
        }, {
        //   img: mehendi,
          title: "Mehendi & Sangeet Nights",
          desc: "From folk artists to DJs and vibrant color themes, let your celebrations shine."
        }, {
        //   img: coupleEntry,
          title: "Grand Couple Entries",
          desc: "Make a statement with unique couple entry concepts — smoke bombs, LED drums, vintage cars and more."
        }, {
        //   img: weddingTheme,
          title: "Custom Themes & Rituals",
          desc: "Blend tradition with innovation using handpicked rituals and cultural aesthetics."
        }].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card elevation={15} sx={{ borderRadius: 3 }}>
              {/* <CardMedia
                component="img"
                height="180"
                image={item.img}
                alt={item.title}
              /> */}
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* CTA */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Let’s Start Planning Your Big Day
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get a Free Wedding Consultation
        </Button>
      </Box>
    </Box>
            </Box>
        </>
    )
}