import React from 'react'
// import Grid from '@mui/material/Grid';
import { Button, Typography , Box , ImageList, ImageListItem} from "@mui/material";
// import { makeStyles } from '@mui/styles';
// import Image from '../images';

const images = [
    { id: 1, src: require('../images/elements/g1.jpg.webp') },
    { id: 2, src: require('../images/elements/g2.jpg.webp') },
    { id: 3, src: require('../images/elements/g3.jpg.webp')},
    { id: 4, src: require('../images/elements/g4.jpg.webp')},
    { id: 5, src: require('../images/elements/g5.jpg.webp')},
    { id: 6, src: require('../images/elements/g6.jpg.webp')},
    { id: 7, src: require('../images/elements/g7.jpg.webp')},
    { id: 8, src: require('../images/elements/g8.jpg.webp')},
    { id: 9, src: require('../images/elements/g1.jpg.webp') },
  ];

const ElementGallery = () => {

  return (
    <Box sx={{margin:3}}>
    <Typography sx={{fontSize:18,fontWeight:600}}>Image Gallery</Typography>
      <Box spacing={4}>
          <ImageList cols={3} gap={10}>
            {images.map((image) => (
              <ImageListItem key={image.id}>
                <img src={image.src}/>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
    </Box>
  
  
  )
}

export default ElementGallery
