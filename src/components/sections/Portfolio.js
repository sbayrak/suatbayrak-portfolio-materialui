import React, { Fragment } from 'react';
import { Typography, CssBaseline, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioCard from './PortfolioCard';
import portfoliosJSON from './portfolios.json';

const useStyles = makeStyles((theme) => ({
  Typo1: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[100],
    [theme.breakpoints.down('sm')]: {
      fontSize: '52px',
    },
  },
  gridContainer: {
    borderTop: '1px solid rgba(249, 193, 28, 0.7)',
    paddingTop: theme.spacing(3),
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div id='#portfolio'>
        <CssBaseline></CssBaseline>
        <Container maxWidth='lg'>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              justify='space-between'
              alignItems='center'
            >
              <Typography variant='h2' gutterBottom className={classes.Typo1}>
                Portfolio
              </Typography>
              <Typography></Typography>
            </Grid>

            <Grid
              container
              xs={12}
              spacing={2}
              className={classes.gridContainer}
            >
              {portfoliosJSON.map((portfolio, index) => (
                <PortfolioCard
                  key={index}
                  portfolio={portfolio}
                ></PortfolioCard>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

export default Portfolio;
