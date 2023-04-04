import { Typography, TextField,Button,Box,Grid} from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import img1 from '../images/img1.jpeg'

const bg = {
  backgroundImage:`url(${img1})`,
  backgroundSize:'cover',
  backgroundPosition:'fixed',
  backgroundRepeat:'no-repeat',
  height:'100vh',
  width:'100%',
}
const card = {
  background:'white',
  position:'absolute',
  width:'43%',
  height:'90vh',
  top:'5%',
  left:'30%', 
}
const loginHeading = {
  textAlign:'center',
  paddingTop:'35px',
  fontWeight:'600',
  color: '#140C40',
}
const logintext = {
  textAlign:'center',
  color:'grey',
  lineHeight:'3.5',
  fontSize:'14px',
  fontWeight:'normal',
}
const formContent = {
  colour:'#140C40',
  textAlign:'left',
  fontWeight:'600',
  fontSize:'17px',
  paddingTop:'20px',
  marginLeft:'28px',
}
const field ={
  width:'80%',
  marginLeft:'28px',
  paddingTop:'5px',
}
const box ={
  paddingTop:'20px',
  marginLeft:'28px',
}
const link = {
  float:'right',
  color:'#FD8F5F',
  fontSize:'17px',
  marginRight:'60px',
  paddingTop:'10px',
}
const loginFooter ={
  paddingTop:'40px',
  marginLeft:'30px',
  color:'grey',
  fontSize:'14px',
}
const inputFooter = {
  display:'flex',
  paddingTop:'20px',
}
const up={
  color:'#FD8F5F',
  fontSize:'14px',
  textDecoration:'none',
}
const btn = {
 backgroundColor:'#FD8F5F',
 padding:'10px 38px',
 marginLeft:'110px',
 marginTop:'25px',
 height:'55px',
 color:'white',
 fontSize:'16px',
}


function Login () {
  return (
    <>
     <Box style={bg} className='banner'>
     <Box style={card} className='bannerForm'>
     <Grid item sm={12}>
     <Typography style={loginHeading} variant='h4' className='login'>Login</Typography>
     <Typography style={logintext} className='bannerpara'>Enter Login details to get access</Typography>
     </Grid>
    
     <Grid container item>
      <Grid item sm={12}>
      <form>
      <Typography style={formContent} className='name'>Username Or Email Address</Typography>
       <TextField style={field} className='feildInput' id="outlined-basic" variant="outlined" placeholder='Username Or Email Address'/>
       <Typography style={formContent}>Password</Typography>
       <TextField style={field} className='feildInput' id="outlined-basic" variant="outlined" placeholder='Enter Password'/>
     </form>
      </Grid>
      <Box style={box}>
     <FormControlLabel control={<Checkbox defaultChecked />} label="Keep Me Logged In"  />
      <Grid item sm={12}>
     <Typography style={link} className='paswrd'>Forget Password?</Typography>
     </Grid>
     </Box>
    
     <Box style={inputFooter}>
      <Grid item sm={12}>
      <Typography style={loginFooter} className='btnContent'>Don’t have an account?<a href='#' style={up}>Sign Up</a> here</Typography>
      </Grid>
      <Grid item sm={12}>
      <Button style={btn} className='btn'>Login</Button>
      </Grid>
     </Box>
     </Grid>
     </Box>
     </Box>

     <br></br>
     <br></br>
   </>
  )
}

export default Login