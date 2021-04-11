import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import hp from '../images/hp_img.png'
import Alert from '@material-ui/lab/Alert';
  
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    '&:focus' :{
      outline:'none',
    }
  },
  alert : {
    width: '100%',
      '& > * + *': {
      marginTop: theme.spacing(2),
    }
  },
  git : {
    fontSize:'40px',
    color:'black',
  }
}));
  
function SignIn() {
    const classes = useStyles();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [byPass, setbyPass] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [passwordError, setPasswordError] = React.useState('')

    const checkSubmit = (event) =>{
        event.preventDefault()
        if(email === "" && password === ""){
          setbyPass(true)              //email and password are required
        }
        else if(email === ""){
          setEmailError(true)          //email is required
        }
        else if(password === ""){
          setPasswordError(true)      //password is required
        }
        else{                        // should get access to dashboard as email and password are given
          setEmailError(false)        
          setPasswordError(false)
        }
    }

    const inputEmail = (e) =>{
      setEmail(e.target.value)      //email is set
      setEmailError(false)
      setPasswordError(false)
      setbyPass(false)
    }

    const inputPassword = (e) =>{
      setPassword(e.target.value)  //password is set
      setPasswordError(false)
      setEmailError(false)
      setbyPass(false)
    }
  
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar src={hp} />
                <Typography component="h1" variant="h5">
                  MDT-Automation
                </Typography>
                {byPass ?          // you must provide email and password message state is true
                <div className={classes.alert}>
                  <Alert severity="error">You must provide email ID and password</Alert>
                </div> 
                : null}
                <form className={classes.form} noValidate>
                  <TextField           //textfield for email
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email ID"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={inputEmail}
                    autoFocus
                  />
                  {emailError ? <span style={{color:'red'}}>Email is required</span>:null}  
                  <TextField             //testfield for password
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={inputPassword}
                    autoComplete="off"
                  />
                  {passwordError ? <span style={{color:'red'}}>Password is required</span>:null}
                  <br />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={checkSubmit}       
                    >
                    Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
  }

class Login extends Component{
    render(){
        return(
            <React.Fragment>
               <SignIn />
            </React.Fragment>
        )
    }

}

export default Login