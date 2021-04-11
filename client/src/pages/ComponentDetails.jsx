import React from 'react'
import Sidebar from '../components/Sidebar'
import {
    Container,
    Paper,
    Typography,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    Accordion,
    Button,
    AccordionSummary, 
    AccordionDetails,
    FormControlLabel,
    Checkbox,
    TextField, 
    Grid,
    Dialog,
    DialogTitle,
    DialogActions,    
    DialogContent,
    DialogContentText,
} from '@material-ui/core/';
import {
    ExpandMore,
    Add, 
    DeleteOutline} from '@material-ui/icons/';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
    root: {
      //color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginTop:theme.spacing(0.5),
      backgroundColor:"#fff",
      minWidth: 200,
    },
    selectEmpty: {marginTop: theme.spacing(7),},
    basePaper:{
        padding: theme.spacing(2),
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    },
    pageHeader:{marginBottom: theme.spacing(2),textAlign:'center'},
    innerPaper:{backgroundColor:"#fafafa",},
    innerContainer:{padding: theme.spacing(2),},
    accordionContainer:{marginTop: theme.spacing(0)},
    accordianSummary:{margin:theme.spacing(0),backgroundColor:"#efefef",height:'60px'},
    buttonContainer:{
        paddingTop:theme.spacing(4),
        paddingBottom:theme.spacing(4)
    },
    iconStyle:{
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2)
    },
    margin: {
        marginTop: theme.spacing(1),
        marginLeft:theme.spacing(2)
    },
    a:{padding:theme.spacing(2)}
  }));

const Instance =(props)=>{
    const {handleClickOpen,classes} =props

    return (
        <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column"
        >
        <Grid item > 
            <FormControl variant="outlined"  className={classes.formControl} >
                <InputLabel id="demo-simple-select-outlined-label">Select Instance</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"                                
                    label="Select Instance"
                >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Instance 1</MenuItem>
                <MenuItem value={20}>Instance 2</MenuItem>
                <MenuItem value={30}>Instance 3</MenuItem>
                </Select>
            </FormControl>
            <Tooltip title="ADD INSTANCE" aria-label="add" placement="right-start">
                <Fab size="small" color="primary" aria-label="add" className={classes.margin} onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            </Grid>
        </Grid>
    )
}

const Accordions=(props)=> {
    const {handleClickOpen,classes} =props
    const deleteDialogue = {title:"Do you want to delete?",body:""}

    return (
        <Accordion>
            <AccordionSummary
            className={classes.accordianSummary}
            expandIcon={<ExpandMore />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
            >
            <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={<GreenCheckbox />}
                label="Property 1"
            />
            </AccordionSummary>
            <AccordionDetails>
                <Grid container justify ="center" >
                    <form noValidate autoComplete="off" >
                        <Grid container spacing={3} >
                            <Grid item ><TextField id="outlined-basic" label="propertyField " variant="outlined" /></Grid>
                            <Grid item ><TextField id="outlined-basic" label="value" variant="outlined" /></Grid>
                            <Grid item >
                                <Button > 
                                    <Add fontSize="medium" color="primary" className={classes.iconStyle}/>
                                </Button>
                                <Button onClick={()=>handleClickOpen(deleteDialogue)}>
                                    <DeleteOutline fontSize="medium" color="secondary" className={classes.iconStyle}/>
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item ><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                            <Grid item ><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
                            <Grid item >
                                <Button > 
                                    <Add fontSize="medium" color="primary" className={classes.iconStyle}/>
                                </Button>
                                <Button onClick={()=>handleClickOpen(deleteDialogue)}>
                                    <DeleteOutline fontSize="medium" color="secondary" className={classes.iconStyle}/>
                                </Button>
                            </Grid>                            
                        </Grid>            
                    </form>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
  }

const DialogBox=(props)=>{

    const {open,handleClose,dialogueTitle,dialogueBody} = props;
    return(
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogueTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogueBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" >
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    )
}


export default function ComponentDetails() {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);
    const [dialogueTitle, setDialogueTitle] = React.useState("Title");
    const [dialogueBody, setDialogueBody] = React.useState("Body");
    const handleClose = () => setOpen(false);
    
    const handleClickOpen = (props) => {
        const {title,body} = props
        setOpen(true);
        setDialogueTitle(title);
        setDialogueBody(body);   
    }
    
    const saveDialogue={title:"Do you want to save?",body:""}

    return (
        <div>
            <Sidebar/>
            <Container maxWidth="lg" >
                <Paper  elevation={3}  className={classes.basePaper}  >
                    <Typography variant="h3" color="primary" className={classes.pageHeader} >
                        Audio
                    </Typography>         
                    <Paper variant="outlined" className={classes.innerPaper}>
                        <Container align="center" className={classes.innerContainer}>                            
                            <Instance classes={classes}/>
                        </Container>
                        <Container maxWidth="md" align="center"  className={classes.accordionContainer}>
                            <Paper elevation={2} variant="outlined">
                                <Accordions classes = {classes} handleClickOpen={handleClickOpen}/>
                                <Accordions classes = {classes} handleClickOpen={handleClickOpen}/>
                                <Accordions classes = {classes} handleClickOpen={handleClickOpen}/>
                                <Accordions classes = {classes} handleClickOpen={handleClickOpen}/>     
                            </Paper>
                        </Container>
                        <Container className={classes.buttonContainer}>
                            <Grid container justify="center" spacing={3}>
                                <Grid item>
                                    <Button color="primary" variant="outlined">Add Property</Button>
                                </Grid>
                                <Grid item>
                                    <Button color="secondary" variant="outlined"  onClick={()=>handleClickOpen(saveDialogue)}>Save</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Paper>
                </Paper>
            </Container>
            <DialogBox handleClose={handleClose} dialogueTitle={dialogueTitle} dialogueBody={dialogueBody}   open={open} />  
        </div>
    )
}
