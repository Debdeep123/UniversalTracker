import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPeace,faHospital,faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';  
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    paper: {
        padding: '20px 22px 70px 22px',
        marginTop: theme.spacing(4),
    },
    icon : {
        color: '#3f51b5',
        marginRight: theme.spacing(2),
    },
    popover: {
        pointerEvents: 'none',
    },
    paperPop: {
        padding: theme.spacing(2),
    },
    iconInfo : {
        color:'#3f51b5',
        marginRight:theme.spacing(1),
    },
    avail : {
        float:"right",
    },
  }));
  

const employees = [
    'Debdeep Dutta',
     'Ankur Kalita' 
] 

const leaves = [
    {type:'Casual Leave', icon:faHandPeace},
    {type:'Sick Leave',icon:faHospital},
    {type:'Privileged Leave',icon:faRupeeSign},
]

const StyledBadge = withStyles((theme) => ({
    badge: {
      left: 1,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 2px',
    },
  }))(Badge);

const LeaveTracker = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState('');
    const [employeeLeave,setEmployeeforLeave] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [dialogOpen, setDialog] = React.useState(false);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const dialog = () =>{
        setDialog(true);
    };

    const handleClose= () => {
        setDialog(false)
    }
  
    const open = Boolean(anchorEl);

    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete   
                        value={value}
                        //inputValue={inputValue}
                        //onInputChange={(event, newInputValue) => {
                          //setInputValue(newInputValue);
                          //console.log("InputChange",newInputValue);
                        //}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            setEmployeeforLeave(true);
                        }}
                        id="combo-box-demo"
                        options={employees}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} label="Select employee for leave" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm>
                </Grid>
            </Grid>
            {employeeLeave ?
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Paper elevation={6} className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm></Grid>
                            <Grid item xs={12} sm={6}>
                                <ButtonGroup color="primary" aria-label="outlined primary button group" fullWidth>
                                    <Button
                                        onMouseEnter={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                    >Casual Leave
                                    </Button>
                                    <Button
                                        onMouseEnter={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                    >Sick Leave
                                    </Button>
                                    <Button
                                        onMouseEnter={handlePopoverOpen}
                                        onMouseLeave={handlePopoverClose}
                                    >
                                    Privileged Leave
                                    </Button>
                                </ButtonGroup>
                                <Popover
                                    id="mouse-over-popover"
                                    className={classes.popover}
                                    classes={{
                                    paper: classes.paperPop,
                                    }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Typography><InfoIcon className={classes.iconInfo}/>There are 6 CLs available</Typography>
                                </Popover>
                            </Grid>
                            <Grid item xs={12} sm>
                                <IconButton aria-label="cart" style={{float:"right"}}>
                                    <StyledBadge badgeContent={30} color="secondary">
                                    <Tooltip title="Total leaves" interactive>
                                        <ShoppingCartIcon style={{color:"#3f51b5"}}/>
                                    </Tooltip>
                                    </StyledBadge>
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <TextField  
                                    //id="standard-required" 
                                    label="Employee ID" 
                                    defaultValue="1007" 
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField  
                                    //id="standard-required" 
                                    label="Employee Name" 
                                    defaultValue="Debdeep Dutta" 
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    //id="standard-required" 
                                    label="Email" 
                                    type="email"
                                    defaultValue="debdeep@boldtek.com" 
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    label="Designation" 
                                    defaultValue="Software Developer" 
                                    fullWidth
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    required
                                    options={leaves}
                                    getOptionLabel={(option) => option.type}
                                    renderOption={(option) => (
                                        <React.Fragment>
                                            <FontAwesomeIcon icon={option.icon} className={classes.icon}/> 
                                            {option.type}
                                        </React.Fragment> 
                                    )}
                                    renderInput={(params) => <TextField {...params} label="Leave Type" />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}><TextField required  label="Date of Leave"  fullWidth/></Grid>
                        </Grid> 
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}> 
                                <TextField
                                    id="outlined-multiline-static"
                                    style={{ marginTop: 40 }}
                                    margin="normal"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    label="Reasor for leave"
                                    placeholder="Put the reason for leave here.."
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>     
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Button variant="contained" color="primary" onClick={dialog} className={classes.avail}>
                                    Avail
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid> : null}
            <Dialog
                open={dialogOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    If you agree then leave will be assigned to the employees and employee will be notified.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
      </>
    )
}

export default LeaveTracker