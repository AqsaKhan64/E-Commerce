import React from 'react'
import { Typography,Box } from '@mui/material'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import TabletMacOutlinedIcon from '@mui/icons-material/TabletMacOutlined';
// import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';


const Adress = () => {
  return (
    <>
      
      <Box  component="span"
        sx={{ display: "flex", marginBottom: 4 , paddingLeft:10}} >
        <Typography>
          {/* <HomeOutlinedIcon sx={{ fontSize: 40, color: "#8F9195" }} /> */}
        </Typography>
        <Box component="span" sx={{ paddingLeft: 1 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, lineHeight: 1.5 }}>
            Buttonwood, California..
          </Typography>
          <Typography sx={{ fontSize: 14, color: "gray", lineHeight: 1 }}>
            Rosemead, CA 91770
          </Typography>
        </Box>
      </Box>
      <Box  component="span"
        sx={{ display: "flex", marginBottom: 4 , paddingLeft:10}} >
        {/* <Typography>
          <TabletMacOutlinedIcon sx={{ fontSize: 30, color: "#8F9195" }} />
        </Typography> */}
        <Box component="span" sx={{ paddingLeft: 2}}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, lineHeight: 1.5 }}>
          +1 253 565 2365
          </Typography>
          <Typography sx={{ fontSize: 14, color: "gray", lineHeight: 1 }}>
          Mon to Fri 9am to 6pm
          </Typography>
        </Box>
      </Box>
      <Box  component="span"
        sx={{ display: "flex", marginBottom: 4 , paddingLeft:10}} >
        {/* <Typography>
          <LocalPostOfficeOutlinedIcon sx={{ fontSize: 35, color: "#8F9195" }} />
        </Typography> */}
        <Box component="span" sx={{ paddingLeft: 2 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, lineHeight: 1.5 }}>
          support@colorlib.com
          </Typography>
          <Typography sx={{ fontSize: 14, color: "gray", lineHeight: 1 }}>
          Send us your query anytime!
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Adress
