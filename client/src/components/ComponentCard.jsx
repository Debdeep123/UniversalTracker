import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';  
import CloseIcon from '@material-ui/icons/Close';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import MemoryIcon from '@material-ui/icons/Memory';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import {  blue } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHdd,faKeyboard,faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
  root: {
    width:200,
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) ' ,
  },
  title: {
    fontSize: 15,
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  icon: {
    fontSize:'20px',
    color:'red'
  },
  content : {
    paddingBottom:'0px'
  },
}));

const GreenCheckbox = withStyles({
  root: {
    //color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function ComponentCard() {
  const classes = useStyles();
  return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <CloseIcon className={classes.icon}/>
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" className={classes.blue}>
                    <FontAwesomeIcon icon={faVolumeUp} />
                  </Avatar>
                }
              />
              <CardContent className={classes.content}>
                <Typography className={classes.title}  gutterBottom>
                  Audio
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <FormControlLabel
                control={<GreenCheckbox name="checkedG" />}
                label=""
                style={{marginTop:'5px'}}
              />
              <Button href="#text-buttons" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <CloseIcon className={classes.icon}/>
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" className={classes.blue}>
                    <FontAwesomeIcon icon={faHdd} />
                  </Avatar>
                }
              />
              <CardContent className={classes.content}>
                <Typography className={classes.title}  gutterBottom>
                  Hard Disk Drive
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <FormControlLabel
                control={<GreenCheckbox name="checkedG" />}
                label=""
                style={{marginTop:'5px'}}
              />
              <Button href="#text-buttons" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <CloseIcon className={classes.icon}/>
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" className={classes.blue}>
                    <MemoryIcon />
                  </Avatar>
                }
              />
              <CardContent className={classes.content}>
                <Typography className={classes.title}  gutterBottom>
                  Memory
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <FormControlLabel
                control={<GreenCheckbox name="checkedG" />}
                label=""
                style={{marginTop:'5px'}}
              />
              <Button href="#text-buttons" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <CloseIcon className={classes.icon}/>
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" className={classes.blue}>
                    <BluetoothIcon />
                  </Avatar>
                }
              />
              <CardContent className={classes.content}>
                <Typography className={classes.title}  gutterBottom>
                  Bluetooth
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <FormControlLabel
                control={<GreenCheckbox name="checkedG" />}
                label=""
                style={{marginTop:'5px'}}
              />
              <Button href="#text-buttons" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <CloseIcon className={classes.icon}/>
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" className={classes.blue}>
                    <FontAwesomeIcon icon={faKeyboard} />
                  </Avatar>
                }
              />
              <CardContent className={classes.content}>
                <Typography className={classes.title}  gutterBottom>
                  Keyboard
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <FormControlLabel
                control={<GreenCheckbox name="checkedG" />}
                label=""
                style={{marginTop:'5px'}}
              />
              <Button href="#text-buttons" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <CloseIcon className={classes.icon}/>
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" className={classes.blue}>
                    O
                  </Avatar>
                }
              />
              <CardContent className={classes.content}>
                <Typography className={classes.title}  gutterBottom>
                  Optical Disk Drive
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <FormControlLabel
                control={<GreenCheckbox name="checkedG" />}
                label=""
                style={{marginTop:'5px'}}
              />
              <Button href="#text-buttons" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <CloseIcon className={classes.icon}/>
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" className={classes.blue}>
                    O
                  </Avatar>
                }
              />
              <CardContent className={classes.content}>
                <Typography className={classes.title}  gutterBottom>
                  Optical Disk Drive
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <FormControlLabel
                control={<GreenCheckbox name="checkedG" />}
                label=""
                style={{marginTop:'5px'}}
              />
              <Button href="#text-buttons" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.root} >
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <CloseIcon className={classes.icon}/>
                  </IconButton>
                }
                avatar={
                  <Avatar aria-label="recipe" className={classes.blue}>
                    O
                  </Avatar>
                }
              />
              <CardContent className={classes.content}>
                <Typography className={classes.title}  gutterBottom>
                  Optical Disk Drive
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <FormControlLabel
                control={<GreenCheckbox name="checkedG" />}
                label=""
                style={{marginTop:'5px'}}
              />
              <Button href="#text-buttons" color="primary">View</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>  
      </React.Fragment>
  );
}

export default ComponentCard