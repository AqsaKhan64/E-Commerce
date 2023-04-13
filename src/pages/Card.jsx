import { Typography,Tab, Button, Box,Grid } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react'
import Nav from '@mui/material/Grid'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const pgIcon={
  fontSize: "11px",
 }
 const blog={
  marginTop: "120px"
 }
const cardheading ={
    color:'white',
    paddingTop:'96px',
    marginLeft:'60px',
    fontSize:'55px',
    fontWeight:'800',
    wordSpace:'1.5',
    // position:'absolute',   
}
const nav ={
  marginLeft: "60px",
  // paddingTop:'175px',
  
}
const menu={
  color: "white",
  fontWeight: "bold",
  fontSize: "17px"
}
const icon ={
  color:'white',
  position:'absolute',
  paddingTop:'12px',
  left:'145px',
}
const cardNav={
  padding:'90px',
}
const navContent1={
  fontSize:'14px',
  fontWeight:'500',
  color:'rgb(121, 121, 121)',
 
}
const navContent={
  float:'right',
  color:'rgb(121, 121, 121)',
  fontSize:'14px',
  fontWeight:'500',
  padding:'20px 40px',
}
const cardImg={
marginLeft:'60px',
display:'flex',
borderBottom:"1px solid #e0d4d4",
width:'90%',
}
const cardData={
 paddingTop:'50px',
 marginLeft:'10px',
 fontSize: '13px',
}
const price={
  paddingTop:'50px',
  paddingLeft:'346px',
  fontSize:'18px',
}
const product3={
  paddingTop:'50px',
  marginLeft:'80px',
  fontSize:'18px',
}
const line={
  borderBottom:'1px solid #e0d4d4',
}
const cardbtn={
  margin:'55px',
}
const btn1={
 background:'#FD8F5F',
 padding:'15px 44px',
 fontSize:'15px',
 fontWeight:'500',
 color:'white',
 marginLeft:'15px',
}
const btn2={

  background:'#FD8F5F',
  padding:'15px 44px',
  fontSize:'15px',
  fontWeight:'500',
  color:'white',
  left:'795px'
}
const btnBottom={
  borderBottom:'1px solid #e0d4d4',
  paddingTop:'30px',
  width:'99%',
}
const cardBotom={
  float:'right',
  color:'black',
  fontSize:'18px',
  padding:'20px 75px',
}
const cardBottom1={
  borderBottom:'1px solid #e0d4d4 ',
  paddingTop:'60px',
  width:'93%',
  marginLeft:'43px',
}
const labelContent={
  marginLeft:'1100px',
  fontSize:'17px',
  color:'grey',
}
const dropIcon={
  display:'flex',
  marginLeft:'-50px',
}
const drop={
  paddingTop:'5px',
}
const botomfeild={
  width:'25%',
  background:'#f4f4f4',
  height:'45px',
  marginLeft:'945px',
  fontSize:'18px',
  border:'none',
  top:'40px',
}
const btn3={
  marginLeft:'1070px',
  background:'#FD8F5F',
  padding:'15px 44px',
  fontSize:'15px',
  fontWeight:'500',
  color:'white',
}
const lastline={
  borderBottom:'1px solid #e0d4d4',
  paddingTop:'30px',
  width:'94%',
  marginLeft:'27px',
}
const Btns={
  border:'1px solid #e0d4d4',
  width:'10%',
  height:'35px',
  marginTop:'46px',
  marginLeft:'64px',
  display:'flex',
  borderRadius:'50px',
}
const pBtn={
  fontSize:'28px',
 
}
const number={
  fontSize:'20px',
}

function Card () {
  const [count,setCount]=useState(0)

  return (
    <>
        <Grid>
    <NavBar />
    </Grid>
    <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">CART</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} class="fa-regular fa-greater-than"></i>  CART </Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
      <Grid container>
       
       
         <Grid item xs={12} style={blog}>
          <Nav style={cardNav}>
            <Box style={line}>
              <Grid item sm={12} className='nav'>
                <Tab style={navContent1} label="Product" /> 
          
                <Tab style={navContent} label="Time" />
                <Tab style={navContent} label="Quantity" />
                <Tab style={navContent} label="Price" /> 
                </Grid>
              </Box>
          </Nav>
        </Grid>
        </Grid>
       
         <Box style={cardImg}>
         <Grid item sm={6}><Box><img src={img3} alt="" width={190} /></Box></Grid> 
         <Typography style={cardData}>Minimalistic shop for multipurpose use</Typography>
          <Typography style={price}>$36.00</Typography>
          <Box style={Btns}>
                <Button onClick={(()=>{
                    setCount(count+1)
                })} style={pBtn}>+</Button>
                <Typography style={number}>{count}</Typography>
                <Button onClick={(()=>{
                    setCount(count-1)
                })} style={pBtn}>-</Button>
            </Box>
          <Typography style={product3}>$72.00</Typography>
          </Box>
      
      
      <br></br>
      <br></br>
      <Box>
        <Box style={cardImg}>
          <Box><img src={img4} alt="" width={190} /></Box>
          <Typography style={cardData}>Minimalistic shop for multipurpose use</Typography>
          <Typography style={price}>$36.00</Typography>
          <Box style={Btns}>
                <Button onClick={(()=>{
                    setCount(count+1)
                })} style={pBtn}>+</Button>
                <Typography style={number}>{count}</Typography>
                <Button onClick={(()=>{
                    setCount(count-1)
                })} style={pBtn}>-</Button>
            </Box>
              <Typography style={product3}>$72.00</Typography>
        </Box>
      </Box>
      <Box style={cardbtn}>
        <Button style={btn1}>UPDATE CART</Button>
        <Button style={btn2}>CLOSE COUPON</Button>
        <Box style={btnBottom}></Box>
      </Box>
      <Box>
        <Tab style={cardBotom} label="$416.00" />
        <Tab style={cardBotom} label="Subtotal" />
        <Box style={cardBottom1}>
        </Box>
      </Box>
    
      <Box style={labelContent}>
      <label for="html">Flat Rate: $5.00 </label>
      <input type="radio" id="html" value="HTML"/><br></br><br></br>
      <label for="html">Free Shoppingg </label>
      <input type="radio" id="html" value="HTML"/><br></br><br></br>
      <label for="html">Flat Rate: $5.00 </label>
      <input type="radio" id="html" value="HTML"/><br></br><br></br>
      <label for="html">Delivery: $2.00 </label>
      <input type="radio" id="html" value="HTML"/><br></br><br></br>
      <Box style={dropIcon}>
      <Typography variant='h6'>Calculate Shipping </Typography>
      <ArrowDropDownIcon style={drop}/>
      </Box>
      </Box>
        <br></br>
        <select style={botomfeild}>
        <option value="1">Select a Stat</option>
        <option value="2">Select a State</option>
        <option value="4">Select a State</option>
        </select>
        <br></br>
        <br></br>
        <select style={botomfeild}>
        <option value="1">Select a provainace</option>
        <option value="2">Punjab</option>
        <option value="4">Senidh</option>
        </select>
        <br></br>
        <br></br>
     
        <Button style={btn3}>CLOSE COUPON</Button>
        <Box style={lastline}></Box>
        <Grid>
       <Footer /> 
    </Grid>  
    </>
  )
}

export default Card