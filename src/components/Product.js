import React, { useState} from 'react'
import NavBar from './NavBar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Box'
// import img2 from '../images/bg.webp'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import Link from '@mui/material/Link'
import Footer from './Footer';
import Data from './data.json'
import Data2 from './data2.json'
import Data3 from './Data3.json'
import Data4 from './data4.json';
// import toast from "react-hot-toast"
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

 
 const cardInfo={
   margin: "20px"
 }
 const sec3head={
  fontWeight: "bold",
  marginBottom: "15px"
}
const sec3Btn={
  marginTop: "30px",
  textAlign: "center",
  margin: "auto",
  width: "15%"
}
const sList={
  marginLeft: "25px"
}
const banBtn={
  background: "#FD8F5F",
  color: "white",
  padding: "14px 45px",
  marginTop: "20px"
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
const pgIcon={
  fontSize: "11px",
 }
 const pLink={
  textDecoration: "none",
  color: "black",
  fontSize: "16px"
 }
function Product() {
  const [toggle,setToggle]=useState(1)
  function updateToggle(id){
    setToggle(id)
  }
  const [value, setValue] = useState('');

  const dataSearch = (event) => {
    setValue(event.target.value);
  }
   const onSearch = Data.filter((item)=>{
     return item.title.toLowerCase().includes(value.toLowerCase())
   })
   const searchTable = Data2.filter((item)=>{
    return item.title.toLowerCase().includes(value.toLowerCase())
  })
  const searchChair = Data3.filter((item)=>{
    return item.title.toLowerCase().includes(value.toLowerCase())
  })
  const searchBed = Data4.filter((item)=>{
    return item.title.toLowerCase().includes(value.toLowerCase())
  })

 console.log(onSearch)



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
          <Tab className={toggle === 1 ? "tabs active-tabs" : "tabs"} onClick={()=>updateToggle(1)}  label="sofa"/>
          <Tab className={toggle === 2 ? "tabs active-tabs" : "tabs"} onClick={()=>updateToggle(2)} label="Table"/>
          <Tab className={toggle === 3 ? "tabs active-tabs" : "tabs"} onClick={()=>updateToggle(3)} label="Chair"/>
          <Tab className={toggle === 4 ? "tabs active-tabs" : "tabs"} onClick={()=>updateToggle(4)} label="Bed"/>
          {/* <div className="App"> */}
                <input style={sList} type="text" value={value} onChange={dataSearch} placeholder='Serach...' />
        {/* </div> */}
        </Typography>
      
    </Box>
    <Box className={toggle === 1 ? "show-items" : "items"}>
    <Box className="cards">
    {
      onSearch?.map(record=>{
        return(
          <>
            <Card style={cardInfo} >
              <CardActionArea>
              <CardMedia sx={{height: 250}} image={`${record.image}`}/>
              <CardContent>
                <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
                <Link style={pLink} href="#" sx={{mt: 1}}>{record.description}</Link>
                <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </>
        )
      })
     }
     </Box>
     </Box>
     <Box className={toggle === 2 ? "show-items " : "items"}>
      <Box className="cards">
      {
        searchTable?.map(record=>{
    
          return(
            <>
              <Card style={cardInfo} >
                <CardActionArea>
                <CardMedia sx={{height: 250}} image={`${record.image}`}/>
                <CardContent>
                  <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
                  <Link style={pLink} href="#" sx={{mt: 1}}>{record.description}</Link>
                  <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </>
          )
        })
       }
       </Box>
       </Box>
       <Box className={toggle === 3 ? "show-items" : "items"}>
      <Box className="cards">
      {
        searchChair.map(record=>{
    
          return(
            <>
              <Card style={cardInfo} >
                <CardActionArea>
                <CardMedia sx={{height: 250}} image={`${record.image}`}/>
                <CardContent>
                  <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
                  <Link style={pLink} href="#" sx={{mt: 1}}>{record.description}</Link>
                  <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </>
          )
        })
       }
       </Box>
       </Box>
       <Box className={toggle === 4 ? "show-items" : "items"}>
      <Box className="cards">
      {
        searchBed.map(record=>{
    
          return(
            <>
              <Card style={cardInfo} >
                <CardActionArea>
                <CardMedia sx={{height: 250}} image={`${record.image}`}/>
                <CardContent>
                  <Typography sx={{fontWeight: "bold"}} variant="h6">{record.title}</Typography>
                  <Link style={pLink} href="#" sx={{mt: 1}}>{record.description}</Link>
                  <Typography sx={{mt: 1, color: "red"}} variant="h6">{record.price}</Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </>
          )
        })
       }
       </Box>
       </Box>
    
    
    <Grid item container data-aos="fade-up">
     <Grid  className='Btn' item lg={12}>
      <Box className='subBtn' style={sec3Btn}>
        <Button sx={style.root}>Discover More</Button>
      </Box>
      <Button style={banBtn}>ADD TO CART</Button>
     </Grid>
    </Grid>
    <Grid data-aos="fade-up">
      <Footer/>
    </Grid>
    
    
    </div>
  )
}

export default Product