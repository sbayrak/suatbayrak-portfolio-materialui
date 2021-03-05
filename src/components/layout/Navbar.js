import React from 'react';
import useStyles from '../../utils/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={3}
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <Grid item className={classes.gridItem}>
              <IconButton edge='start'>
                <MenuIcon></MenuIcon>
              </IconButton>
              <Typography variant='h6'>Suat Bayrak</Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
              <div className={classes.list}>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
