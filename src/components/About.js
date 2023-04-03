import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import img2 from '../images/bg.webp'
import img3 from '../images/about1.png.webp'
import img4 from '../images/about2.png.webp'
import img5 from '../images/insta1.webp'
import img6 from '../images/insta2.webp'
import img7 from '../images/insta.webp'
import NavBar from './NavBar';
import Footer from './Footer';
  const AboutCntnt={
    textAlign: "center",
    marginTop: "200px"
  }
  const AboutCntnt2={
    textAlign: "center",
    marginTop: "100px"
  }
  const about={
    width: "62%",
    fontSize: "18px",
    margin: "auto",
    lineHeight: "27px",
    paddingTop: "30px"
  }
  const abtImg={
    textAlign: "center",
    marginTop: "30px"
  }
  const instaImg={
    width: "100%"
  }
  const instaSec={
    marginTop: "80px"
  }
  const instaInfo={
    padding: "20px 50px"
  }
  const instaHead={
    fontWeight: "bold",
    marginTop: "10px"
  }
  const pgIcon={
   fontSize: "11px",
  }
function About() {
 
  
  return (
    <>
    <Grid>
      <NavBar/>
    </Grid>
    <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">ABOUT</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} class="fa-regular fa-greater-than"></i>  ABOUT</Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
    <Grid item container data-aos="fade-up">
        <Grid item sm={12}>
            <Box style={AboutCntnt}>
                <Typography sx={{fontWeight: "bold"}} className='sec2' variant="h2">OUR STORY</Typography>
                <Typography className='subSec3' style={about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Box>
        </Grid>
    </Grid>
    <Grid item container >
        <Grid  sm={12}>
            <Box style={abtImg} data-aos="fade-up">
            <img className='about-img' src={img3}/>
            </Box>
        </Grid>
    </Grid>
    <Grid item container>
        <Grid item sm={12}>
            <Box style={AboutCntnt2} data-aos="fade-up">
                <Typography sx={{fontWeight: "bold"}} className='sec2' variant="h2">JOURNEY START FROM</Typography>
                <Typography className='subSec3' style={about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Box>
        </Grid>
    </Grid>
    <Grid item container>
        <Grid  sm={12}>
            <Box style={abtImg} data-aos="fade-up">
            <img className='about-img' src={img4}/>
            </Box>
        </Grid>
    </Grid>
    <Grid item container>
        <Grid item sm={12}>
            <Box style={AboutCntnt2} data-aos="fade-up">
                <Typography sx={{fontWeight: "bold"}} className='sec2'  variant="h2">2023</Typography>
                <Typography className='subSec3' style={about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Box>
        </Grid>
    </Grid>
    
    <Grid item container style={instaSec}>
      <Grid item sm={4}>
       <Box style={instaInfo} data-aos="fade-up">
        <img src={img7}/>
        <Typography  className='instaSec' style={instaHead} variant="h3">GET INSPIRED <br></br> WITH <br></br> INSTAGARM</Typography>
        <Typography sx={{mt: 1}}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
       </Box>
      </Grid>
      <Grid item sm={4}>
       <img style={instaImg} src={img5}/>
      </Grid>
      <Grid item sm={4}>
       <img style={instaImg} src={img6}/>
      </Grid>
    </Grid>
    <Grid data-aos="fade-up">
      <Footer/>
    </Grid>
    </>
  )
}

export default About