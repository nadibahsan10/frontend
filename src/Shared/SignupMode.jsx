import React from "react";
import "./SignupMode.css";
import { Grid,Button,TextField,Select,MenuItem,Link} from "@mui/material";
const SignupMode = (props) => {
  return <Grid container sx={{ height: "100%",width:"100%",backgroundColor:"White", borderRadius:"4px"}}>
    <Grid xs={6} item className="signup-left">
      <h2>Create a new account</h2>
      <hr style={{ border: '1px solid #780000', margin: '5px 0' ,width:'100%' }} />
      <form action="">
      <TextField  label="First Name" type="Text"  variant="outlined" sx={{marginTop: "10px",width:"100%"}} />
      <TextField  label="Last Name" type="Text"  variant="outlined" sx={{marginTop: "10px",width:"100%"}} />
      
      <Grid container sx={{width:"100%" ,marginTop: "10px"}}>
        <Grid xs={6} item>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value= {10}
          label="User Type"
          sx={{width:"95%"}}
        >
          <MenuItem value={10}>Student</MenuItem>
          <MenuItem value={20}>Alumni</MenuItem>
          <MenuItem value={30}>Guest User</MenuItem>
        </Select>
        </Grid>

        <Grid xs={6} item>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Gender"
          sx={{width:"100%"}}
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Others</MenuItem>
        </Select>
        </Grid>
      </Grid>

      <TextField  label="Personal Email / University Email " type="Text" variant="outlined" sx={{marginTop: "10px",width:"100%"}} />
      <TextField label="Password" type="Password" variant="outlined" sx={{marginTop: "10px",width:"100%"}} />

      <Button variant="contained" color="primary" sx={{width: "100%",padding:"10px 0", color:"white",marginTop: "10px"}}> SIGNUP </Button>
      <hr style={{ border: '1px solid #780000', margin: '10px 0' ,width:'100%' }} />
      <p>Already have an account? <Link onclick={props.changeMode} component={Button}>Login</Link> </ p>
      </form>

    </Grid>

    <Grid xs={6} item className="signup-right">
    <img src="./profileImage.webp" alt="profilePicture" />
    <h4>This is picture</h4>
    <Button variant="contained" color="white" sx={{width: "100%",padding:"10px 0", color:"primary.main"}}> UPLOAD A PROFILE PICTURE </Button>
    </Grid>
  </Grid>
};

export default SignupMode;
