import React from 'react'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import img7 from '../images/services2.svg'
import img8 from '../images/services2.svg'
import img9 from '../images/services3.svg'
import img10 from '../images/services4.svg'
import img11 from '../images/logo2_footer.png.webp'

const service={
    marginTop: "80px",
    backgroundColor: "#F2E1D9",
    padding: "60px",
  }
  const servHead={
    marginLeft: "50px"
  }
  const foter={
    backgroundColor: "#1D2547",
    padding: "100px 80px"
  }
  const fotInfo={
    marginTop: "30px",
      lineHeight: "26px"
  }
  const fot={
    marginLeft: "90px"
  }
  const fot1={
    marginLeft: "40px"
  }
  const fotPara={ 
    background: "#1D2547",
    textAlign: "center",
    color: "white",
    paddingBottom: "50px"
  }
  const fotIcon={
    color: "white",
      border: "1px solid white",
      borderRadius: "50%",
      fontSize: "18px",
      padding: "7px 11px",
      margin: "5px"
  }
function Footer() {
  return (
    <div>
      <Grid item container style={service} className='md-serv'>
      <Grid item lg={3} >
        <Box style={servHead} className='serv-1'>
        <img src={img7}/>
        <Typography variant="h6">Fast & Free Delivery</Typography>
        <Typography variant="p">Free delivery on all orders</Typography>
        </Box>
      </Grid>
      <Grid  item lg={3}>
        <Box className='services'>
        <img src={img8}/>
        <Typography variant="h6">Secure Payment</Typography>
        <Typography variant="p">Free delivery on all orders</Typography>
        </Box>
      </Grid>
      <Grid item lg={3}>
      <Box className='services'>
        <img src={img9}/>
        <Typography variant="h6">Money Back Guarantee</Typography>
        <Typography variant="p">Free delivery on all orders</Typography>
        </Box>
      </Grid>
      <Grid item lg={3}>
      <Box className='services'>
        <img src={img10}/>
        <Typography variant="h6">Online Support</Typography>
        <Typography variant="p">Free delivery on all orders</Typography>
      </Box>
      </Grid>
    </Grid>
    <Grid item container style={foter} className='md-Footer'>
      <Grid className='footer' item sm={3}>
       <img src={img11}/>
       <Typography sx={{color: "white", mt:2}}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
       <Box sx={{mt: 2}}>
        {/* <FacebookOutlinedIcon/> */}
        <i style={fotIcon} class="fa-brands fa-facebook-f"></i>
        <i  style={fotIcon} class="fa-brands fa-pinterest-p"></i>
        <i  style={fotIcon} class="fa-brands fa-twitter"></i>
       </Box>
       
      </Grid>
      <Grid item sm={3}>
        <Box style={fot} className='subFot'>
       <Typography sx={{color: "white", mt:3}} variant="h6">Quick links</Typography>
       <Box style={fotInfo}>
       <Link sx={{color: "white"}} href="#" underline="none">image Liscensin</Link><br></br>
       <Link sx={{color: "white", mt: 1}} href="#" underline="none">style guide</Link><br></br>
       <Link sx={{color: "white", mt: 1}} href="#" underline="none">Privacy Policy</Link>
        </Box>
        </Box>
      </Grid>
      <Grid item sm={3} className='subFooter'>
      <Box style={fot1} >
       <Typography sx={{color: "white", mt:3}} variant="h6">Shop Category</Typography>
       <Box style={fotInfo}>
       <Link sx={{color: "white"}} href="#" underline="none">image Liscensin</Link><br></br>
       <Link sx={{color: "white", mt: 1}} href="#" underline="none">style guide</Link><br></br>
       <Link sx={{color: "white", mt: 1}}  href="#" underline="none">Privacy Policy</Link>
       </Box>
       </Box>
      </Grid>
      <Grid item sm={3} className='subFooter1'>
       <Typography sx={{color: "white", mt:3}} variant="h6">Pertners</Typography>
       <Box  style={fotInfo} >
       <Link sx={{color: "white"}} href="#" underline="none">image Liscensin</Link><br></br>
       <Link sx={{color: "white", mt: 1}} href="#" underline="none">style guide</Link><br></br>
       <Link sx={{color: "white", mt: 1}} href="#" underline="none">Privacy Policy</Link>
       </Box>
      </Grid>
      {/* <Box>
      <i class="fa-solid fa-up"></i>
      </Box> */}
    </Grid>
    <Box  style={fotPara} >
       <Typography sx={{alignCenter: 'center'}} variant="p">Copyright ©2023 All rights reserved |</Typography>
    </Box>
    </div>
  )
}
export default Footer