import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Sidepanel from '../components/Sidepanel'
import Container from '@mui/material/Container';
import BlogDleft from '../components/BlogDleft';

function BlogDetails() {
  return (
  <>
  <Container >
     < >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box><BlogDleft /></Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box><Sidepanel /></Box>
        </Grid>
      </Grid>
    </>
  </Container>
    </>
  )
}

export default BlogDetails
