import React from 'react'
import {Box , Stack,Typography} from "@mui/material"
import Icon from "../assets/images/clouds.jpeg"
export default function Footer() {
  return (
    <Box mt="80px"  bgColor="brown">
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <img src={Icon} alt="" width="40px" style={{borderRadius:"50%"}}  height="40px" />
        <Typography variant="h5" pb="20px" mt="20px">
          Made with Passion by Sadi
        </Typography>
      </Stack>
    </Box>
  )
}
