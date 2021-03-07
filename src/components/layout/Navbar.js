import React, { Fragment, useState } from 'react';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Avatar,
  CssBaseline,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import MailIcon from '@material-ui/icons/Mail';
import '../../App.css';

const theme = createMuiTheme({});
const useStyles = makeStyles((theme) => ({
  test: {
    height: '200vh',
  },
  navbar: {
    width: '100%',
  },
  left: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBtn: {
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: '#F9C11C',
  },
  leftTypo: {
    color: '#e3e3e3',
    textDecoration: 'none',
    display: 'inline',
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  right: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexGrow: 0,
    },
    width: '60%',
  },
  btnMenu: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
  },

  mobileMenu: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileMenuItem: {
    height: 100,
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4),
    },
    width: '100%',
  },

  desktopMenu: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  desktopMenuUl: {
    width: '60%',
    margin: '0 auto',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  desktopMenuUlLink: {
    width: '100%',
    padding: '5px 0',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.grey[300],
    fontSize: theme.spacing(2),
    borderBottom: `2px solid ${theme.palette.grey[800]}`,
    transition: '0.5s ease-in-out',
    '&:hover': {
      borderBottom: `2px solid #f9c11c`,
    },
  },
}));
const Navbar = () => {
  const styles = {
    mobileMenuLink: {
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.grey[900],
    },
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mobileMenu = (
    <Menu
      id='simple-menu'
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className={classes.mobileMenuMenu}
    >
      <MenuItem className={classes.mobileMenuItem}>
        <Link href='/home' style={styles.mobileMenuLink}>
          <HomeIcon></HomeIcon>
          <Typography variant='span' style={{ paddingLeft: theme.spacing(1) }}>
            Home
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
        <Link href='/about' style={styles.mobileMenuLink}>
          <InfoIcon></InfoIcon>
          <Typography variant='span' style={{ paddingLeft: theme.spacing(1) }}>
            About
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
        <Link href='/portfolio' style={styles.mobileMenuLink}>
          <CodeIcon></CodeIcon>
          <Typography variant='span' style={{ paddingLeft: theme.spacing(1) }}>
            Portfolio
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
        <Link href='/contact' style={styles.mobileMenuLink}>
          <MailIcon></MailIcon>
          <Typography variant='span' style={{ paddingLeft: theme.spacing(1) }}>
            Contact
          </Typography>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <CssBaseline></CssBaseline>
      <AppBar
        position='fixed'
        classes={classes.navbar}
        style={{ background: 'transparent', top: '0' }}
      >
        <Toolbar>
          <div className={classes.left}>
            <IconButton edge='end' size='medium'>
              <Avatar alt='suatbayrak' className={classes.leftBtn}>
                SB
              </Avatar>
            </IconButton>
            <Typography variant='h6' className={classes.leftTypo}>
              <a href='#!' rel='noreferrer' className={classes.leftTypo}>
                Suat Bayrak
              </a>
            </Typography>
          </div>

          <div className={classes.right}>
            {mobileMenu}
            <div className={classes.mobileMenu}>
              <IconButton
                aria-label='show more'
                aria-haspopup='true'
                color='inherit'
                onClick={handleClick}
              >
                <MenuIcon
                  style={{ color: 'e3e3e3' }}
                  fontSize='large'
                ></MenuIcon>
              </IconButton>
            </div>
            <div className={classes.desktopMenu}>
              <ul className={classes.desktopMenuUl}>
                <li>
                  <Typography variant='h6'>
                    <Link
                      href='#home'
                      className={classes.desktopMenuUlLink}
                      underline='none'
                    >
                      Home
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant='h6'>
                    <Link
                      href='#about'
                      className={classes.desktopMenuUlLink}
                      underline='none'
                    >
                      About
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant='h6'>
                    <Link
                      href='#portfolio'
                      className={classes.desktopMenuUlLink}
                      underline='none'
                    >
                      Portfolio
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant='h6'>
                    <Link
                      href='#contact'
                      className={classes.desktopMenuUlLink}
                      underline='none'
                    >
                      Contact
                    </Link>
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
