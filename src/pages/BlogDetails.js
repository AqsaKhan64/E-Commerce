import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Sidepanel from '../components/Sidepanel'
import Container from '@mui/material/Container';
import BlogDleft from '../components/BlogDleft';
import NavBar from '../components/NavBar';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
const pgIcon={
  fontSize: "11px",
 }
 const blog={
  marginTop: "230px"
 }
function BlogDetails() {
  return (
  <>
   <Grid>
      <NavBar/>
    </Grid>
    <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">BLOG DETAILS</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} class="fa-regular fa-greater-than"></i>  BLOG DETAILS</Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
  <Container >
     < >
      <Grid container spacing={2} style={blog}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box><BlogDleft /></Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box><Sidepanel /></Box>
        </Grid>
      </Grid>
    </>
  </Container>
  <Grid>
      <Footer/>
    </Grid>
    </>
  )
}

export default BlogDetails
