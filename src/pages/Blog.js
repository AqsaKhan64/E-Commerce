
import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Sidepanel from '../components/Sidepanel'
import Container from '@mui/material/Container';
import BlogPosts from '../components/BlogPosts';


function Blog() {
  return (
    <Container>
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box><BlogPosts /></Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box><Sidepanel /></Box>
        </Grid>
      </Grid>
    </Box>
      
    </Container>
  )
}

export default Blog
