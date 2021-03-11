import React from 'react';
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
  },
  cardDesc: {
    minHeight: 100,
  },
  bottomCardAction: {
    color: theme.palette.grey[800],
  },
}));

const PortfolioCard = ({ portfolio }) => {
  console.log(portfolio.logo);
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='suatbayrak'
            height='150'
            image={portfolio.logo === 'mernLogo' ? mernLogo : reactLogo}
            title='MERN'
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
        <CardActions>
          <Button
            size='small'
            color='primary'
            className={classes.bottomCardAction}
          >
            Repository
          </Button>
          <Button
            size='small'
            color='primary'
            className={classes.bottomCardAction}
          >
            <Link>asd</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PortfolioCard;
