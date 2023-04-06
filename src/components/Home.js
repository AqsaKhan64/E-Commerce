import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import  Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Nav from '@mui/material/Grid'
import img1 from '../images/logo.png.webp'
import img2 from '../images/bg.webp'
import img3 from '../images/sec3.webp'
import img4 from '../images/insta.webp'
import img5 from '../images/insta1.webp'
import img6 from '../images/insta2.webp'
import NavBar from './NavBar';
import Footer from './Footer';
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
const style={
  root:{
    color: "#FD8F5F",
    padding: "10px 30px",
    border: "1px solid #FD8F5F",
    "&:hover":{
       backgroundColor: "#FD8F5F",
       cursor: "pointer",
       color: "white"
    }
  }  
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
    <div style={bgImg} className='banImg'>
        <Grid > 
         <NavBar/>
          <Box style={banCntnt} className='banner' data-aos="fade-up">
            <Typography className='banHead' style={banHead}  sx={{color: "black"}} variant="h6">70% sale off</Typography>
            <Typography className='banInfo' style={banHead}  sx={{color: "black"}} variant="h2">Furniture At Cost</Typography>
            <Typography className='banPara' style={banPara} >Suspendisse varius enim in eros  elementu tristique. Duis cursus, mi quis <br></br> viverra ornare, eros dolor interdum nulla.</Typography>
            <Button style={banBtn}>Discover More</Button>
          </Box>
        </Grid>
    </div>
    <Box style={products} data-aos="fade-up">
      <Typography className='sec2' variant="h2" style={sec3head}>POPULAR PRODUCTS</Typography>
      <Typography className='subSec2' style={info}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br></br> ornare, eros dolor interdum nulla.</Typography>
    </Box>
    <Box data-aos="fade-up">
        <Nav style={prdcts} className='productNav'>
          <Tab className='pList' style={sofa} label="sofa"/>
          <Tab className='pList' label="Table"/>
          <Tab className='pList' label="Chair"/>
          <Tab className='pList' label="Bed"/>
        </Nav>
    </Box>
    <Grid className='prdctItems' item container style={mainP}>
    <Grid item sm={4}>
      <Card style={cardInfo} data-aos="fade-up">
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo} data-aos="fade-up">
        <CardActionArea>
        <CardMedia sx={{ height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo} data-aos="fade-up">
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
    <Grid item container style={mainsec3} className='sec3'>
      <Grid item sm={6}>
       <img data-aos="fade-up" style={sec3Img} src={img3}/>
      </Grid>
      <Grid item sm={6}>
        <Box style={sec3Info} className='sec3Info' data-aos="fade-up">
       <Typography className='sec3head' style={sec3head} variant="h2">BEST Furniture MENUFECTURER</Typography>
       <Typography style={sec3para} variant="p">Suspendisse varius enim in eros elementu tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
       {/* <Typography style={sec3para} variant="p">Suspendisse varius enim in eros elementu tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography> */}
       <Box >
       <Button data-aos="fade-up" style={banBtn}>Discover More</Button>
       </Box>
       </Box>
      </Grid>
    </Grid>
    <Box style={products} data-aos="fade-up">
      <Typography className='sec2' variant="h2" style={sec3head}>PRODUCTS YOU MAY LIKE</Typography>
      <Typography className='subSec2' style={info}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br></br> ornare, eros dolor interdum nulla.</Typography>
    </Box>
    <Grid className='prdctItems' item container style={mainP}>
    <Grid item sm={4}>
      <Card style={cardInfo} data-aos="fade-up">
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo} data-aos="fade-up">
        <CardActionArea>
        <CardMedia sx={{ height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular5.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo} data-aos="fade-up">
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
    <Grid  item container>
     <Grid  className='Btn' item sm={12}>
      <Box data-aos="fade-up" style={sec3Btn}>
        <Button sx={style.root}>Discover More</Button>
      </Box>
     </Grid>
    </Grid>
    <Grid item container style={instaSec}>
      <Grid item sm={4}>
       <Box data-aos="fade-up" style={instaInfo}>
        <img className='instaImg' src={img4}/>
        <Typography className='instaSec' style={instaHead} variant="h3">GET INSPIRED <br></br> WITH <br></br> INSTAGARM</Typography>
        <Typography sx={{mt: 1}}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
       </Box>
      </Grid>
      <Grid item sm={4}>
       <img data-aos="fade-up" style={instaImg} src={img5}/>
      </Grid>
      <Grid item sm={4}>
       <img data-aos="fade-up" style={instaImg} src={img6}/>
      </Grid>
    </Grid>
    <Box style={products} data-aos="fade-up">
      <Typography className='sec2' variant="h2" style={sec3head}>TOP PICK</Typography>
      <Typography className='subSec2' style={info}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br></br> ornare, eros dolor interdum nulla.</Typography>
    </Box>
    <Grid item container style={mainP} className='prdctItems'>
    <Grid item sm={4}>
      <Card style={cardInfo} data-aos="fade-up">
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular7.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo} data-aos="fade-up">
        <CardActionArea>
        <CardMedia sx={{ height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular8.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo} data-aos="fade-up">
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular9.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </Grid>
    <Grid item container>
     <Grid className='Btn' item sm={12}>
      <Box style={sec3Btn} data-aos="fade-up">
        <Button sx={style.root}>Discover More</Button>
      </Box>
     </Grid>
    </Grid>
    <Grid>
      <Grid data-aos="fade-up">
        <Footer/>
      </Grid>
    </Grid>
    </>
  )
}

export default Home