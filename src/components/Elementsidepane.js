import { Typography,Box, Switch,  Checkbox, Radio, Menu,MenuItem,Button } from '@mui/material'
import { createTheme ,ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/system';
import "../index.css";
import React from 'react'
import { useState } from 'react';
// dropdown menu

// custom theme
const theme = createTheme({
    palette: {
      primary: {main: '#1F2B7B'},
      secondary: {main: '#4CD3E3'},
      info: {main:'#00bcd4'},
      warning: {main:'#F4E700'},
      danger: {main:'#F44A40'},
      link: { main: '#ffffff'},
      default: {main: '#efefef'},
      pink: {main:'#F67693'},
      black:{main:'#000000'}
    },
    shape:{
        borderRadius:0,
        borderColor:"gray"
    },
    typography: {
      button:{
        textTransform:"capitalize",
        fontFamily:'poppins',
        fontSize:14,
        color:"gray"
      }
    }
  });
 
const Elementsidepane = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <ThemeProvider theme={theme}>
        {/* Switches */}
      <Box>
        <Typography sx={{ fontSize: 17,fontWeight:600 , marginBlock:2}}>Switches</Typography>
        <Stack direction="row"  sx={{justifyContent:'space-between'}}>
          <Typography sx={{ fontSize: 14, color: "#646d77" }}> 01. Sample Switch</Typography>
          <Switch defaultChecked size="small" color="primary" />
        </Stack>
        <Stack direction="row" sx={{justifyContent:'space-between'}}>
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1 }}>02. Primary Color Switch</Typography>
              <Switch defaultChecked size="small" color="primary" />
        </Stack>
        <Stack direction="row" sx={{justifyContent:'space-between'}}>
          <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1 }}>03. Confirm Color Switch</Typography>
          <Switch defaultChecked size="small" color="info" />
        </Stack>
      </Box>
      {/* dropdown */}
      <Box>
        <Typography sx={{ fontSize: 17,fontWeight:600 , marginBlock:2 }}>Select Boxes</Typography>
              <Box component='div'>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} sx={{width:'35%', backgroundColor:'#efefef', color:'gray'}}>
              <Stack direction="row" spacing={2}>  English <i class="fa-solid fa-caret-down" style={{marginLeft:10,marginBlock:4}}></i></Stack>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>English</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Spanish</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Arabic</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Portuguese</MenuItem>
              <MenuItem onClick={handleClose} sx={{fontSize:'13px',color:'gray'}}>Bengali</MenuItem>
            </Menu>
          </Box>
      </Box>
      {/* Checkboxes */}
      <Box>
        <Typography sx={{ fontSize: 17,fontWeight:600 , marginBlock:2}}>Check Boxes</Typography>
        <Stack direction="row" sx={{justifyContent:'space-between'}}>
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>01. Sample Checkbox</Typography>
              <Checkbox defaultChecked  color='pink' size='small'/>
        </Stack>
        <Stack direction="row"sx={{justifyContent:'space-between'}} >
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>02. Primary Color Checkbox</Typography>
              <Checkbox defaultChecked  color='pink' size='small'/>
        </Stack>
        <Stack direction="row"sx={{justifyContent:'space-between'}} >
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>03. Confirm Color Checkbox</Typography>
              <Checkbox defaultChecked  color='black' size='small'/>
        </Stack>
        <Stack direction="row"sx={{justifyContent:'space-between'}} >
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>04. Disabled Checkbox</Typography>
              <Checkbox disabled  color='link'size='small' />
        </Stack>
        <Stack direction="row" sx={{justifyContent:'space-between'}}>
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>05. Disabled Checkbox active</Typography>
              <Checkbox disabled defaultChecked color='primary' size='small' />
        </Stack>
      </Box>
      {/* Radios */}
      <Box>
        <Typography sx={{ fontSize: 17,fontWeight:600 , marginBlock:2}}>Radios</Typography>
        <Stack direction="row" sx={{justifyContent:'space-between'}}>
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>01. Sample Checkbox</Typography>
              <Radio defaultChecked  color='pink' size='small'/>
        </Stack>
        <Stack direction="row" sx={{justifyContent:'space-between'}}>
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>02. Primary Color Checkbox</Typography>
              <Radio defaultChecked  color='pink' size='small'/>
        </Stack>
        <Stack direction="row" sx={{justifyContent:'space-between'}}>
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>03. Confirm Color Checkbox</Typography>
              <Radio defaultChecked  color='black' size='small'/>
        </Stack>
        <Stack direction="row"sx={{justifyContent:'space-between'}} >
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>04. Disabled Checkbox</Typography>
              <Radio disabled  color='link'size='small' />
        </Stack>
        <Stack direction="row" sx={{justifyContent:'space-between'}} >
              <Typography sx={{ fontSize: 14, color: "#646d77", paddingTop:1}}>05. Disabled Checkbox active</Typography>
              <Radio disabled defaultChecked color='primary' size='small' />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default Elementsidepane
