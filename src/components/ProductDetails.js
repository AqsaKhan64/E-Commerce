import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import img1 from '../images/logo.png.webp'
import img2 from '../images/bg.webp'
import img3 from '../images/chair1.webp'
import img4 from '../images/product1.webp'
import img5 from '../images/product2.webp'
// import img6 from '../images/sofa2.webp'
import img7 from '../images/person1.webp'
import img8 from '../images/person2.webp'
import img9 from '../images/person3.webp'
import Footer from './Footer';
import NavBar from './NavBar';
  const aboutBan={
    
    backgroundImage: `url(${img2})`,
    backgroundSize: "cover",
        height: "250px",
        color: "white",
        paddingTop: "150px",
        paddingLeft: "50px"
  }
  const products={
    display: "flex",
  }
  const pimg={
    width: "15%",
    height: "5%",
    padding: "5px"
  }
  const pBtn={
    fontSize: "29px",
    color: "black"
  }
  const Btns={
    display: "flex",
    border: "1px solid #ddd",
    width: "20%",
    height: "31px",
    borderRadius: "50px",
    marginTop: "20px"
  }
  const number={
    fontSize: "19px"
  }
  const mainImg={
    width: "65%",
    height: "70%"
  }
  const banBtn={
    background: "#FD8F5F",
    color: "white",
    padding: "14px 45px",
    marginTop: "20px"
  }
  const mainPrdct={
    padding: "70px",
    marginTop: "200px"
  }
  const cmnts={
    display: "flex",
    marginLeft: "70px"
  }
  const cmntBtn={
    border: "1px solid #ddd",
    borderRadius: "50px",
    height: "30px",
    color: "white",
    background: "#FD8F5F",
  }
  const cmntBtn2={
    border: "1px solid #ddd",
    borderRadius: "50px",
    height: "30px",
    color: "#FD8F5F",
  }
  const reviews={
    display: "flex",
    marginLeft: "75px",
    marginTop: "40px"
  }
  const review1={
    background: "#ddd",
    padding: "25px 40px"
  }
  const review2={
    marginLeft: "45px"
  }
  const mainReviews={
    marginLeft: "70px",
    marginTop: "30px"
  }
  const info={
    fontSize: "14px",
    width: "82%"
  }
  const form={
    width: "58ch"
  }
  const pgIcon={
    fontSize: "11px",
   }
function ProductDetails() {
    const [count,setCount]=useState(0)
  return (
    <>
    <Grid>
        <NavBar/>
    </Grid>
    <Grid item className='prdct-ban' container>
        <Grid item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">PRODUCT DETAILS</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} class="fa-regular fa-greater-than"></i> PRODUCT DETAILS</Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
    <Grid item container style={mainPrdct}>
        <Grid className='m-prdt' item sm={6}>
        <Box data-aos="fade-up">
         <img className='prdct-img' style={mainImg} src={img3}/>
         <Box style={products}>
            <img className='sub-p-Img' style={pimg} src={img3}/>
            <img className='sub-p-Img' style={pimg} src={img4}/>
            <img className='sub-p-Img' style={pimg} src={img5}/>
            {/* <img className='sub-p-Img' style={pimg} src={img6}/> */}
         </Box>
         </Box>
        </Grid>
        <Grid className='m-prdt' item sm={6}>
         <Box data-aos="fade-up">
            <Typography className='sec2' sx={{fontWeight: 'bold'}} variant="h4">Faded SkyBlu Denim Jeans</Typography>
            <Typography sx={{color: "#FD8F5F", fontWeight: 'bold'}} variant="h6">$149.99</Typography>
            <Link sx={{textDecoration: 'none', color: "black", lineHeight: "35px"}}  href="#">Category  :Household</Link><br></br>
            <Link sx={{textDecoration: 'none', color: "black",lineHeight: "35px"}}  href="#">Availability  :In stock</Link><br></br>
            <Typography variant="p">Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time.</Typography>
            <Box style={Btns}>
                <Button onClick={(()=>{
                    setCount(count+1)
                })} style={pBtn}>+</Button>
                <Typography style={number}>{count}</Typography>
                <Button onClick={(()=>{
                    setCount(count-1)
                })} style={pBtn}>-</Button>
            </Box>
            <Button style={banBtn}>ADD TO CART</Button>
         </Box>
        </Grid>
    </Grid>
    <Grid item container>
        <Grid item sm={12}>
         <Box style={cmnts} className='rewies' data-aos="fade-up">
            <Button style={cmntBtn2}>Description</Button>
            <Button style={cmntBtn2}>Specification</Button>
            <Button style={cmntBtn2}>Comments</Button>
            <Button style={cmntBtn}>Reviews</Button>
         </Box>
        </Grid>
    </Grid>
    <Grid item container>
      <Grid item sm={6}>
       <Box style={reviews} className='p-d-review' data-aos="fade-up">
          <Box style={review1}>
            <Typography variant="h5">Overall</Typography>
            <Typography variant="h5">4.0</Typography>
            <Typography>(03 Reviews)</Typography>
          </Box>
          <Box style={review2} data-aos="fade-up">
            <Typography sx={{fontWeight: "bold"}} variant="h6">Based on 3 Reviews</Typography>
            <Link sx={{textDecoration: "none", color: "#FD8F5F"}} href="">5 star <i class="fa-solid fa-star" ></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Link><br></br>
            <Link sx={{textDecoration: "none",color: "#FD8F5F"}} href="">4 star <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Link><br></br>
            <Link sx={{textDecoration: "none",color: "#FD8F5F"}} href="">3 star <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Link><br></br>
            <Link sx={{textDecoration: "none",color: "#FD8F5F"}} href="">2 star <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Link><br></br>
            <Link sx={{textDecoration: "none",color: "#FD8F5F"}} href="">1 star <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Link><br></br>
          </Box>
       </Box>
       <Box style={mainReviews} data-aos="fade-up">
       <Box sx={{display: "flex"}}>
        <Box>
            <img src={img7}/>
        </Box>
        <Box sx={{color: "#FD8F5F", mt: 1, ml: 2}}>
            <Typography sx={{color: "black"}} variant="h6">Blake Ruiz</Typography>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>  
        </Box>
       </Box>
       <Typography style={info} sx={{mt: 1}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</Typography>
       </Box>
       <Box style={mainReviews} data-aos="fade-up">
       <Box sx={{display: "flex"}}>
        <Box>
            <img src={img8}/>
        </Box>
        <Box sx={{color: "#FD8F5F", mt: 1, ml: 2}}>
            <Typography sx={{color: "black"}} variant="h6">Blake Ruiz</Typography>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>  
        </Box>
       </Box>
       <Typography style={info} sx={{mt: 1}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</Typography>
       </Box>
       <Box style={mainReviews} data-aos="fade-up">
       <Box sx={{display: "flex"}}>
        <Box>
            <img src={img9}/>
        </Box>
        <Box sx={{color: "#FD8F5F", mt: 1, ml: 2}}>
            <Typography sx={{color: "black"}} variant="h6">Blake Ruiz</Typography>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>  
        </Box>
       </Box>
       <Typography style={info} sx={{mt: 1}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</Typography>
       </Box>
      </Grid>
      <Grid item sm={6}>
       <Box className='rewies' data-aos="fade-up">
          <Typography sx={{fontWeight: "bold",mt: 5}} variant="h6">Add a Review</Typography>
          <Typography sx={{color: "#FD8F5F"}}>Your Rating: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> Outstanding</Typography>
       </Box>
       <Box className='rewies' sx={{mt: 2}} data-aos="fade-up">
         <TextField className='fields' style={form} type="text" placeholder='Your Full Name'></TextField>
         <TextField className='fields' sx={{mt: 2}} style={form} type="text" placeholder='Email Address'></TextField>
         <TextField className='fields' sx={{mt: 2}} style={form} type="text" placeholder='Phone no'></TextField>
         <TextField className='fields' sx={{mt: 2}} style={form} type="text" placeholder='Review'></TextField>
       </Box>
       <Button data-aos="fade-up" className='rewies' style={banBtn}>SUBMIT NOW</Button>
      </Grid>
    </Grid>
    <Grid data-aos="fade-up">
        <Footer/>
    </Grid>
    </>
  )
}

export default ProductDetails