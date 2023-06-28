import {useState} from 'react'
import axios from 'axios'
import { Box, Typography,TextField,Button } from "@mui/material"
import img1 from '../images/img1.jpeg'
import { useNavigate } from 'react-router-dom'


const bg = {
    backgroundImage:`url(${img1})`,
    backgroundSize:'cover',
    backgroundPosition:'fixed',
    backgroundRepeat:'no-repeat',
    height:'100vh',
    width:'100%',
  }
const signupCard = {
    background:'white',
    position:'absolute',
    width:'43%',
    height:'100vh',
    top:'2%',
    left:'30%', 
}
const upHeading = {
    textAlign:'center',
    color:'grey',
    marginTop:'8px',
    fontSize:'16px',
    lineHeight:'1.4',
}
const formContent = {
    colour:'#140C40',
    textAlign:'left',
    fontWeight:'600',
    fontSize:'17px',
    paddingTop:'20px',
    marginLeft:'28px',
  }
  const field ={
    width:'80%',
    marginLeft:'28px',
    paddingTop:'5px',
  }
  const loginFooter ={
    paddingTop:'40px',
    marginLeft:'30px',
    color:'grey',
    fontSize:'14px',
  }
  const up={
    color:'#FD8F5F',
    fontSize:'14px',
    textDecoration:'none',
  }
  const btn = {
    backgroundColor:'#FD8F5F',
    padding:'10px 38px',
    marginLeft:'30px',
    marginTop:'25px',
    height:'55px',
    color:'white',
    fontSize:'16px',
   }
const signupFlex = {
    display:'flex'
}
function SignUp() {

  const [data,setData] = useState({
    firstName:"",
    Email:"",
    password:"",
    cPassword:"",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("")
  const handleChange = ({currentTarget:input}) => {
    setData({...data,[input.name]:input.value})
  };

  const handleSubmit = async(e) => {
     e.preventDefault()
     try {
      const url = "http://localhost:8080/createUser";
      const res = await axios.post(url,data);
      navigate('/login')
      console.log(res.message);
     } catch (error) {
      if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  return (
    <>
          <Box style={bg} className='banner'>
              <Box style={signupCard} className='bannerForm'>
                     <Typography style={upHeading}>Create your account to get full access</Typography>
          
              <form onSubmit={handleSubmit}>
                  <Typography style={formContent} className='name'>Full Name</Typography>
                  <TextField style={field} className='feildInput' id="outlined-basic" variant="outlined"
                   placeholder='Enter full name'
                   name='firstName'
                   onChange={handleChange}
                    value={data.firstName}
                    required
                   />
                  <Typography style={formContent}>Email Address</Typography>
                  <TextField style={field} className='feildInput' id="outlined-basic" variant="outlined"
                   placeholder='Enter Email Address'
                   name='Email'
                   onChange={handleChange}
                    value={data.lastName}
                    required
                    />
                  <Typography style={formContent} className='name'>Password</Typography>
                  <TextField style={field} className='feildInput' id="outlined-basic" variant="outlined"
                   placeholder='Enter Password'
                   name='password'
                   onChange={handleChange}
                    value={data.password}
                    required
                    />
                  <Typography style={formContent}>Confrim Password</Typography>
                  <TextField style={field} className='feildInput' id="outlined-basic" variant="outlined"
                   placeholder='Confrim Password'
                   name='cPassword'
                   onChange={handleChange}
                    value={data.ConfrimPassword}
                    required
                    />
                    {/* <button type='submit'>SignUp</button> */}
                <Button style={btn} className='btn' type="submit">signup</Button>
              </form>

              <Box style={signupFlex}>
              <Typography style={loginFooter} className='btnContent'>Don’t have an account?<a href='#' style={up}>Log in</a> here</Typography>
          </Box>
          </Box>
        </Box>
    </>
  )
}

export default SignUp