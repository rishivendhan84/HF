import { Box, Button, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const weddingPackages = [
    {
      id: 'silver',
      title: 'Silver Package',
      price: '₹49,999',
      image: '/images/silver.jpg', // replace with actual image
      description: 'Perfect for intimate and budget-conscious celebrations.',
      features: [
        'Basic Venue Decoration',
        'Photography for Main Events',
        'Makeup for Bride',
        'Traditional Catering (Veg)',
        'DJ with Sound System',
        'Basic Wedding Invites (Digital)',
      ],
    },
    {
      id: 'gold',
      title: 'Gold Package',
      price: '₹1,29,999',
      image: '/images/gold.jpg', // replace with actual image
      description: 'A full-service package ideal for mid-sized weddings.',
      features: [
        'Designer Venue Decoration',
        'Full-Day Photography & Videography',
        'Bridal & Groom Makeup',
        'Buffet Catering (Veg & Non-Veg)',
        'Live Band or DJ',
        'Customized Printed Invites',
        'Transportation for Guests',
      ],
    },
    {
      id: 'diamond',
      title: 'Diamond Package',
      price: '₹2,99,999+',
      image: '/images/diamond.jpg', // replace with actual image
      description: 'Premium experience crafted for luxury weddings.',
      features: [
        'Theme-Based Decoration & Lighting',
        'Cinematic Videography & Drone Coverage',
        'Luxury Bridal Makeover',
        'Multi-Cuisine Catering',
        'Celebrity/Anchor/Live Performance',
        'Personalized Wedding Website & Invitations',
        'Luxury Transportation & Guest Management',
        'On-Site Wedding Planner & Support',
      ],
    },
    {
      id: 'custom',
      title: 'Customise Package',
      price : 'click below to select and know your price!',
      description: 'Customise your event with us as you like.',
      features: [
        'Choose your own theme and décor style',
        'Select venue of your choice',
        'Personalized invitation design',
        'Custom menu planning (veg/non-veg)',
        'Flexible event timing and duration',
        'Add or remove activities (games, performances, etc.)',
        'Custom backdrop and stage setup',
        'Personalized cake design',
        'Choice of photographer/videographer',
        'Add-on options: return gifts, live counters, etc.'
      ]
      
    }
  ];
  
  export default function Packages(){
    const navigate = useNavigate();
    return(
        <>
        <Typography sx={{fontWeight:'bold',mt:7, textAlign: 'center', mb:2}} variant='h5'>OUR SERVICES</Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 7,
            p: 2,
          }}
          >
            {weddingPackages.map((card, index) => (
                  // const handleClick = ({})=>( return )
              <Card
                key={card.id}
                sx={{
                  width: 320,
                  borderRadius: 4,
                  boxShadow: 8,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
      <CardActionArea onClick={() => setSelectedCard(index)}>
        {/* <img
          src={card.image}
          alt={card.title}
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          }}
        /> */}
        <CardContent>
          <Typography variant="h6" color='primary.main' sx={{ fontWeight: 'bold', mb: 1 }}>
            {card.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {card.description}
          </Typography>
          <ul style={{ paddingLeft: 18, marginBottom: 10 }}>
            {card.features.slice(0, 4).map((feature, i) => (
              <li key={i} style={{ fontSize: 13 }}>{feature}</li>
            ))}
            {card.features.length > 4 && <li style={{ fontSize: 13 }}>+ more</li>}
          </ul>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#D81B60' }}>
            {card.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => navigate('/booking', {state:{card}})}
        >
          Book Now
        </Button>
      </Box>
    </Card>
  ))}
</Box></>
    )
  }
  