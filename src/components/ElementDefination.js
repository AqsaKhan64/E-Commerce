import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ElementDefination = () => {
  return (
    <div>
       <Typography sx={{fontSize:17, fontFamily:'poppins',fontWeight:600, marginBlock:3}}>Defination</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
           <Box><Typography sx={{fontSize:15, fontFamily:'poppins', marginBlock:2}}>Definition 01</Typography>
        <Typography  sx={{fontSize:14, fontFamily:'poppins', marginBottom:5}}>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
        <Box><Typography sx={{fontSize:15, fontFamily:'poppins', marginBlock:2}}>Definition 02</Typography>
        <Typography sx={{fontSize:14, fontFamily:'poppins', marginBottom:5}}>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
        <Box><Typography sx={{fontSize:15, fontFamily:'poppins', marginBlock:2}}>Definition 03</Typography>
        <Typography  sx={{fontSize:14, fontFamily:'poppins', marginBottom:5}}>Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks</Typography>
          </Box>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default ElementDefination
