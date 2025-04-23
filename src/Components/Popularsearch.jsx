import { Box, Typography } from '@mui/material'
import a2 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'
import a7 from '../assets/a7.jpg'
import a8 from '../assets/a8.jpg'
import a9 from '../assets/a9.jpg'


const popularSearch=[
    {
        img: a2,
        title:'Premium Bridal MakeUp'
    },
    {
        img: a4,
        title:'Costume Designers in Chennai'
    },
    {
        img: a5,
        title:'Budget friendly Mehandi Artists'
    },
    {
        img: a6,
        title:'Outdoor Photography'
    }, 
    {
        img: a7,
        title:'Customised Invitations'
    },
    {
        img: a8,
        title:'Authentic Chendamelam'
    },
    {
        img: a9,
        title:'Budjet friendly DJs'
    },
    // {
    //     img: a,
    //     title:''
    // }
]

export default function PopularSearch(){
    return(
        <>
        <Box sx={{mt:5}}>
            <Typography variant='h5' sx={{textAlign:'center', mb:2}}>Popular Searches</Typography>
            <Box sx={{
                display:'flex',
                overflow:'auto',
                gap:3,
                }}>
                    {popularSearch.map(
                        (item,index)=>(
                            <Box key={index} sx={{
                                cursor:'pointer',
                                minwidth:250,

                            }}>
                                <img style={{width: '250px', height: '250px',objectFit: 'cover'}} src={item.img}></img>
                                <Typography sx={{textAlign:'center',mt:1}} variant='subtitle1'>{item.title}</Typography>
                            </Box>
                        )
                    )}
            </Box>
        </Box>
        </>
    )
}
