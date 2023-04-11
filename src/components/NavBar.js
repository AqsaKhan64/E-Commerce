import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import img1 from '../images/logo.png.webp'
import img2 from '../images/bg.webp'
import cartImg from '../images/card.svg'
import { Link } from 'react-router-dom';

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
  const styles={
    menu:{
      color: "black",
     fontWeight: "bold",
     fontSize: "17px",
     "&:hover":{
      color: "#FD8F5F"
     }
    }
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
    fontWeight: "bold",
    marginTop: "19px"
  }
  const mainAcount={
    display: "flex",
    marginLeft: "70px",
  }
  const items={
    top: "-440px",
    left: "576px"
  }
  const decor={
    textDecoration: "none",
    color: "black"
  }
  const mainShop={
    position: "relative"
  }
  const shop={
    background: "rgb(253, 143, 95)",
    fontSize: "15px",
    top: "21px",
    left: "38px",
    position: "absolute",
    padding: "3px 8px",
    borderRadius: "45%"
  }
  const shopImg={
    marginLeft: "28px",
    marginTop: "11px"
  }
function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu1, setMenu] = useState(null);
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function MenuClick(event) {
    if (menu1 !== event.currentTarget) {
      setMenu(event.currentTarget);
    }
  }

  function MenuClose() {
    setMenu(null);
  }
  return (
    <div>
     
     
        <Grid item container>
     <Grid item sm={12} className='mainNav'>
     <Toolbar style={Mainnav} className='main-nav'>
            <img className="Logo" src={img1} style={logo}/>
            <input type="checkbox" id="click"/>
            <label for="click" className="menu-btn">
            <i class="fas fa-bars"></i>
            </label>
              <Typography style={nav} className='list'>
               <Link style={decor} to='/home'><Tab className='list1' sx={styles.menu} label="Home"/></Link>
                <Link style={decor} to='/product'> <Tab className='list1' sx={styles.menu}  label="Product"/></Link>
              
               <Link style={decor} to='/about'>
               <Tab className='list1' sx={styles.menu}  label="About"/>
               </Link>
                <Tab className='list1' sx={styles.menu}  label="page"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                />
                <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose} sx={styles.menu}>Login</MenuItem>
        <MenuItem onClick={handleClose} sx={styles.menu}>Cart</MenuItem>
        <MenuItem onClick={handleClose} sx={styles.menu}>Categories</MenuItem>
        <MenuItem onClick={handleClose} sx={styles.menu}>Checkout</MenuItem>
       <Link style={decor} to='/productdetails'><MenuItem sx={styles.menu}onClick={handleClose}>Product Details</MenuItem></Link>
      </Menu>
                <Tab className='list1'  sx={styles.menu} label="Blog" 
                aria-owns={menu1 ? "simple-menu1" : undefined}
                aria-haspopup="true"
                onClick={MenuClick}
                onMouseOver={MenuClick}/>
                <Menu
        style={items}
        id="simple-menu1"
        menu1={menu1}
        open={Boolean(menu1)}
        onClose={MenuClose}
        MenuListProps={{ onMouseLeave: MenuClose }}
      >
        <MenuItem onClick={MenuClose} sx={styles.menu}>Blog</MenuItem>
        <MenuItem onClick={MenuClose} sx={styles.menu}>Blog Details</MenuItem>
        <MenuItem onClick={MenuClose} sx={styles.menu}>Elements</MenuItem>
        </Menu>
                <Tab className='list1' sx={styles.menu}  label="Contact"/>
              </Typography>
              <Box style={mainSearch} className='search'>
                <input className='input' style={search} type="text" placeholder='Search Product'/>
                {/* <SearchIcon style={navIcon}/> */}
                <i style={navIcon} class="fa-solid fa-magnifying-glass"></i>
              </Box>
              <Box style={mainAcount} className='acount'>
                <Typography className='aount1'  style={acount}>My Account</Typography>
                <Box style={mainShop}>
                  <img style={shopImg} src={cartImg}/>
                  <span style={shop}>0</span>
                </Box>
              </Box>
            </Toolbar>
     </Grid>
    </Grid>
    </div>
  )
}

export default NavBar