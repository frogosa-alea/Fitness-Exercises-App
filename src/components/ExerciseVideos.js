import React from 'react'
import { Stack, Typography, Box } from '@mui/material';


const ExerciseVideos = ({exerciseVideos, name}) => {

  console.log('exerciseVideos', exerciseVideos);
  if(!exerciseVideos.length) return 'Loading...'
  return (
    <Box
      p='10px'
    >
      <Typography variant='h5' mb='33px'>
        Watch <span style={{color:'#2c2c4c', textTransform:'capitalize', color:'#2c2c4c', fontWeight: 'bold'}}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: {lg: 'row'},
          gap: {lg:'110px', xs:'0'},
          backgroundColor:'#f0eff3',
          padding:'20px',
          borderRadius: '10px'
        }}
      >
        {exerciseVideos?.slice(0,3).map((item, index) => (
          <>
            {item.video &&
              <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
                <img src={item.video?.thumbnails[0].url} alt='item.video.title' />
                <Box>
                  <Typography variant='h6' color='#000'>
                    {item.video.title}
                  </Typography>
                  <p>
                    {item.video.channelName}
                  </p>
                </Box>
            </a>
            }
          </>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos