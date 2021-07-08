import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { LeaveTracker, ExpenseTracker } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister,faLaptopHouse, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [leave, setLeaveTracker] = React.useState(false);
  const [expense, setExpenseTracker] = React.useState(false);
  const [dashboard, setDashboard] = React.useState(true);
  const selected = true

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const activeDashboard = () =>{
      setLeaveTracker(false);
      setExpenseTracker(false);
      setDashboard(true);
    }

    const activeLeave = () => {
        setLeaveTracker(true);
        setExpenseTracker(false);
        setDashboard(false);
    }

    const activeExpense = () => {
        setExpenseTracker(true);
        setLeaveTracker(false);
        setDashboard(false);
    }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Trackers
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="" />
          </StyledBadge>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button selected = {leave || expense ? null : selected}>
            <ListItemIcon><FontAwesomeIcon icon={faTachometerAlt} style={{color:"#3f51b5"}}/></ListItemIcon>
            <ListItemText onClick={activeDashboard}>Dashboard</ListItemText>
          </ListItem>
          <ListItem button selected = {dashboard || expense ? null : selected}>
            <ListItemIcon><FontAwesomeIcon icon={faLaptopHouse} style={{color:"#3f51b5"}}/></ListItemIcon>
            <ListItemText onClick={activeLeave}>LeaveTracker</ListItemText>
          </ListItem>
          <ListItem button selected = {leave || dashboard ? null : selected}>
            <ListItemIcon><FontAwesomeIcon icon={faCashRegister} style={{color:"#3f51b5"}}/></ListItemIcon>
            <ListItemText onClick={activeExpense}>ExpenseTracker</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {dashboard ? <List /> : null }
        {leave ? <LeaveTracker /> : null }
        {expense ? <ExpenseTracker /> : null }
      </main>
    </div>
  );
}