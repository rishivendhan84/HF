import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function WeddingPlanner() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // height: "80vh", // Optional: Full-screen height
        padding: 2,
        mt:5
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main" }}>
        Make Your Dream Event a Reality!
      </Typography>
      <Typography sx={{ mt: 2, maxWidth: "600px" }}>
        Find venues with all-inclusive pricing (rooms, 3 meals, and event spaces), with available dates and quotes that fit your budget.
      </Typography>
      <Typography sx={{ mt: 2, maxWidth: "600px" }}>
        Get personalized vendor recommendations for photographers, decorators, planners, caterers, makeup artists, and more.
      </Typography>
      <Button onClick={()=>useNavigate('')} sx={{mt:2}} variant="contained"> Book a free consultation</Button>
    </Box>
  );
}

