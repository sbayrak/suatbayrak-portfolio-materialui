import React, { Fragment } from 'react';
import mernLogo from '../../img/mern_logo.png';
import reactLogo from '../../img/react_logo.png';
import {
  Typography,
  CssBaseline,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({}));

const Portfolio = () => {
  const classes = useStyles();

  const portfolios = [
    {
      logo: 'mernLogo',
      name: 'AuctionHouse',
      desc:
        'AuctionHouse is a tender based web application where the companies may register with requested mandatory informations (tax number, website, tax office name, etc...) and open a tender and get offers from other companies.',
      repo: 'https://github.com/sbayrak/auctionhouse',
      website: 'https://auctionhouse12.herokuapp.com/',
    },
    {
      logo: 'mernLogo',
      name: 'DevConnector',
      desc:
        'Medium size social media for developers, where you can create a profile, education information, make posts, comment and like functionality',
      repo: 'https://github.com/sbayrak/mern-devconnector',
      website: 'https://devconnector52.herokuapp.com/',
    },
    {
      logo: 'mernLogo',
      name: 'ContactKeeper',
      desc: 'A contact keeper app built by using MERN stack',
      repo: 'https://github.com/sbayrak/mern-contactkeeper',
      website: 'https://devconnector52.herokuapp.com/',
    },
    {
      logo: 'reactLogo',
      name: 'BreakingBadAPI',
      desc:
        'This app displays all Breaking Bad characters with some information provided from The Breaking Bad API.',
      repo: 'https://github.com/sbayrak/breakingbad-api-react',
      website: 'https://breakingbad01.netlify.app/',
    },
    {
      logo: 'reactLogo',
      name: 'PokemonAPI',
      desc: 'Displaying all pokemons from PokeAPI, including pagination...',
      repo: 'https://github.com/sbayrak/react-pokemonapi',
      website: 'https://react-pokemonapi.web.app/',
    },
    {
      logo: 'reactLogo',
      name: 'fbmessengerclone',
      desc: 'Facebook Messenger clone with ReactJS and Firebase',
      repo: 'https://github.com/sbayrak/fbmessengerclone',
      website: 'https://fbmessengerclone-7bc8a.web.app/',
    },
    {
      logo: 'reactLogo',
      name: 'material-ui-blogpage',
      desc: 'A basic page of a blog, fully responsive',
      repo: 'https://github.com/sbayrak/react-materialui-blogpage',
      website: 'https://materialui-blogpage.netlify.app/',
    },
  ];

  return (
    <Fragment>
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
            <Typography variant='h2' gutterBottom>
              Portfolio
            </Typography>
            <Typography></Typography>
          </Grid>

          <Grid container xs={12} spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='suatbayrak'
                    height='160'
                    image={mernLogo}
                    title='MERN'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Lizard
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {portfolios[0].desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Repository
                  </Button>
                  <Button size='small' color='primary'>
                    Website
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Portfolio;
