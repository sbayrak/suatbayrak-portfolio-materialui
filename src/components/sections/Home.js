import React, { Fragment } from 'react';
import suatbayrak512 from '../../img/suatbayrak512.png';
import suatbayrak192 from '../../img/suatbayrak192.png';
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  IconButton,
  Link,
  Card,
  CardMedia,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../layout/styles';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    height: '100vh',
    backgroundColor: theme.palette.grey[900],
    border: '1px solid cyan',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  gridContainer: {
    border: '1px solid yellow',
    height: '100vh',
    [theme.breakpoints.only('sm')]: {
      height: '90vh',
    },
    [theme.breakpoints.only('xs')]: {
      height: '85vh',
    },
  },
  gridItem: {
    border: '1px solid white',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  gridItemWrapper: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'start',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  rightTypo1: {
    fontWeight: theme.typography.fontWeightBold,
    color: '#f9c11c',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },
  rightTypo2: {
    fontWeight: 900,
    color: theme.palette.grey[100],
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  rightTypo3: {
    color: theme.palette.grey[500],
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  styleMERN: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[300],
  },
  rightTypo4: {
    marginLeft: theme.spacing(1),
    textDecoration: 'none',
    color: theme.palette.grey[100],
    fontWeight: theme.typography.fontWeightBold,
    borderBottom: `1px solid #f9c11c`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
    },
  },
  rightUl: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    textAlign: 'center',
  },
  rightUlLiBtn: {
    color: '#bc9016',
    transition: '0.5s ease-in-out',
    '&:hover': {
      color: '#f9c11c',
    },
  },
  rightUlLiBtnIcon: {
    fontSize: '44px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '26px',
    },
  },
  rightGridImg: {
    border: '1px solid red',
  },
  rightImg: {
    border: '1px solid white',
    width: 512,
    [theme.breakpoints.down('md')]: {
      width: 350,
    },
    [theme.breakpoints.down('sm')]: {
      width: 200,
    },
    [theme.breakpoints.down('xs')]: {
      width: 150,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline></CssBaseline>
      <Container maxWidth='xl' className={classes.homeContainer}>
        <Grid
          container
          justify='space-evenly'
          alignItems='center'
          className={classes.gridContainer}
        >
          <Grid item sm={12} md={6} className={classes.gridItem}>
            <div className={classes.gridItemWrapper}>
              <Typography
                variant='h5'
                gutterBottom
                className={classes.rightTypo1}
              >
                WEB DEVELOPER
              </Typography>
              <Typography
                variant='h1'
                gutterBottom
                className={classes.rightTypo2}
              >
                SUAT <br></br> BAYRAK
              </Typography>
              <Typography
                variant='body1'
                gutterBottom
                className={classes.rightTypo3}
              >
                Full stack web developer and computer engineer. Mostly focusing
                on <span className={classes.styleMERN}>MERN</span> stack
                <br></br>
                <Typography variant='body2'>
                  Need a website ?
                  <Typography variant='overline'>
                    <Link href='#contact' className={classes.rightTypo4}>
                      Please contact with me!
                    </Link>
                  </Typography>
                </Typography>
              </Typography>
              <ul className={classes.rightUl}>
                <li>
                  <IconButton>
                    <Link
                      href='https://www.linkedin.com/in/suat-bayrak/'
                      target='_blank'
                      rel='noreferrer'
                      className={classes.rightUlLiBtn}
                    >
                      <LinkedInIcon
                        className={classes.rightUlLiBtnIcon}
                      ></LinkedInIcon>
                    </Link>
                  </IconButton>
                </li>
                <li>
                  <IconButton>
                    <Link
                      href='https://github.com/sbayrak'
                      target='_blank'
                      rel='noreferrer'
                      className={classes.rightUlLiBtn}
                    >
                      <GitHubIcon
                        className={classes.rightUlLiBtnIcon}
                      ></GitHubIcon>
                    </Link>
                  </IconButton>
                </li>
                <li>
                  <IconButton>
                    <Link
                      href='https://www.instagram.com/sbayrak__/'
                      target='_blank'
                      rel='noreferrer'
                      className={classes.rightUlLiBtn}
                    >
                      <InstagramIcon
                        className={classes.rightUlLiBtnIcon}
                      ></InstagramIcon>
                    </Link>
                  </IconButton>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={`${classes.gridItem} ${classes.rightGridImg} `}
          >
            <img
              src={suatbayrak512}
              alt='suatbayrak'
              className={classes.rightImg}
              style={{ borderRadius: '25%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
