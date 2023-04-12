import { Button, createTheme, ThemeProvider, Typography} from "@mui/material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../index.css";
import React from "react";
const formTheme = createTheme({
  shape:{
    borderRadius:0,
  }
});
const tag={
  backgroundColor: 'white',
  border: "1px solid #888B8F",
  color:'#888B8F',
  textTransform:'none',
  paddingBlock:'1px',
  marginBlock:'4px',
  marginRight:1,
  "&:hover": {
    border: "1px solid #FD8F5F",
    color: 'white',
    backgroundColor: '#FD8F5F',
    cursor:'pointer',
  }
}
const styles={
  root:{
    backgroundColor:'White',
    width:'100%',
    marginBlock:1,
    height:50,
    border: "1px solid #FD8F5F",
    color: '#FD8F5F',
    paddingBlock:2,
    "&:hover": {
      border: "1px solid #FD8F5F",
      color: 'white',
      backgroundColor: '#FD8F5F',
      cursor:'pointer',
    } 
  }
}

const images = [
  { id: 1, src: require('../images/post_5.png.webp') },
  { id: 2, src: require('../images/post_6.png.webp') },
  { id: 3, src: require('../images/post_7.png.webp') },
  { id: 4, src: require('../images/post_8.png.webp') },
  { id: 5, src: require('../images/post_9.png.webp') },
  { id: 6, src: require('../images/post_10.png.webp') },
];
const post1 = require("../images/post_1.png.webp");
const post2 = require("../images/post_2.png.webp");
const post3 = require("../images/post_3.png.webp");
const post4 = require("../images/post_4.png.webp");

export default function Sidepanel() {

  return (
    <ThemeProvider theme={formTheme}>
      <Box className="side_pane">
        <TextField label="Search Keywords" variant="outlined" sx={{width:'84%',height:'10px'}} />
        <IconButton aria-label="SearchIcon" sx={{backgroundColor:'#FD8F5F',color:'white', borderRadius:0,width:'50px', height:'56px'}}> 
          {/* <SearchIcon  /> */}
        </IconButton><br></br>
        <Button variant="outlined" color="error" sx={styles.root} >SEARCH </Button>
      </Box>
      <Box className="side_pane">
        <h4>Category</h4>
        <ul className="Category-list">
          <li className="list-item btm-brdr">Restarant food (37)</li>
          <li className="list-item btm-brdr">Travel news (10)</li>
          <li className="list-item btm-brdr">Modren technology (03)</li>
          <li className="list-item btm-brdr">Product (11)</li>
          <li className="list-item btm-brdr">Resturent food (37)</li>
          <li className="list-item btm-brdr">Inspiration (21)</li>
          <li className="list-item">Health care (21)</li>
        </ul>
      </Box>
      <Box className="side_pane" >
        <h4>Recent Post</h4>
        <Box component="span" sx={{lineHeight:1, display: "flex" , marginBottom:2}}>
          <img src={post1}/>
           <Box component='span' sx={{paddingLeft: 2, lineHeight: 0.2}}><h3 className="list-item post-title">
            From life was you fish...
          </h3>
          <Typography sx={{ fontSize: 14, color:'gray',lineHeight:0}}> January 12,2019</Typography></Box>
        </Box>
        <Box component="span" sx={{lineHeight:1, display: "flex" , marginBottom:2}}>
          <img src={post2}/>
           <Box component='span' sx={{paddingLeft: 2, lineHeight: 0.2}}><h3 className="list-item post-title">
           The Amazing Hubble...
          </h3>
          <Typography sx={{ fontSize: 14, color:'gray',lineHeight:0}}> 02 Hours ago</Typography></Box>
        </Box>
        <Box component="span" sx={{lineHeight:1, display: "flex" , marginBottom:2}}>
          <img src={post3}/>
           <Box component='span' sx={{paddingLeft: 2, lineHeight: 0.2}}><h3 className="list-item post-title">
           Astronomy or Astrology
          </h3>
          <Typography sx={{ fontSize: 14, color:'gray',lineHeight:0}}> 03 Hours ago</Typography></Box>
        </Box>
        <Box component="span" sx={{lineHeight:1, display: "flex" , marginBottom:2}}>
          <img src={post4}/>
           <Box component='span' sx={{paddingLeft: 2, lineHeight: 0.2}}><h3 className="list-item post-title">
           Asteroids Telescope
          </h3>
          <Typography sx={{ fontSize: 14, color:'gray',lineHeight:0}}> 01 Hours ago</Typography></Box>
        </Box>
      </Box>
      <Box className="side_pane">
        <h4>Tag Clouds</h4>
        <Button color="primary" variant="outlined" sx={tag}>project</Button>
        <Button color="primary" variant="outlined" sx={tag}>love</Button>
        <Button color="primary" variant="outlined" sx={tag}>technology</Button>
        <Button color="primary" variant="outlined" sx={tag}>travel</Button>
        <Button color="primary" variant="outlined" sx={tag}> restarant</Button>
        <Button color="primary" variant="outlined" sx={tag}>lifestyle</Button>
        <Button color="primary" variant="outlined" sx={tag}>design</Button>
        <Button color="primary" variant="outlined" sx={tag}>illustration</Button>
      </Box>
      <Box className="side_pane">
        <h4>Instagram Feeds</h4>
        <Box spacing={4}>
          <ImageList cols={3} gap={10}>
            {images.map((image) => (
              <ImageListItem key={image.id}>
                <img src={image.src} alt={image.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      <Box className="side_pane">
        <h4>Newsletter</h4>
        <TextField label="Enter email" variant="outlined"  sx={{width:'100%'}}/>
        <Button variant="outlined" color="error" sx={styles.root}>SUBSCRIBE</Button>
      </Box>
    </ ThemeProvider>
  );
}


