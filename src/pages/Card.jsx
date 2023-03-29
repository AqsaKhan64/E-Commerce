import { Typography,Tab } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react'
import Nav from '@mui/material/Grid'
import img3 from '../imges/img3.jpeg'
import img4 from '../imges/img4.jpeg'

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
alignItem:'flex-start',
}
const cardData={
 paddingTop:'50px',
 marginLeft:'10px',
}
const price={
  paddingTop:'50px',
  paddingLeft:'370px',
  fontSize:'18px',
}
const product={
  border:'1px solid grey',
  width:'45px',
  height:'37px',
  textAlign:'center',
  marginTop:'50px',
  paddingTop:'5px',
  marginLeft:'80px',
  fontSize:'18px',
}
const product1={
  width:'25px',
  height:'20px',
  textAlign:'center',
  marginTop:'50px',
  border:'1px solid grey',
  fontSize:'18px',
}
const product2={
  width:'25px',
  height:'20px',
  textAlign:'center',
  marginTop:'72px',
  marginLeft:'-27px',
  border:'1px solid grey',
  fontSize:'18px',
}
const product3={
  paddingTop:'50px',
  marginLeft:'80px',
  fontSize:'18px',
}
function Card () {
  return (
    <>
      <div className='cardbg'>
        <Typography style={cardheading} variant='h4'>CART LIST</Typography>
        <div style={nav}>
          <Tab style={menu} label="Home" />
          <ArrowBackIosIcon style={icon} />
          <Tab style={menu} label="cart list" />
        </div>
      </div>

      <Nav style={cardNav}>
        <Tab style={navContent1} label="Product" />
        <Tab style={navContent} label="Time" />
        <Tab style={navContent} label="Quantity" />
        <Tab style={navContent} label="Price" />
      </Nav>
      <div>
        <div style={cardImg}>
          <div><img src={img3} alt="" width={190} /></div>
          <Typography style={cardData}>Minimalistic shop for multipurpose use</Typography>
          <Typography style={price}>$36.00</Typography>
          <div style={product}>
            <Typography>3</Typography>
          </div>
          <Typography style={product1}>+</Typography>
          <Typography style={product2}>-</Typography>
          <Typography style={product3}>$72.00</Typography>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div style={cardImg}>
          <div><img src={img4} alt="" width={190} /></div>
          <Typography style={cardData}>Minimalistic shop for multipurpose use</Typography>
          <Typography style={price}>$36.00</Typography>
          <div style={product}>
            <Typography>3</Typography>
          </div>
          <Typography style={product1}>+</Typography>
          <Typography style={product2}>-</Typography>
          <Typography style={product3}>$72.00</Typography>
        </div>
      </div>

    </>
  )
}

export default Card