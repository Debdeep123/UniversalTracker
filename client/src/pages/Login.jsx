import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt, faUserTie, faEnvelopeSquare, faPhoneAlt, faAddressCard, faCalendarAlt, faCheckCircle, faTimes, faKey, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

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
  },
  center : {
    textAlign:'center',
    fontFamily: 'Helvetica',
    color:'#3f51b5',
    fontWeight: 700,
  },
  alignDiv : {
    marginTop:'12px',
  },
  icon : {
    color:'#949494',
  },
  buttonAlign : {
    
  } 
}));

function Register(props) {
  const classes = useStyles();
  const {value,close} = props

  return (
    <div>
      <Dialog open={value} onClose={close} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className={classes.center}>ADMIN REGISTRATION</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.weight}>
           
          </DialogContentText>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="id"
                  label="Employee ID"
                  type="number"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faIdCardAlt} className={classes.icon}/>
                    </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Employee Name"
                  type="text"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faUserTie} className={classes.icon}/>
                    </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  id="email_id"
                  label="Comapny Email"
                  type="text"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faEnvelopeSquare} className={classes.icon}/>
                    </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  id="phone"
                  label="Mobile Number"
                  type="number"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faPhoneAlt} className={classes.icon}/>
                    </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                //defaultValue="2017-05-24"
                //className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                  
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faKey} className={classes.icon}/>
                  </InputAdornment>
                  ),
                }}
              />
            </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  id="designation"
                  label="Designation"
                  type="text"
                  fullWidth
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FontAwesomeIcon icon={faAddressCard} className={classes.icon}/>
                    </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                margin="dense"
                id="date"
                label="DOB"
                type="date"
                fullWidth
                //defaultValue="2017-05-24"
                //className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                  
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faCalendarAlt} className={classes.icon}/>
                  </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.alignDiv}>
          <Button  
          onClick={close} 
          className={classes.buttonAlign} 
          color="primary" 
          variant="outlined" 
          size="small"
          endIcon={<FontAwesomeIcon icon={faCheckCircle} />}
          >
            Register
          </Button>
          <Button  
          onClick={close} 
          color="secondary" 
          variant="outlined" 
          size="small"
          endIcon={<FontAwesomeIcon icon={faTimes} />}
          > 
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  
export default function SignIn() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [byPass, setbyPass] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [passwordError, setPasswordError] = React.useState('')
    const [values, setValues] = React.useState({
      showPassword: false,
    });
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

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

    const form_register = () =>{
      setOpen(true)
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

    const handleClose = () => {
      setOpen(false)
    }
  
    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar>
                  <FontAwesomeIcon icon={faLaptopHouse} />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Universal Tracker
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
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    id="password"
                    onChange={inputPassword}
                    autoComplete="off"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                      ),
                    }}
                  />
                  {passwordError ? <span style={{color:'red'}}>Password is required</span>:null}
                  <br />
                  <Link href="#" onClick={form_register} style={{textDecoration:'none'}}>Don't have an account?</Link>
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
                  {open ? <Register value={open} close={handleClose}/> : null}
                </form>
            </div>
        </Container>
  );
}
