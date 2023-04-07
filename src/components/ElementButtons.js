import { Box, Button, createTheme, ThemeProvider, Typography } from '@mui/material'
import { borderRadius, typography } from '@mui/system';
import React from 'react'
import "../index.css";
// custom theme
const theme = createTheme({
  palette: {
   default: {main: '#efefef'},
    primary: {main: '#483285'},
    success: {main: '#4CD3E3'},
    info: {main:'#38A4FF'},
    warning: {main:'#F4E700'},
    danger: {main:'#F44A40'},
    link: { main: '#F9F9FF'},
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
      fontSize:12,
    }
  }
});
const themePill = createTheme({
  palette: {
   default: {main: '#efefef'},
    primary: {main: '#483285'},
    success: {main: '#4CD3E3'},
    info: {main:'#38A4FF'},
    warning: {main:'#F4E700'},
    danger: {main:'#F44A40'},
    link: { main: '#F9F9FF'},
    pink: {main:'#F67693'},
    black:{main:'#000000'}
  },
  shape:{
      borderRadius:50,
      borderColor:"gray"
  },
  typography: {
    button:{
      textTransform:"capitalize",
      fontFamily:'poppins',
      fontSize:12,
    }
  }
});
const btnStyle={
  margin:8,
  paddingTop:8,
  paddingBottom:8,
  paddingLeft:20,
  paddingRight:20,

}
// btns hover effct 
// filled
const priFilled={
  root:{
    backgroundColor:'#483285',
      marginBlock:1,
      border: "1px solid #483285",
      color: 'white',
      "&:hover": {
        border: "1px solid #483285",
        color: '#483285',
        backgroundColor: 'white',
        cursor:'pointer',
      }
  }
}
const defFilled={
  root:{
    backgroundColor:'#efefef',
      marginBlock:1,
      border: "1px solid #efefef",
      color: '#483285',
      "&:hover": {
        border: "1px solid #efefef",
        color: '#483285',
        backgroundColor: '#efefef',
        cursor:'pointer',
      }
  }
}

const danFilled={
  root:{
    backgroundColor:'#F44A40',
      marginBlock:1,
      border: "1px solid #F44A40",
      color: 'white',
      "&:hover": {
        border: "1px solid #F44A40",
        color: '#F44A40',
        backgroundColor: 'white',
        cursor:'pointer',
      }
  }
}
// Hollow
const priHollow={
  root:{
    border: "1px solid #483285",
        color: '#483285',
        backgroundColor: 'white',
        cursor:'pointer',
      "&:hover": {
        backgroundColor:'#483285',
      marginBlock:1,
      border: "1px solid #483285",
      color: 'white',
      }
  }
}
const defHollow={
  root:{
    border: "1px solid #efefef",
    color: '#efefef',
    backgroundColor: 'white',
    cursor:'pointer',
   
      "&:hover": {
        backgroundColor:'#efefef',
      marginBlock:1,
      border: "1px solid #efefef",
      color: '#483285',
      }
  }
}
const danHollow={
  root:{
        border: "1px solid #F44A40",
        color: '#F44A40',
        backgroundColor: 'white',
        cursor:'pointer',
      "&:hover": {
        backgroundColor:'#F44A40',
        marginBlock:1,
        border: "1px solid #F44A40",
        color: 'white',
      }
  }
}

// page begins
const ElementButtons = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* rectangle buttons */}
      <Box component="div" sx={{marginBottom:3}}>
 {/* filled btns */}
        <Box>
          <Typography sx={{fontSize:24 , fontWeight:500 ,margin:2 }}>Sample Buttons</Typography>
          <Button variant='contained' color='default' sx={defFilled.root}> default</Button>
          <Button variant='contained' color='primary' sx={priFilled.root}> primary</Button>
          <Button variant='contained' color='success'sx={{margin:1}}> success</Button>
          <Button variant='contained' color='info'sx={{margin:1}}> Info</Button>
          <Button variant='contained' color='warning'sx={{margin:1}}> warning</Button>
          <Button variant='contained' color='error'sx={danFilled.root}> Danger</Button>
          <Button variant='contained' color='link'sx={{margin:1}} href='#' > link</Button>
          <Button variant='contained'color='link' sx={{margin:1}} disabled > disabled</Button>
        </Box>
        <Box >
{/* hollow btns */}
          <Button variant='outlined' color='default' sx={defHollow.root}> default</Button>
          <Button variant='outlined' color='primary'sx={priHollow.root}> primary</Button>
          <Button variant='outlined' color='success'sx={{margin:1}}> success</Button>
          <Button variant='outlined' color='info'sx={{margin:1}}> Info</Button>
          <Button variant='outlined' color='warning'sx={{margin:1}}> warning</Button>
          <Button variant='outlined' color='error'sx={danHollow.root}> Danger</Button>
          <Button variant='outlined' color='link'sx={{margin:1}} href='#' > link</Button>
          <Button variant='outlined'color='link' sx={{margin:1}} disabled > disabled</Button>
        </Box>
      </Box>
    
      {/* pill buttons  */}
      <Box component="div" sx={{marginBottom:3}}>
        <Box>
          <Button variant='contained' color='default' sx={{margin:1,}}> default</Button>
          <Button variant='contained' color='primary'sx={{margin:1}}> primary</Button>
          <Button variant='contained' color='success'sx={{margin:1}}> success</Button>
          <Button variant='contained' color='info'sx={{margin:1}}> Info</Button>
          <Button variant='contained' color='warning'sx={{margin:1}}> warning</Button>
          <Button variant='contained' color='error'sx={{margin:1}}> Danger</Button>
          <Button variant='contained' color='link'sx={{margin:1}} href='#' > link</Button>
          <Button variant='contained'color='link' sx={{margin:1}} disabled > disabled</Button>
        </Box>
        <Box >
          <Button variant='outlined' color='default' sx={{margin:1}}> default</Button>
          <Button variant='outlined' color='primary'sx={{margin:1}}> primary</Button>
          <Button variant='outlined' color='success'sx={{margin:1}}> success</Button>
          <Button variant='outlined' color='info'sx={{margin:1}}> Info</Button>
          <Button variant='outlined' color='warning'sx={{margin:1}}> warning</Button>
          <Button variant='outlined' color='error'sx={{margin:1}}> Danger</Button>
          <Button variant='outlined' color='link'sx={{margin:1}} href='#' > link</Button>
          <Button variant='outlined'color='link' sx={{margin:1}} disabled > disabled</Button>
        </Box>
      </Box>
    </ThemeProvider>
    <ThemeProvider theme={themePill}>
      {/* rectangle buttons */}
      <Box component="div" sx={{marginBottom:3}}>
        <Box>
          <Typography sx={{fontSize:24 , fontWeight:500 ,margin:2 }}>Sample Buttons</Typography>
          <Button variant='contained' color='default' sx={{margin:1}}> default</Button>
          <Button variant='contained' color='primary'sx={{margin:1}}> primary</Button>
          <Button variant='contained' color='success'sx={{margin:1}}> success</Button>
          <Button variant='contained' color='info'sx={{margin:1}}> Info</Button>
          <Button variant='contained' color='warning'sx={{margin:1}}> warning</Button>
          <Button variant='contained' color='error'sx={{margin:1}}> Danger</Button>
          <Button variant='contained' color='link'sx={{margin:1}} href='#' > link</Button>
          <Button variant='contained'color='link' sx={{margin:1}} disabled > disabled</Button>
        </Box>
        <Box >
          <Button variant='outlined' color='default' sx={{margin:1}}> default</Button>
          <Button variant='outlined' color='primary'sx={{margin:1}}> primary</Button>
          <Button variant='outlined' color='success'sx={{margin:1}}> success</Button>
          <Button variant='outlined' color='info'sx={{margin:1}}> Info</Button>
          <Button variant='outlined' color='warning'sx={{margin:1}}> warning</Button>
          <Button variant='outlined' color='error'sx={{margin:1}}> Danger</Button>
          <Button variant='outlined' color='link'sx={{margin:1}} href='#' > link</Button>
          <Button variant='outlined'color='link' sx={{margin:1}} disabled > disabled</Button>
        </Box>
      </Box>
    
      {/* pill buttons  */}
      <Box component="div" sx={{marginBottom:3}}>
        <Box>
          <Button variant='contained' color='default' style={btnStyle}> default</Button>
          <Button variant='contained' color='primary' style={btnStyle}> primary</Button>
          <Button variant='contained' color='success'style={btnStyle}> success</Button>
          <Button variant='contained' color='info' style={btnStyle}> Info</Button>
          <Button variant='contained' color='warning'style={btnStyle}> warning</Button>
          <Button variant='contained' color='error'style={btnStyle}> Danger</Button>
          <Button variant='contained' color='link'style={btnStyle} href='#' > link</Button>
          <Button variant='contained'color='link' style={btnStyle} disabled > disabled</Button>
        </Box>
        <Box >
          <Button variant='outlined' color='default' style={btnStyle}> default</Button>
          <Button variant='outlined' color='primary'style={btnStyle}> primary</Button>
          <Button variant='outlined' color='success'style={btnStyle}> success</Button>
          <Button variant='outlined' color='info'style={btnStyle}> Info</Button>
          <Button variant='outlined' color='warning'style={btnStyle}> warning</Button>
          <Button variant='outlined' color='error'style={btnStyle}> Danger</Button>
          <Button variant='outlined' color='link'style={btnStyle} href='#' > link</Button>
          <Button variant='outlined'color='link' style={btnStyle} disabled > disabled</Button>
        </Box>
      </Box>
    </ThemeProvider>
    <ThemeProvider theme={theme}>
      {/* rectangle buttons */}
      <Box component="div" sx={{marginBottom:3}}>
        <Box>
          <Typography sx={{fontSize:24 , fontWeight:500 ,margin:2 }}>Sample Buttons</Typography>
          <Button variant='contained' color='default' sx={{margin:1}}> default</Button>
          <Button variant='contained' color='primary'sx={{margin:1}}> primary</Button>
          <Button variant='contained' color='success'sx={{margin:1}}> success</Button>
          <Button variant='contained' color='info'sx={{margin:1}}> Info</Button>
          <Button variant='contained' color='warning'sx={{margin:1}}> warning</Button>
          <Button variant='contained' color='error'sx={{margin:1}}> Danger</Button>
          <Button variant='contained' color='link'sx={{margin:1}} href='#' > link</Button>
          <Button variant='contained'color='link' sx={{margin:1}} disabled > disabled</Button>
        </Box>
        <Box >
          <Button variant='outlined' color='default' sx={{margin:1}}> default</Button>
          <Button variant='outlined' color='primary'sx={{margin:1}}> primary</Button>
          <Button variant='outlined' color='success'sx={{margin:1}}> success</Button>
          <Button variant='outlined' color='info'sx={{margin:1}}> Info</Button>
          <Button variant='outlined' color='warning'sx={{margin:1}}> warning</Button>
          <Button variant='outlined' color='error'sx={{margin:1}}> Danger</Button>
          <Button variant='outlined' color='link'sx={{margin:1}} href='#' > link</Button>
          <Button variant='outlined'color='link' sx={{margin:1}} disabled > disabled</Button>
        </Box>
      </Box>
    
      {/* pill buttons  */}
      <Box component="div" sx={{marginBottom:3}}>
        <Box>
          
          <Button variant='contained' color='primary'sx={{margin:1 , padding:2}}> Extra Large</Button>
          <Button variant='contained' color='success'sx={{margin:1}}size='large'> Large</Button>
          <Button variant='contained' color='primary'sx={{margin:1}}size='medium'> Default</Button>
          <Button variant='contained' color='success'sx={{margin:1}}size='small'> Medium</Button>
          <Button variant='contained' color='primary' sx={{margin:1,padding:"1.2px"}}> small</Button>
        </Box>
        <Box >
          <Button variant='outlined' color='primary'sx={{margin:1, padding:2}} > Extra Large</Button>
          <Button variant='outlined' color='success'sx={{margin:1}}size='large'> Large</Button>
          <Button variant='outlined' color='primary'sx={{margin:1}}size='medium'> Default</Button>
          <Button variant='outlined' color='primary' sx={{margin:1}}size='small'> Medium</Button> 
          <Button variant='outlined' color='success'sx={{margin:1,padding:"1.2px"}}> small</Button>

        </Box>
      </Box>
    </ThemeProvider>
    
    </>
  )
}

export default ElementButtons
