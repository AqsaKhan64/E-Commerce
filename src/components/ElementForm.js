import { TextField,Typography,Box, Stack, Menu,MenuItem,Button  } from '@mui/material';
import React from 'react'
import "../index.css";
import { useState } from 'react';

const theme= {
    shape:{
  borderRadius:0,
 },
}

const ElementForm = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <dThemeProvider theme={theme}>
      <Typography sx={{ fontSize:16 ,marginBottom:3 , fontWeight:600}}> Form Element</Typography>
      <TextField label="First Name" sx={{ width:'100%',marginBlock:1}}></TextField>
      <TextField label="Middle Name" sx={{ width:'100%',marginBlock:1}}></TextField>
      <TextField label="Last Name" sx={{ width:'100%',marginBlock:1}}></TextField>
      <TextField label="Email Address" sx={{ width:'100%',marginBlock:1}}></TextField>
      <TextField label="Address" sx={{ width:'100%',marginBlock:1}}></TextField>
      {/* city */}
      <Box component='div' sx={{marginBottom:1}}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} sx={{width:'100%', backgroundColor:'#efefee', color:'gray'}}>
              <Stack direction="row" sx={{textAlign:"left"}} ><i class="fa-sharp fa-solid fa-plane" style={{margin:5}}></i> City </Stack>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>City</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Dhaka</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Dilli</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Newyork</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Islamabad</MenuItem>
            </Menu>
      </Box>
      {/* country */}
      <Box component='div' sx={{marginBottom:1}}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} sx={{width:'100%', backgroundColor:'#efefef', color:'gray'}}>
              <Stack direction="row" sx={{textAlign:"left"}} >  <i class="fa-sharp fa-solid fa-globe" style={{margin:4}}></i><Typography sx={{textTransform:'none',fontSize:14}}>Country</Typography></Stack>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Country</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Bangladesh</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>India</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>England</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Srianka</MenuItem>
            </Menu>
      </Box>
      <TextField label="Message" sx={{ width:'100%',marginBlock:1}} multiline></TextField>
      <TextField label="Primary Color" sx={{ width:'100%',marginBlock:1}}></TextField>
      <TextField label="Secondary Color" sx={{ width:'100%',marginBlock:1}}></TextField>
      <TextField label="Accent Color" sx={{ width:'100%',marginBlock:1}}></TextField>
      <TextField label="Secondary Color" sx={{ width:'100%',marginBlock:1}}></TextField>
    </dThemeProvider>
  )
}

export default ElementForm
