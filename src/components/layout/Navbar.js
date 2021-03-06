import React, { Fragment, useState } from 'react';
import useStyles, { theme } from './styles';
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
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import MailIcon from '@material-ui/icons/Mail';
import '../../App.css';

const useStyles2 = makeStyles((theme) => ({
  mobileMenuItem: {
    border: '1px solid red',
    height: 100,
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
    width: '100%',
  },
}));
const Navbar = () => {
  const styles = {
    mobileMenuLink: {
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.grey[900],
    },
    desktopMenuUlLink: {
      color: theme.palette.grey[300],
      fontSize: theme.spacing(2),
    },
  };
  const classes = useStyles();
  const classes2 = useStyles2();
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
      <MenuItem className={classes2.mobileMenuItem}>
        <Link href='/home' style={styles.mobileMenuLink}>
          <HomeIcon></HomeIcon>
          <Typography variant='span' style={{ paddingLeft: theme.spacing(1) }}>
            Home
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes2.mobileMenuItem}>
        <Link href='/about' style={styles.mobileMenuLink}>
          <InfoIcon></InfoIcon>
          <Typography variant='span' style={{ paddingLeft: theme.spacing(1) }}>
            About
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes2.mobileMenuItem}>
        <Link href='/portfolio' style={styles.mobileMenuLink}>
          <CodeIcon></CodeIcon>
          <Typography variant='span' style={{ paddingLeft: theme.spacing(1) }}>
            Portfolio
          </Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose} className={classes2.mobileMenuItem}>
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
        position='static'
        classes={classes.navbar}
        style={{ backgroundColor: theme.palette.grey[800] }}
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
                    <Link href='#home' style={styles.desktopMenuUlLink}>
                      Home
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant='h6'>
                    <Link href='#about' style={styles.desktopMenuUlLink}>
                      About
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant='h6'>
                    <Link href='#portfolio' style={styles.desktopMenuUlLink}>
                      Portfolio
                    </Link>
                  </Typography>
                </li>
                <li>
                  <Typography variant='h6'>
                    <Link href='#contact' style={styles.desktopMenuUlLink}>
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
