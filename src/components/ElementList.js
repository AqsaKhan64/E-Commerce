import { Grid, ListItem, ListItemIcon, ListItemText, Typography , List, createTheme, ThemeProvider } from "@mui/material";
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box } from "@mui/system";
import React from "react";
const heading = {
  fontSize: 17,
  fontFamily: "poppins",
  marginBlock: 10,
  paddingTop:'10px',
  fontWeight:600,
};
const theme = createTheme({
 palette: {
 color:{main : '#1F2B7B'}
 }
});
// unordered list
// const unordered ={
//   {
//     text: ''
//   }
// }

const ElementList = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4} sx={{marginBottom:5}}>
        {/* image Gallery */}
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box>
            <Typography style={heading}>Image Gallery</Typography>
            <Typography sx={{color:'#838bb2', fontSize:'24px',lineHeight:'30px'}}>This is header 01</Typography>
            <Typography sx={{color:'#838bb2', fontSize:'20px',lineHeight:'24px'}}>This is header 02</Typography>
            <Typography  sx={{color:'#838bb2', fontSize:'17px',lineHeight:'21px'}}>This is header 03</Typography>
            <Typography  sx={{color:'#838bb2', fontSize:'15px',lineHeight:'18px'}}>This is header 04</Typography>
            <Typography  sx={{color:'#838bb2', fontSize:'12px',lineHeight:'15px'}}>This is header 05</Typography>
            <Typography  sx={{color:'#838bb2', fontSize:'10px',lineHeight:'12px'}}>This is header 06</Typography>
          </Box>
        </Grid>
        {/* unordered list */}
        <Grid item xs={12}sm={4}  md={4} lg={4}>
          <Box>
            <Typography style={heading}>Unrdered List</Typography>
            <List>
              <ListItem sx={{padding:0}}>
              {/* <RadioButtonUncheckedIcon   size='small' color='color' sx={{marginRight:1,fontWeight:900}} /> */}
                <ListItemText> Fta Keys</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              {/* <RadioButtonUncheckedIcon   size='small' color='color' sx={{marginRight:1,fontWeight:900}} /> */}
                <ListItemText> For Women Only Your Computer Usage</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
                  {/* <RadioButtonUncheckedIcon   size='small' color='color' sx={{marginRight:1,fontWeight:900}} /> */}
                    <ListItemText> Facts Why Inkjet Printing Is Very Appealing</ListItemText>
              </ListItem>
              <ListItem sx={{paddingLeft:4 ,paddingTop:0,paddingBottom:0}}>
                {/* <RadioButtonUncheckedIcon   size='small' color='color' sx={{marginRight:1,fontWeight:900}} /> */}
                        <ListItemText> Addiction When Gambling Becomes</ListItemText>
                                           
                </ListItem>
              <ListItem sx={{paddingLeft:8, paddingTop:0,paddingBottom:0}}>
                {/* <RadioButtonUncheckedIcon   size='small' color='color' sx={{marginRight:1,fontWeight:900}} /> */}
                   <ListItemText> Protective Preventative Maintenance</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              {/* <RadioButtonUncheckedIcon   size='small' color='color' sx={{marginRight:1,fontWeight:900}} /> */}
                <ListItemText> Dealing With Technical Support 10 Useful Tips</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              {/* <RadioButtonUncheckedIcon   size='small' color='color' sx={{marginRight:1,fontWeight:900}} /> */}
                <ListItemText> Make Myspace Your Best Designed Space</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              {/* <RadioButtonUncheckedIcon   size='small' color='color' sx={{marginRight:1,fontWeight:900}} /> */}
                <ListItemText> Cleaning And Organizing Your Computer</ListItemText>
              </ListItem>
            </List>
          </Box>
        </Grid>
        {/* Ordered List */}
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Box>
            <Typography style={heading}>Ordered List</Typography>
            <List>
              <ListItem sx={{padding:0}}>
              <Typography sx={{marginRight:1,color:'#1F2B7B'}} > 01.</Typography> 
                <ListItemText sx={{color:'#828bb2'}}> Fta Keys</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              <Typography sx={{marginRight:1,color:'#1F2B7B'}} > 02.</Typography> 
                <ListItemText  sx={{color:'#828bb2'}}> For Women Only Your Computer Usage</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              <Typography sx={{marginRight:1,color:'#1F2B7B'}} > 03.</Typography>
                    <ListItemText sx={{color:'#828bb2'}}> Facts Why Inkjet Printing Is Very Appealing</ListItemText>
              </ListItem>
              <ListItem sx={{paddingLeft:4 ,paddingTop:0,paddingBottom:0}}>
              <Typography sx={{marginRight:1,color:'#1F2B7B'}} > a.</Typography>
                 <ListItemText sx={{color:'#828bb2'}}> Addiction When Gambling Becomes</ListItemText>               
              </ListItem>
              <ListItem sx={{paddingLeft:12, paddingTop:0,paddingBottom:0}}>
              <Typography sx={{marginRight:1,color:'#1F2B7B'}} > i.</Typography>
                   <ListItemText  sx={{color:'#828bb2'}}> Protective Preventative Maintenance</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              <Typography sx={{marginRight:1,color:'#1F2B7B'}} > 06.</Typography>
                <ListItemText  sx={{color:'#828bb2'}}> Dealing With Technical Support 10 Useful Tips</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              <Typography sx={{marginRight:1,color:'#1F2B7B'}} > 05.</Typography>
                <ListItemText  sx={{color:'#828bb2'}}> Make Myspace Your Best Designed Space</ListItemText>
              </ListItem>
              <ListItem sx={{padding:0}}>
              <Typography sx={{marginRight:1,color:'#1F2B7B'}} > 06.</Typography>
                <ListItemText  sx={{color:'#828bb2'}}> Cleaning And Organizing Your Computer</ListItemText>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ElementList;
