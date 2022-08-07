import React from 'react'
import { Stack, Typography, Box } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  console.log('targetMuscleExercises', targetMuscleExercises);
  return (
    <Box
      // sx={{
      //   mt: {lg:'100px', xs:'0'}
      // }}
      p='10px'
    >
      <Typography variant='h5' mb='33px'>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction='row'
        sx={{p: '2', position:'relative'}}
      >
        {targetMuscleExercises.length ?
          <HorizontalScrollBar data={targetMuscleExercises}/>
        : <Loader/>
        }
      </Stack>
      <Typography variant='h5' mb='33px'>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction='row'
        sx={{p: '2', position:'relative'}}
      >
        {equipmentExercises.length ?
          <HorizontalScrollBar data={equipmentExercises}/>
        : <Loader/>
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises