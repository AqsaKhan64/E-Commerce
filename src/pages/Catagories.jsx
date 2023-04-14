import { Typography, Tab, Grid, Box,Button } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img5 from '../images/img5.jpg'
import img4 from '../images/img4.jpeg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const cardheading = {
  color: 'white',
  paddingTop: '96px',
  marginLeft: '60px',
  fontSize: '55px',
  fontWeight: '800',
  wordSpace: '1.5',
  // position:'absolute',   
}
const nav = {
  marginLeft: "60px",
  // paddingTop:'175px',

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
const category = {
  padding: '120px',
}
const categoryHeading = {
  fontSize: '36px',
  fontWeight: '700',
}
const categorypara = {
  color: '#7F85A8',
  fontSize: '17px',
  fontWeight: '400',
  lineHeight: '1.6',
  paddingTop: '20px',

}
const gridContent = {
  textAlign: 'center',
  fontSize: '20px',
  color: '#1e2147',
  fontWeight: '400',
  lineHeight: '1.2',

}
const catagoryList = {
  marginBottom: '50px',
}
const catagoryPPr = {
  border: '1px solid #F6F8FE',
  padding: '30px 30px 20px',
  boxShadow: '0px 10px 10px 0px #F6F8FE ',
}
const Select1 = {
  width: '75%',
  height: '35px',
  fontSize: '14px',
  background: '#fff',
  color: '#5d5d5d',
  padding: '3px 12px',
  marginLeft: '40px',
}
const gridContent2 = {
  marginLeft: '25px',
  fontSize: '16px',
  color: '#1e2147',
}
const Select2 = {
  marginLeft: '620px',
  height: '33px',
  background: '#fff',
  color: '#5d5d5d',
  padding: '3px 12px',
  lineHeight: '15px',
}
const collectionLink = {
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.6,',
  color: '#635c5c',
  textAlign: 'center',
  display: 'block',
  paddingBottom: '18px',
  textDecoration: 'auto',
}
const Collection = {
  textAlign: 'center',
  marginLeft: '-75px',
  paddingTop: '25px',
}
const value = {
  fontSize: '22px',
  color: '#670000',
}
const checkboxSection = {
  marginBottom: '30px',
  border: '1px solid #F6F8FE',
  padding: '30px 30px 20px',
  boxShadow: '0px 10px 10px 0px #F6F8FE ',
  textAlign:'center',
}
const range={
  color:'#FD8F5F',
  paddingTop:'45px',
  
}
const rangValue={
  display:'flex',
  justifyContent:'space-around',
}
const latestSection={
  marginBottom: '30px',
  border: '1px solid #F6F8FE',
  padding: '30px 30px 20px',
  boxShadow: '0px 10px 10px 0px #F6F8FE ',
  
}
const boxSection={
   marginLeft:'30px',
}
const latestHeading={
  marginLeft:'40px',
}
const catgoriBtn={
 marginLeft:'685px'
}
const banBtn={
  border:'1px solid #FD8F5F',
  color: "#FD8F5F",
  fontSize:'18px',
  padding: "12px 25px",
  marginTop: "30px"
}

function Catagories() {
  return (
    <>

      <div className='cardbg'>
        <Typography style={cardheading} variant='h4'>CATAGORIES</Typography>
        <div style={nav}>
          <Tab style={menu} label="Home" />
          {/* <ArrowBackIosIcon style={icon} /> */}
          <Tab style={menu} label="CATAGORIES" />
        </div>
      </div>
      <div style={category}>
        <Typography style={categoryHeading} variant='h5'>SHOPING WITH US</Typography>
        <Typography style={categorypara}>Browse from 230 latest items</Typography>
      </div>
      <Grid container item>
        <Grid item xs={3}>
          <Grid item><Typography style={gridContent} variant='h5'>Product</Typography></Grid>
          <div item style={catagoryList}>
            <div style={catagoryPPr}>
              <select style={Select1}>
                <option value="">Type</option>
                <option value="">Sofa</option>
                <option value="">Table</option>
                <option value="">Chair</option>
                <option value="">Bead</option>
                <option value="">Lightning</option>
                <option value="">Decore</option>
              </select>
              <br></br><br></br>
              <select style={Select1}>
                <option value="">Size</option>
                <option value="">2.2ft</option>
                <option value="">5.5ft</option>
                <option value="">8.2ft</option>
              </select>
              <br></br><br></br>
              <select style={Select1}>
                <option value="">Color</option>
                <option value="">White</option>
                <option value="">Green</option>
                <option value="">Grey</option>
              </select>
              <br></br><br></br>
              <select style={Select1}>
                <option value="">Price Range</option>
                <option value="">$10 to $20</option>
                <option value="">$10 to $20</option>
                <option value="">$10 to $20</option>
                <option value="">$10 to $20</option>
                <option value="">$10 to $20</option>
              </select>
            </div>
          </div>
          <div style={checkboxSection}>
            <div>
              <Typography variant='h6'>Price Range</Typography>
              <Box sx={{ width: 280 }} >
                <Slider style={range} 
                  aria-label="Small steps"
                  defaultValue={0.00000005}
                  step={0.00000001}
                  marks
                  min={-0.00000005}
                  max={0.0000001}
                  valueLabelDisplay="auto"
                />
              </Box>
              <div style={rangValue}>
                <Typography>Price:</Typography>
                <Typography>0</Typography>
                <Typography>to</Typography>
                <Typography>292</Typography>
              </div>
          </div>
          </div>
          <div style={latestSection}>
           <Typography style={latestHeading} variant='h6'>Latest Product</Typography>
           <div style={boxSection}>
           <FormGroup>
             <FormControlLabel control={<Checkbox defaultChecked />} label="Any" />
             <FormControlLabel control={<Checkbox defaultChecked />} label="Today" />
             <FormControlLabel control={<Checkbox defaultChecked />} label="Last 2 days" />
             <FormControlLabel control={<Checkbox defaultChecked />} label="Last 5 days" />
             <FormControlLabel control={<Checkbox defaultChecked />} label="Last 10 days" />
             <FormControlLabel control={<Checkbox defaultChecked />} label="Last 15 days" />
            </FormGroup>
          </div>
          </div>
        </Grid>
        <Grid item xs={9}><Typography style={gridContent2}>39, 782 Product found
          <select style={Select2}>
            <option value="">Sofa</option>
            <option value="">Table</option>
            <option value="">Chair</option>
            <option value="">Bead</option>
            <option value="">Lighting</option>
            <option value="">Decore</option>
          </select>
        </Typography>
          <Grid container item>
            <Grid item xs={4}>
              <img src={img10} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img src={img4} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img src={img6} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
          </Grid>
          <br></br><br></br>
          <Grid container item>
            <Grid item xs={4}>
              <img src={img7} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img src={img8} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img src={img9} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
          </Grid>
          <br></br><br></br>
          <Grid container item>
            <Grid item xs={4}>
              <img src={img5} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img src={img10} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
            <Grid item xs={4}>
              <img src={img7} alt='' width={250} />
              <div style={Collection}>
                <a href='link' style={collectionLink}>Bly Microfiber / Microsuede 56"<br></br> Armless Loveseat</a>
                <span style={value}>$367</span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box style={catgoriBtn} >
       <Button style={banBtn}>Discover More</Button>
       </Box>
       <br></br><br></br>

    </>
  )
}

export default Catagories