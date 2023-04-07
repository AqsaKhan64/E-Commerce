import React from 'react'
import { Container,Grid} from "@mui/material";
import { Box } from '@mui/system';

    const g1 = require('../images/elements/g1.jpg.webp');
    const g2 = require('../images/elements/g2.jpg.webp');
    const g3 = require('../images/elements/g3.jpg.webp');
    const g4 = require('../images/elements/g4.jpg.webp');
    const g5 = require('../images/elements/g5.jpg.webp');
    const g6 = require('../images/elements/g6.jpg.webp');
    const g7 = require('../images/elements/g7.jpg.webp');
    const g8 = require('../images/elements/g8.jpg.webp');

const ElementGridImg = () => {
  const imgDataOne=[g1,g2,g3]
  // const 
  return (
  
    <>
    <Grid spacing={1}>
    <Grid container spacing={10}>

    {/* <Grid spacing={4} xs={12} lg={4}>
    <Box ><img src={g1} style={{ width: "100%" }}/></Box>
  </Grid>
    <Grid spacing={4} xs={12} lg={4}>
    <Box ><img src={g2} style={{ width: "100%" }}/></Box>
  </Grid>
    <Grid spacing={4} xs={12} lg={4}>
    <Box ><img src={g3} style={{width: "100%" }}/></Box>
  </Grid> */}
        <Grid item lg={4}> <img src={g2} style={{ width: "100%" }} /> </Grid>
        <Grid item lg={4}><img src={g2} style={{ width: "100%" }} /></Grid>
        <Grid item lg={4}><img src={g3} style={{ width: "100%" }} /></Grid>
    </Grid>
    <Grid container spacing={4}>
        <Grid item lg={6}> <img src={g4} sx={{width:'100%'}}/></Grid>
        <Grid item lg={6}> <img src={g5} sx={{width:'100%'}}/></Grid>
    </Grid>
    <Grid container spacing={4}>
        <Grid item lg={4}> <img src={g6} sx={{width:'100%'}}/></Grid>
        <Grid item lg={4}> <img src={g7} sx={{width:'100%'}}/></Grid>
        <Grid item lg={4}> <img src={g8} sx={{width:'100%'}}/></Grid>
    </Grid>
    </Grid>
    </>
  
  )
}

export default ElementGridImg
