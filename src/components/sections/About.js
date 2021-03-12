import React, { Fragment } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import {
  Container,
  CssBaseline,
  Grid,
  Typography,
  Link,
  Paper,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutContainer: {},
  gridContainer: {
    padding: theme.spacing(1),
  },
  gridItem: {
    padding: theme.spacing(1),
    borderBottom: '1px solid rgba(249, 193, 28, 0.7)',
  },
  Typo1: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[100],
    [theme.breakpoints.down('sm')]: {
      fontSize: '52px',
    },
  },
  Link1: {
    color: '#f9c11c',
    fontSize: theme.spacing(2),
  },
  gridEdu: {
    padding: theme.spacing(2),
    textAlign: 'start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottom: '1px solid rgba(249, 193, 28, 0.2)',
  },
  Typo2: {
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.grey[100],
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  Typo3: {
    color: theme.palette.grey[50],
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  gitLink: {
    color: '#f9c11c',
    fontWeight: theme.typography.fontWeightMedium,
    textDecoration: 'none',
    borderBottom: '1px solid #212121',
    transition: '0.8s ease-in-out',
    '&:hover': {
      borderBottom: '1px solid #f9c11c',
    },
  },
  gridSkill: {
    width: '100%',
  },
  gridSkills: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  mernImg: {
    width: 500,
    borderRadius: '5px',
  },
  papers: {},
  gridPaper: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: theme.palette.grey[800],
    color: '#f9c11c',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline></CssBaseline>
      <Container maxWidth='lg' className={classes.aboutContainer}>
        <div id='about'>
          <Grid container className={classes.gridContainer}>
            <Grid
              container
              item
              xs={12}
              justify='space-between'
              alignItems='center'
              className={classes.gridItem}
            >
              <Typography variant='h2' className={classes.Typo1}>
                About
              </Typography>

              <Link
                href='https://drive.google.com/file/d/1xpxKZNvMetVoSHOLADNefZ7W18xFW8p-/view'
                rel='noreferrer'
                target='_blank'
                className={classes.Link1}
              >
                Download CV
              </Link>
            </Grid>
            {/* ABOUT GRID ABOVE */}
            <Grid
              item
              container
              className={`${classes.gridItem} 
          ${classes.gridEdu}`}
            >
              <Fade right>
                <Typography variant='h4' className={classes.Typo2} gutterBottom>
                  Education
                </Typography>
                <Typography
                  variant='subtitle1'
                  className={classes.Typo3}
                  gutterBottom
                >
                  2016-2021
                </Typography>
                <Typography
                  variant='subtitle2'
                  className={classes.Typo3}
                  gutterBottom
                >
                  Istanbul Bilgi University, Computer Engineering
                </Typography>
                <Typography
                  variant='body2'
                  className={classes.Typo3}
                  gutterBottom
                >
                  I have graduated from Computer Engineering B.Sc. at the
                  beginning of 2021. I took several courses on data structures,
                  cloud computing, user interface design, digital currencies and
                  blockchain,security and cryptography... I also made a thesis
                  project of a website called as AuctionHouse : Online Bidding,
                  can be found in my &nbsp;
                  <Link
                    href='https://www.github.com/sbayrak'
                    target='_blank'
                    rel='noreferrer'
                    className={classes.gitLink}
                    style={{ textDecoration: 'none' }}
                  >
                    GitHub repository.
                  </Link>
                </Typography>
              </Fade>
            </Grid>
            {/* EDUCATION GRID ABOVE */}

            <Grid
              item
              className={`${classes.gridItem} 
          ${classes.gridEdu} ${classes.gridSkill}`}
            >
              <Slide left>
                <Typography variant='h4' className={classes.Typo2} gutterBottom>
                  Skills
                </Typography>
                <Grid container className={classes.gridSkills} spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant='body2' className={classes.Typo3}>
                      &nbsp; &nbsp; Generally, I use MERN stack for web
                      development. I like to use JavaScript for both front-end
                      and back-end, therefore I enjoy using ReactJS, NodeJS and
                      Express. Also I like how MongoDB or NoSQL databases are
                      flexible; easy to use, manipulate or basic CRUD
                      mechanicisms. <br></br> <br></br>I like to learn new
                      things, as most of developers are aware, web development
                      is a lifetime learning process.
                    </Typography>
                  </Grid>
                  <Grid container xs={12} sm={6} className={classes.papers}>
                    <Grid item xs={6} className={classes.gridPaper}>
                      <Paper className={classes.paper}>JavaScript & ES6</Paper>
                    </Grid>
                    <Grid item xs={6} className={classes.gridPaper}>
                      <Paper className={classes.paper}>HTML5 & CSS3</Paper>
                    </Grid>
                    <Grid item xs={7} className={classes.gridPaper}>
                      <Paper className={classes.paper}>ReactJS</Paper>
                    </Grid>
                    <Grid item xs={5} className={classes.gridPaper}>
                      <Paper className={classes.paper}>NodeJS</Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.gridPaper}>
                      <Paper className={classes.paper}>MongoDB</Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.gridPaper}>
                      <Paper className={classes.paper}>ExpressJS</Paper>
                    </Grid>
                    <Grid item xs={4} className={classes.gridPaper}>
                      <Paper className={classes.paper}>GIT</Paper>
                    </Grid>
                    <Grid item xs={6} className={classes.gridPaper}>
                      <Paper className={classes.paper}>Material-UI</Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Slide>
            </Grid>
            {/* Skills Grid ABOVE */}

            <Grid
              item
              container
              className={`${classes.gridItem} 
          ${classes.gridEdu}`}
            >
              <Fade right>
                <Typography variant='h4' className={classes.Typo2} gutterBottom>
                  Work Experience
                </Typography>
                <Typography
                  variant='subtitle1'
                  className={classes.Typo3}
                  gutterBottom
                >
                  18.06.2018 - 13.07.2018
                </Typography>
                <Typography
                  variant='subtitle2'
                  className={classes.Typo3}
                  gutterBottom
                >
                  Milli Reasurans, Software Engineer Intern
                </Typography>
                <Typography
                  variant='body2'
                  className={classes.Typo3}
                  gutterBottom
                >
                  In Milli Reasurans, I used Java to develop an "Employee Status
                  App" as a intern job.
                </Typography>
                {/* <Typography gutterBottom></Typography> */}
                <br></br>
                <Typography
                  variant='subtitle1'
                  className={classes.Typo3}
                  gutterBottom
                >
                  05.08.2019 - 15.09.2019
                </Typography>
                <Typography
                  variant='subtitle2'
                  className={classes.Typo3}
                  gutterBottom
                >
                  Nova Systems and IT, Technician Intern
                </Typography>
                <Typography
                  variant='body2'
                  className={classes.Typo3}
                  gutterBottom
                >
                  As a developer, I wanted to learn more about fixing broken
                  computers and laptops. In this internship, I learnt how to
                  install new hardwares, how to format or find what is wrong
                  with a computer and fix it.
                </Typography>
              </Fade>
            </Grid>
            {/* WORK EXPERIENCE GRID ABOVE */}
          </Grid>
        </div>
        {/* WRAPPER GRID ABOVE */}
        <Typography gutterBottom style={{ height: 150 }}></Typography>
      </Container>
    </Fragment>
  );
};

export default About;
