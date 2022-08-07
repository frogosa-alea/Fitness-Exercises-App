import React from 'react'
import {
  Box,
  Stack,
  Typography,
  ButtonPaper,
  Button,
  Paper
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: '50px'
      }}
      position="relative"
      p='20px'
    >
      <Typography
        color="#2c2c4c"
        sx={{
          fontSize: {
            lg: '44px', xs: '40px'
          }
        }}
        fontWeight="600"
      >
        The Hustle Gym
      </Typography>
      <Typography
        fontWeight ='700'
        fontSize="26px"
        mb="23px"
        mt='30px'
      >
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={4}
      >
        Checkout the most effective exercises
      </Typography>
      <Button
        variant='contained'
        color='primary'
        mb={2}
        href='#exercises'
        sx={{
          backgroundColor:'#2c2c4c',
          padding:'10px'
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight='600'
        color='#2c2c4c'
        sx={{
          opacity: 0.1,
          display: {
            lg:'block', xs:'none'
          }
        }}
        fontSize='200px'
      >
        HUSTLE
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner