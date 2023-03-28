import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Toolbar, Tab, Box, Typography, Button, MenuItem, Card, CardMedia, CardContent, CardActionArea } from '@mui/material'
import Menu from '@mui/material/Menu';
import Nav from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import img1 from '../images/logo.png.webp'
import img2 from '../images/bg.webp'
import img3 from '../images/sec3.webp'
import img4 from '../images/insta.webp'
import img5 from '../images/insta1.webp'
import img6 from '../images/insta2.webp'
const Mainnav={
  backgroundColor: "#F2E1D9",
  position: "relative",
  
}
const bgImg={
  backgroundImage: `url(${img2})`,
  height: "700px",
  backgroundSize: "cover",
  zIndex: "-1"
}
const logo={
  width: "11%",
  position: "absolute",
  left: "0",
  top: "0",
}
const nav={
  marginLeft: "150px",
  padding: "17px 0px",
  
}
const menu={
  color: "black",
  fontWeight: "bold",
  fontSize: "17px"
}
const mainSearch={
   marginLeft: "50px"
}
const search={
  border: "none",
  background: "none",
  borderBottom: "1px solid black",
  fontSize: "18px",
  lineHeight: "35px",
  
}
const navIcon={
  marginLeft: "-25px",
  marginBottom: "-5px",
  color: "black"
}
const acount={
  color: "black",
  fontWeight: "bold"
}
const mainAcount={
  display: "flex",
  marginLeft: "70px",
  marginTop: "5px"
}
const cart={
  color: "black",
  marginLeft: "20px",
  fontWeight: "bold",
  fonrSize: "18px"
}
const banCntnt={
  backgroundColor: "white",
  width: "31%",
  marginTop: "100px",
  padding: "50px",
  marginLeft: "50px"
}
const banBtn={
  background: "#FD8F5F",
  color: "white",
  padding: "12px 25px",
  marginTop: "20px"
}
const banPara={
  fontSize: "18px",
  marginTop: "7px"
}
const banHead={
  fontWeight: "bold",
  marginTop: "7px"
}
// css of sec2
const products={
 textAlign: "center",
 marginTop: "100px",
}
const info={
  marginTop: "20px",
  fontSize: "18px",
}
const prdcts={
  textAlign: "center",
  marginTop: "40px",
  borderBottom: "1px solid #dee2e6",
  marginBottom: "40px",
  width: "70%",
  marginLeft: "150px",
}
const sofa={
  borderBottom: "3px solid #FD8F5F",
  color: "black",
  fontWeight: "bold"
}
const mainP={
  marginTop: "80px",
  width: "83%",
  marginLeft: "120px"
}
const cardInfo={
  margin: "20px"
}
const sec3Img={
  width: "100%",
  height: "450px"
}
const sec3Info={
  backgroundColor: "#F2E1D9",
  height: "310px",
  padding: "70px 40px"
}
const mainsec3={
  marginTop: "100px"
}
const sec3head={
  fontWeight: "bold",
  marginBottom: "15px"
}
const sec3para={
  lineHeight: "25px"
}
const sec3Btn={
  marginTop: "30px",
  textAlign: "center",
  
}
const subBtn={
  color: "#FD8F5F",
  padding: "10px 30px",
  border: "1px solid #FD8F5F"
}
const instaImg={
  width: "100%"
}
const instaSec={
  marginTop: "80px"
}
const instaInfo={
  padding: "20px 50px"
}
const instaHead={
  fontWeight: "bold",
  marginTop: "10px"
}
function Home() {
  return (
    <>
    
    <div style={bgImg}>
        <Grid > 
          {/* <AppBar > */}
            <Toolbar style={Mainnav}>
            <img src={img1} style={logo}/>
              <Nav style={nav}>
                <Tab style={menu} label="Home"/>
                <Tab  style={menu} label="Product"/>
                <Tab  style={menu} label="About"/>
                <Tab style={menu} label="page"/>
                {/* <Menu>
                  <MenuItem>Login</MenuItem>
                  <MenuItem>Card</MenuItem>
                  <MenuItem>Categories</MenuItem>
                  <MenuItem>Checkout</MenuItem>
                  <MenuItem>Product Details</MenuItem>
                </Menu> */}
                <Tab  style={menu} label="Blog"/>
                <Tab  style={menu} label="Contact"/>
              </Nav>
              <Box style={mainSearch}>
                <input style={search} type="text" placeholder='Search Product'/>
                <SearchIcon style={navIcon}/>
              </Box>
              <Box style={mainAcount}>
                <Typography style={acount}>My Account</Typography>
                <ShoppingBagOutlinedIcon style={cart}/>
              </Box>
            </Toolbar>
          {/* </AppBar> */}
          <Box style={banCntnt}>
            <Typography style={banHead}  sx={{color: "black"}} variant="h6">70% sale off</Typography>
            <Typography style={banHead}  sx={{color: "black"}} variant="h2">Furniture At Cost</Typography>
            <Typography style={banPara} >Suspendisse varius enim in eros  elementu tristique. Duis cursus, mi quis <br></br> viverra ornare, eros dolor interdum nulla.</Typography>
            <Button style={banBtn}>Discover More</Button>
          </Box>
        </Grid>
    </div>
    <Box style={products}>
      <Typography variant="h2" style={sec3head}>POPULAR PRODUCTS</Typography>
      <Typography style={info}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br></br> ornare, eros dolor interdum nulla.</Typography>
    </Box>
    <Box>
        <Nav style={prdcts}>
          <Tab style={sofa} label="sofa"/>
          <Tab label="Table"/>
          <Tab label="Chair"/>
          <Tab label="Bed"/>
          <Tab label="Decore"/>
        </Nav>
    </Box>
    <Grid item container style={mainP}>
    <Grid item lg={4}>
      <Card style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item lg={4}>
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{ height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item lg={4}>
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </Grid>
    {/* sec 3 */}
    <Grid item container style={mainsec3}>
      <Grid item lg={6}>
       <img style={sec3Img} src={img3}/>
      </Grid>
      <Grid item lg={6}>
        <Box style={sec3Info}>
       <Typography style={sec3head} variant="h2">BEST Furniture MENUFECTURER</Typography>
       <Typography style={sec3para} variant="p">Suspendisse varius enim in eros elementu tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
       {/* <Typography style={sec3para} variant="p">Suspendisse varius enim in eros elementu tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography> */}
       <Box >
       <Button style={banBtn}>Discover More</Button>
       </Box>
       </Box>
      </Grid>
    </Grid>
    <Box style={products}>
      <Typography variant="h2" style={sec3head}>PRODUCTS YOU MAY LIKE</Typography>
      <Typography style={info}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br></br> ornare, eros dolor interdum nulla.</Typography>
    </Box>
    <Grid item container style={mainP}>
    <Grid item lg={4}>
      <Card style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item lg={4}>
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{ height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular5.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item lg={4}>
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular6.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </Grid>
    <Grid item container>
     <Grid item lg={12}>
      <Box style={sec3Btn}>
        <Button style={subBtn}>Discover More</Button>
      </Box>
     </Grid>
    </Grid>
    <Grid item container style={instaSec}>
      <Grid item lg={4}>
       <Box style={instaInfo}>
        <img src={img4}/>
        <Typography style={instaHead} variant="h3">GET INSPIRED <br></br> WITH <br></br> INSTAGARM</Typography>
        <Typography sx={{mt: 1}}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
       </Box>
      </Grid>
      <Grid item lg={4}>
       <img style={instaImg} src={img5}/>
      </Grid>
      <Grid item lg={4}>
       <img style={instaImg} src={img6}/>
      </Grid>
    </Grid>
    </>
  )
}

export default Home