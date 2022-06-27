import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import HorizentalScrollbar from './HorizentalScrollbar'
import Loader from './Loader'

export default function SimilarExercises({targetMuscleExercises,equipmentExercises}) {
  console.log(targetMuscleExercises.target)
  return (
      <Box sx={{mt: {lg:"100px", xs:"0"}}}>
        <Typography variant = "h3" mb={5} >
          Exercises that target the same muscle group
        </Typography>
        <Stack direction="row" sx={{p:"2",position:"relative"}}>
          {targetMuscleExercises ? <HorizentalScrollbar data={targetMuscleExercises}/>
        : <Loader/>  
        }
        </Stack>
        <Typography variant = "h3" mb={5} >
          Exercises that target the same equipment
        </Typography>
        <Stack direction="row" sx={{p:"2",position:"relative"}}>
          {equipmentExercises ? <HorizentalScrollbar data={equipmentExercises}/>
        : <Loader/>  
        }
        </Stack>
      </Box>
    
  )
}
