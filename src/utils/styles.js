import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

const theme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  test: {
    height: '200vh',
  },
  navbar: {
    width: '100%',
  },
  left: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBtn: {
    color: '#e3e3e3',
    backgroundColor: '#222',
  },
  leftTypo: {
    color: '#e3e3e3',
    textDecoration: 'none',
    display: 'inline',
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  right: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexGrow: 0,
    },
    width: '60%',
  },
  btnMenu: {
    width: '100%',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
  },

  mobileMenu: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileMenuItem: {
    border: '1px solid red',
    height: 100,
    padding: theme.spacing(7),
    width: '100%',
  },

  desktopMenu: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  desktopMenuUl: {
    width: '60%',
    margin: '0 auto',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  desktopMenuUlLink: {
    color: theme.palette.grey[200],
  },
}));

export default useStyles;
export { theme, ThemeProvider };
