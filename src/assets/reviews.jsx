import { Box, Card, CardContent, Rating, Typography } from "@mui/material"

const reviews=[
    {id:1, name: 'Preetha',rating:5, main: 'Hi Actual aa ungala oru 6  mnths munadiye na contact panan apo ninga ipo than nanga Manargudi la start up panirukom nanga oru panitu pics share panrom ungaluku pudichurunga mela pesalam soninga.. Then na apdiye vitutan again November la contact panan apo elame ok paniyachu.. Irunthalum na entha sample um pakala, nerla kuda pathu pesala.. But na keta elame pakka va panni kuduthutinga. 🥰 tysm team ❤elarum enta ithu ok va irukuma namaku yarne theriyathe lam sonanga na strong aa believe panan... 💯sure ninga ena disappoint panala..... 😇 elarukum unga work pudichu irunthuchu.... 💯Enakum en husband and  families kum romba romba satisfied 😇 maybe future la naraya event kupduvan nenaikuran 🥰💯 And unga team sikiram mela mela reach aaga enoda heartfelt wishes ❤💯😇-𝓅𝓇ℯℯ𝓉𝒽𝒶...🦋'},
    {id:2, name: 'Revathi',rating:5, main: 'Ok pa. Thank you. Happy with your work. Keep it up. All the best for your future endeavours. My best wishes and prayers for you to pursue management Studies in abroad.👍'},
    {id:3, name: 'Naveena',rating:5, main: 'I have been in touch with you since the beginning of this month. You are answering every question I ask ..You did not even frown one day & i like the respectful manner...you did all the work perfectly as i told......I like your service so much ... last night I am also surprised ...Even midnight its risky time you did it clean & perfect ....I call you if I need anything in the future... thank you so much.....My heartfelt congratulations on you grow even more & upcoming projects💐✨'},
    {id:4, name: 'Sindhu',rating:5, main: 'Thank you so much everyone for making this day extra special, and definitely my heartfelt wishes to HF Event planners, they accepted my request even though it was last minute. This wouldnot be possible without you guys. lots of love'}
]

export default function Reviews(){
    return(
        <>
        <Box sx={{ mt: 8, px: 3 }}>
        <Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
          💬 What Our Happy Clients Say
        </Typography>
        </Box>
         <Box
          sx={{
            display: 'flex',
            gap: 4,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            pb: 2,
          }}
        >
        {reviews.map((r, i) => (
          <Card key={i} sx={{ minWidth: 300, scrollSnapAlign: 'center', bgcolor: '#fafafa' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {/* <Avatar src={r.avatar} sx={{ mr: 2 }} /> */}
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {r.name}
                  </Typography>
                  <Rating value={r.rating} readOnly size="small" />
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: '#444' }}>
                “{r.main}”
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
        </>
    )
}