import React, { Fragment } from 'react';
import { CssBaseline, Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    borderTop: '1px solid rgba(249, 193, 28, 0.7)',
    marginTop: theme.spacing(15),
    padding: theme.spacing(5),
  },
  Typo1: {
    color: '#f9c11c',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline></CssBaseline>
      <Container maxWidth='lg' className={classes.footerContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='caption' className={classes.Typo1}>
              &copy; 2021 SUAT BAYRAK. ALL RIGHTS RESERVERD.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Footer;
