import { makeStyles } from '@material-ui/core/styles';

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
    color: '#000',
    textDecoration: 'none',
    display: 'inline',
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
    display: 'none',
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'inline-block',
    },
  },
  btnMenuMenu: {
    fontSize: '25px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      color: '#e3e3e3',
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',

    [theme.breakpoints.down('sm')]: {
      height: '100vh',
      position: 'absolute',
      flexDirection: 'column',
      backgroundColor: 'black',
      width: '100%',
      left: '-0%',
      display: 'flex',
      justifyContent: 'center',
      transition: '0.5s ease-in-out',
      fontSize: theme.spacing(5),
      padding: theme.spacing(3),
      marginTop: 0,
    },
  },
  li: {
    [theme.breakpoints.down('sm')]: {
      padding: '25px 0',
      width: '100%',
    },
  },
  navLink: {
    color: '#e3e3e3',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 10px',
      width: '100%',
    },
  },
  showList: {
    [theme.breakpoints.down('sm')]: {
      left: 0,
    },
  },
  removeList: {
    [theme.breakpoints.down('sm')]: {
      left: '-100%',
    },
  },
}));

export default useStyles;
