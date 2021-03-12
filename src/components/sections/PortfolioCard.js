import React from 'react';
import Fade from 'react-reveal/Fade';
import mernLogo from '../../img/mern_logo.png';
import reactLogo from '../../img/react_logo.png';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.grey[200],
    [theme.breakpoints.down('sm')]: {
      height: 250,
    },
  },
  cardImg: {
    [theme.breakpoints.down('sm')]: {
      height: 75,
    },
  },
  cardDesc: {
    minHeight: 100,
    [theme.breakpoints.down('sm')]: {
      minHeight: 55,
      fontSize: '11px',
    },
  },
  bottomCardAction: {
    color: theme.palette.grey[800],
  },
  bottomCardLink: {
    color: theme.palette.grey[800],
    textDecoration: 'none',
  },
}));

const PortfolioCard = ({ portfolio }) => {
  console.log(portfolio.logo);
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Fade right>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='suatbayrak'
              height='150'
              image={portfolio.logo === 'mernLogo' ? mernLogo : reactLogo}
              title='MERN'
              className={classes.cardImg}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {portfolio.name}
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                className={classes.cardDesc}
              >
                {portfolio.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.bottomCardAction}>
            <Button size='small' color='primary'>
              <Link
                href={portfolio.repo}
                className={classes.bottomCardAction}
                rel='noreferrer'
                target='_blank'
                style={{ textDecoration: 'none' }}
              >
                Repository
              </Link>
            </Button>
            <Button size='small' color='primary'>
              <Link
                href={portfolio.website}
                className={classes.bottomCardAction}
                rel='noreferrer'
                target='_blank'
                style={{ textDecoration: 'none' }}
              >
                Website
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </Grid>
  );
};

export default PortfolioCard;
