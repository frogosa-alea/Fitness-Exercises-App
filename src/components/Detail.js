import React from 'react'
import { Stack, Typography, Button, } from '@mui/material';

import TargetImage from '../assets/icons/target.png';
import BodyPartImage from '../assets/icons/body-part.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({ exerciseDetail }) => {
  const {
    bodyPart,
    gifUrl,
    name,
    target,
    equipment,
  } = exerciseDetail;
  // console.log('Detail Component exerciseDetail', exerciseDetail);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]
  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: {lg:'row'},
        p: '40px',
        alignItems:'center',
      }}
    >
      <Stack
        sx={{
          gap: {lg: '35px', sx:'20px'}
        }}
      >
        <Typography variant="h4" style={{textTransform: 'capitalize', fontWeight: 'bold', color:'#2c2c4c'}}>
          {name }
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.
          {name} {``} bup is one of the best exercises to target your {target}.
          It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: '#2c2c4c',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{width:'40px', height:'40px'}}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
    </Stack>
  )
}

export default Detail