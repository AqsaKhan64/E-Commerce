import { Typography, TextField,Button,Box} from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import img1 from '../imges/img1.jpeg';

const bg = {
  backgroundImage:`url(${img1})`,
  backgroundSize:'cover',
  backgroundPosition:'fixed',
  backgroundRepeat:'no-repeat',
  height:'105vh',
  width:'100%',
}
const card = {
  background:'white',
  position:'absolute',
  width:'43%',
  height:'95vh',
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
     <Box style={bg}></Box>
     <Box style={card}>
     <Typography style={loginHeading} variant='h4'>Login</Typography>
     <Typography style={logintext}>Enter Login details to get access</Typography>
  
     <form>
      <Typography style={formContent}>Username Or Email Address</Typography>
       <TextField style={field} id="outlined-basic" variant="outlined" placeholder='Username Or Email Address'/>
       <Typography style={formContent}>Password</Typography>
       <TextField style={field} id="outlined-basic" variant="outlined" placeholder='Enter Password'/>
     </form>
     <Box style={box}>
     <FormControlLabel control={<Checkbox defaultChecked />} label="Keep Me Logged In"  />
     <Typography style={link}>Forget Password?</Typography>
     </Box>
     <Box style={inputFooter}>
      <Typography style={loginFooter}>Don’t have an account?<a href='#' style={up}>Sign Up</a> here</Typography>
      <Button style={btn}>Login</Button>
     </Box>
     </Box>

     <br></br>
     <br></br>
   </>
  )
}

export default Login