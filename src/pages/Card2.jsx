import { Typography, Tab,Grid,TextField,Button, Box} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { AddBox, AddBoxOutlined, AddBoxRounded } from '@mui/icons-material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const pgIcon={
  fontSize: "11px",
 }


const cardheading = {
    color: 'white',
    paddingTop: '96px',
    marginLeft: '60px',
    fontSize: '55px',
    fontWeight: '800',
    wordSpace: '1.5',  
  }
  const nav = {
    marginLeft: "60px", 
  }
  const menu = {
    color: "white",
    fontWeight: "bold",
    fontSize: "17px"
  }
  const icon = {
    color: 'white',
    position: 'absolute',
    paddingTop: '12px',
    left: '145px',
  }
  const CheckTitle={
    paddingTop:'180px',
  }
  const TitleHeading={
    margin:'22px 35px',
    backgroundColor:'#f4f4f4',
    fontSize:'18px',
    color:'#1a1a1a',
    padding:'15px',
  }
  const cardLink={
    color:'#FD8F5F',
    fontSize:'18px',
    marginLeft:'8px',
  }
  const Cardtxt={
    marginLeft:'70px',
    color:'#646D77',
  }
  const formControl={
    fontSize:'14px',
    color:'#797979',
    marginTop:'30px',
    width:'50%',
    marginLeft:'70px',
  }
  const formControl1={
    fontSize:'14px',
    color:'#797979',
    marginTop:'30px',
    width:'50%',
    marginLeft:'20px',
  }
  const cardForm={
    display:'flex',
  }
  const btn1={
 backgroundColor:'#FD8F5F',
 padding:'10px 50px',
 marginLeft:'30px',
 marginTop:'25px',
 height:'55px',
 color:'white',
 fontSize:'16px',
 fontWeight:'500',
  }
  const loginCheck={
    display:'flex',
    marginLeft:'40px',
  }
  const formCheck={
    paddingTop:'28px',
    marginLeft:'25px',
  }
  const input1={
     width:'50%',
     height:'30px',
     marginLeft:'75px',
     fontSize:'16px', 
  }
  const details={
    marginLeft:'60px',
  }
  const detailHeading={
    color:'#1a1a1a',
  }
  const FirstInput={
    width:'71%',
    height:'20px',
    marginLeft:'60px',
    padding:'7px 12px',
    marginTop:'20px',
   
  }
  const nameInput={
    display:'flex',
  }
  const secondInput={
    width:'71%',
    height:'20px',
    padding:'7px 12px',
    marginTop:'20px',
   
  }
  const FirstInputA={
    width:'79%',
    height:'20px',
    marginLeft:'58px',
    padding:'7px 12px',
    marginTop:'20px',
  }
  const orderBox={
    backgroundColor:'#f4f4f4',
    width:'80%',
    padding:'20px',
  }
  const orderHeading={
    borderBottom:'1px solid #dddddd',
    fontSize:'18px',
    fontWeight:'500',
    color:'#2a2a2a',
  }
  const orderList={
    display:'flex',
    justifyContent:'space-between',
    borderBottom:'1px solid #dddddd',
    paddingTop:'18px',
  }
  const listContent={
    color:'#797979',
    fontSize:'16px', 
  }
  const labelContent={
    marginTop:'10px',
    fontSize:'17px',
    color:'grey',
  }
  const radioIcon={
    margin:'5px 10px'
  }
  const payContent={
    padding:'20px',
    fontSize:'15px',
    backgroundColor:'#fff',
    color:'#646D77',
    marginTop:'18px',
  }
function Card2() {
  return (
    <>
    <Grid>
    <NavBar />
    </Grid>
    <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">CHECKOUT</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} class="fa-regular fa-greater-than"></i>  CHECKOUT </Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
        <Box style={CheckTitle}>
        <Grid container item>
           <Grid item xs={12} style={TitleHeading}>
            <Typography>Returning Customer?<a href="login.html" style={cardLink}>  Click here to login</a></Typography>
           </Grid>
           <Typography style={Cardtxt}>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</Typography>
           <Grid item xs={6}>
         <Box style={cardForm}>
           <TextField style={formControl} id="outlined-basic" variant="outlined" placeholder='Username Or Email Address *'/>
           <TextField style={formControl1} id="outlined-basic" variant="outlined" placeholder='password *'/>
           </Box>
           </Grid>
        </Grid>
        <Box style={loginCheck}> 
        <Button style={btn1}>Login</Button>
        <Box style={formCheck}>
         <FormGroup>
             <FormControlLabel control={<Checkbox defaultChecked />} label="Create an account?" />
             </FormGroup > 
             </Box>
        </Box>
        <Grid container item>
        <Grid item xs={12} style={TitleHeading}>
            <Typography>Have a coupon?<a href="login.html" style={cardLink}>Click here to enter your code</a></Typography>
           </Grid>
           <input style={input1} type="text" placeholder="Enter coupon code"></input>
           </Grid>
           <Button style={btn1}>APPLY COUPON</Button>
        </Box>
        <br></br><br></br>
        <Grid container item>
            <Grid item xs={8}>
                <Box style={details}>
                <Typography style={detailHeading} variant='h5'>Billing Details</Typography>
                </Box>
                <FormGroup>
                <Box style={nameInput}>
                <Grid item xs={6}>
                <input style={FirstInput} type="text" class="form-control" id="first" name="name" placeholder='First name'></input>
               </Grid>
               <Grid item xs={6}>
                <input style={secondInput} type="text" class="form-control" id="first" name="name" placeholder='Last name'></input>
               </Grid>
               </Box>
               <Grid item xs={12}>
               <input style={FirstInputA} type="text" class="form-control" id="first" name="name" placeholder='Company name'></input>
               </Grid>
               <Box style={nameInput}>
                <Grid item xs={6}>
                <input style={FirstInput} type="text" class="form-control" id="first" name="name" placeholder='Phone numer'></input>
               </Grid>
               <Grid item xs={6}>
                <input style={secondInput} type="text" class="form-control" id="first" name="name" placeholder='Email address'></input>
               </Grid>
               </Box>
               <Grid item xs={12}>
               <input style={FirstInputA} type="text" class="form-control" id="first" name="name" placeholder='Company name'></input>
               </Grid>
               <Grid item xs={12}>
               <input style={FirstInputA} type="text" class="form-control" id="first" name="name" placeholder='Address line 01'></input>
               </Grid>
               <Grid item xs={12}>
               <input style={FirstInputA} type="text" class="form-control" id="first" name="name" placeholder='Address line 02'></input>
               </Grid>
               <Grid item xs={12}>
               <input style={FirstInputA} type="text" class="form-control" id="first" name="name" placeholder='Postcode/Zip'></input>
               </Grid>
               <Grid item xs={12}>
               <input style={FirstInputA} type="text" class="form-control" id="first" name="name" placeholder='Town/City'></input>
               </Grid>
            </FormGroup>
         </Grid>
         <Grid xs={4}>
            <Box style={orderBox}>
                <Typography style={orderHeading} variant='h6'>Your Order</Typography>
               <Box style={orderList}>
                <Typography style={listContent}>product</Typography>
                <Typography  style={listContent}>Total</Typography>
               </Box>
               <Box style={orderList}>
                <Typography style={listContent}>Fresh Blackbery</Typography>
                <Typography  style={listContent}>0.2</Typography>
                <Typography  style={listContent}>$720.00</Typography>
                </Box>
                <Box style={orderList}>
                <Typography style={listContent}>Fresh Tomatoes</Typography>
                <Typography  style={listContent}>0.2</Typography>
                <Typography  style={listContent}>$675.00</Typography>
                </Box>
                <Box style={orderList}>
                <Typography style={listContent}>Fresh Brocoli</Typography>
                <Typography  style={listContent}>0.2</Typography>
                <Typography  style={listContent}>$6756.00</Typography>
                </Box>
                <Box style={orderList}>
                <Typography style={listContent}>Subtotal</Typography>
                <Typography  style={listContent}>$67566.00</Typography>
                </Box>
                <Box style={orderList}>
                <Typography style={listContent}>Shipping</Typography>
                <Typography  style={listContent}>Flat Rate: $35.00</Typography>
                </Box>
                <Box style={orderList}>
                <Typography style={listContent}>Total</Typography>
                <Typography  style={listContent}>$356.00</Typography>
                </Box>
                <Box style={labelContent}>
                 <input style={radioIcon} type="radio" id="f-option6" name="selector"/>
                 <label for="html">Check Payments </label>
                  </Box>
                <Typography style={payContent}>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</Typography>
                <Box style={labelContent}>
                 <input style={radioIcon} type="radio" id="f-option6" name="selector"/>
                 <label for="html">Check Payments </label>
                  </Box>
                <Typography style={payContent}>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</Typography>
                <Button style={btn1}>Proceed to Paypal</Button>
                </Box>
        </Grid>
         {/* <Box style={FirstInput}>
         <FormGroup>
             <FormControlLabel control={<Checkbox defaultChecked />} label="Create an account?" />
         </FormGroup > 
         <br></br><br></br>
         <Typography style={detailHeading} variant='h5'>Billing Details</Typography><br></br>
         <FormGroup>
             <FormControlLabel control={<Checkbox defaultChecked />} label="Ship to a different address?" />
         </FormGroup > 
         <Grid item xs={8}>
         <textarea class="textarea" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
         </Grid>
        </Box> */}
        </Grid>
           {/* <br></br><br></br><br></br> */}
     
      
           <Grid>
       <Footer /> 
    </Grid>
       
    </>
  )
}

export default Card2;