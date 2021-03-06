import React, { Fragment, useState } from 'react';
import useStyles from '../../utils/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Avatar,
  CssBaseline,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import '../../App.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const classes = useStyles();
  console.log(showMenu);
  return (
    <Fragment>
      <CssBaseline></CssBaseline>
      <AppBar position='sticky' classes={classes.navbar}>
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
            <IconButton
              edge='end'
              className={classes.btnMenu}
              size='medium'
              onClick={(e) => setShowMenu(!showMenu)}
            >
              <MenuIcon
                className={classes.btnMenuMenu}
                size='medium'
              ></MenuIcon>
            </IconButton>
            <ul
              className={`${classes.list} ${classes.list2} ${
                showMenu ? classes.showList : classes.removeList
              } `}
            >
              <li className={classes.li}>
                <a href='#!' className={classes.navLink}>
                  Home
                </a>
              </li>
              <li className={classes.li}>
                <a href='#!' className={classes.navLink}>
                  About
                </a>
              </li>
              <li className={classes.li}>
                <a href='#!' className={classes.navLink}>
                  Portfolio
                </a>
              </li>
              <li className={classes.li}>
                <a href='#!' className={classes.navLink}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
