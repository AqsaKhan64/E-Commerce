import React from 'react'
import NavBar from './NavBar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Box'
import img2 from '../images/bg.webp'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import Footer from './Footer';
import Data from './data.json'
const products={
  textAlign: "center",
  marginTop: "200px",
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
 const mainPr={
  marginTop: "10px",
  width: "83%",
  marginLeft: "120px"
}
 const cardInfo={
   margin: "20px"
 }
 const sec3head={
  fontWeight: "bold",
  marginBottom: "15px"
}
const aboutBan={
  backgroundImage: `url(${img2})`,
  backgroundSize: "cover",
      height: "250px",
      color: "white",
      paddingTop: "150px",
      paddingLeft: "50px"
}
const sec3Btn={
  marginTop: "30px",
  textAlign: "center",
  margin: "auto",
  width: "15%"
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
const subBtn={
  color: "#FD8F5F",
  padding: "10px 30px",
  border: "1px solid #FD8F5F",
}
const pgIcon={
  fontSize: "11px",
 }
function Product() {
  return (
    <div>
     <Grid>
        <NavBar/>
     </Grid>
     <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
          <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">PRODUCT</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} class="fa-regular fa-greater-than"></i>  PRODUCT</Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
     <Box style={products} data-aos="fade-up">
      <Typography className='sec2' variant="h2" style={sec3head}>POPULAR PRODUCTS</Typography>
      <Typography className='subSec2' style={info}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br></br> ornare, eros dolor interdum nulla.</Typography>
    </Box>
    <Box>
        <Typography style={prdcts} className='productNav' data-aos="fade-up">
          <Tab className='pList' style={sofa} label="sofa"/>
          <Tab className='pList' label="Table"/>
          <Tab className='pList' label="Chair"/>
          <Tab className='pList' label="Bed"/>
          <Tab className='pList' label="Decore"/>
        </Typography>
    </Box>
    {
      Data.map(record=>{
        return(
          <>
          <Grid item container style={mainP} className='prdctItems' data-aos="fade-up">
          <Grid item sm={4}>
            <Card style={cardInfo}>
              <CardActionArea>
              <CardMedia sx={{height: 250}} image={require('../images/sofa1.webp')}/>
              <CardContent>
                <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
                <Typography sx={{mt: 1}} variant="h6">{record.description}</Typography>
                <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card  style={cardInfo}>
              <CardActionArea>
              <CardMedia sx={{ height: 250}} image={require('../images/sofa2.webp')}/>
              <CardContent>
                <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
                <Typography sx={{mt: 1}} variant="h6">{record.description}</Typography>
                <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={4}>
            <Card  style={cardInfo}>
              <CardActionArea>
              <CardMedia sx={{height: 250}} image={require('../images/sofa3.webp')}/>
              <CardContent>
                <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
                <Typography sx={{mt: 1}} variant="h6">{record.description}</Typography>
                <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          </Grid>
          <Grid item container style={mainPr} className='prdctItems' data-aos="fade-up">
    <Grid item sm={4}>
      <Card style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image={require('../images/chair1.webp')}/>
        <CardContent>
          <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title2.title}</Typography>
          <Typography sx={{mt: 1}} variant="h6">{record.title2.description}</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{ height: 250}} image={require('../images/chair3.webp')}/>
        <CardContent>
          <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title2.title}</Typography>
          <Typography sx={{mt: 1}} variant="h6">{record.title2.description}</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image={require('../images/product1.webp')}/>
        <CardContent>
          <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title2.title}</Typography>
          <Typography sx={{mt: 1}} variant="h6">{record.title2.description}</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </Grid>
          <Grid item container style={mainPr} className='prdctItems' data-aos="fade-up">
    <Grid item sm={4}>
      <Card style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image={require('../images/product3.webp')}/>
        <CardContent>
          <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
          <Typography sx={{mt: 1}} variant="h6">{record.description}</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{ height: 250}} image={require('../images/product2.webp')}/>
        <CardContent>
          <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
          <Typography sx={{mt: 1}} variant="h6">{record.description}</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid item sm={4}>
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image={require('../images/product4.webp')}/>
        <CardContent>
          <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
          <Typography sx={{mt: 1}} variant="h6">{record.description}</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </Grid>
    
          
          </>
        )
      })
     }
     
    {/* <Grid item container style={mainP} className='prdctItems' data-aos="fade-up">
    <Grid item sm={4}>
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
    <Grid item sm={4}>
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
    <Grid item sm={4}>
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
    </Grid> */}
    {/* <Grid item container style={mainPr} className='prdctItems' data-aos="fade-up">
    <Grid item sm={4}>
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
    <Grid item sm={4}>
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
    <Grid item sm={4}>
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
    <Grid item container style={mainPr} className='prdctItems' data-aos="fade-up">
    <Grid item sm={4}>
      <Card style={cardInfo}>
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
      <Card  style={cardInfo}>
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
      <Card  style={cardInfo}>
        <CardActionArea>
        <CardMedia sx={{height: 250}} image="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular9.png.webp"/>
        <CardContent>
          <Typography variant="h6">Bly Microfiber / Microsuede 56" Armless  Loveseat</Typography>
          <Typography sx={{mt: 1, color: "red"}} variant="h6">$367</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </Grid> */}
    <Grid item container data-aos="fade-up">
     <Grid  className='Btn' item lg={12}>
      <Box className='subBtn' style={sec3Btn}>
        <Button sx={style.root}>Discover More</Button>
      </Box>
     </Grid>
    </Grid>
    <Grid data-aos="fade-up">
      <Footer/>
    </Grid>
    
    
    </div>
  )
}

export default Product