/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import {
  CssBaseline,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Snackbar,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import LinkIcon from '@material-ui/icons/Link';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#f9c11c',
    },
  },
});
const CssTextField = withStyles({
  root: {
    '& .MuiFormLabel-root': {
      color: '#e3e3e3',
    },
    '& label.Mui-focused': {
      color: '#f9c11c',
    },
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderColor: '#f9c11c',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f9c11c',
      },
      '&:hover fieldset': {
        borderColor: '#f9c11c',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f9c11c',
      },
    },
  },
})(TextField);
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const useStyles = makeStyles((theme) => ({
  contactContainer: {
    padding: theme.spacing(2),
  },
  gridContainer: {},
  subGridItemTop: {
    padding: theme.spacing(3),
    borderTop: '1px solid rgba(249, 193, 28, 0.7)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  Typo0: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[100],
    [theme.breakpoints.down('sm')]: {
      fontSize: '52px',
    },
  },
  Typo1: {
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#f9c11c',
    paddingBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  Typo2: {
    textDecoration: 'none',
    color: '#fff',
    paddingBottom: theme.spacing(2),
  },
  Typo2Link: {
    color: theme.palette.grey[50],
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px',
  },
  Typo2mail: {
    paddingLeft: '10px',
    fontSize: theme.spacing(2),
    fontStyle: 'italic',
  },
  subGridItemBottom: {
    borderRadius: '5px',
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(0),
    },
  },
  gridItemIcon: {},
  emailIcon: {
    color: '#f9c11c',
    fontSize: '44px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '34px',
    },
  },
  gridForm: {
    padding: theme.spacing(2),
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  form: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  formTxt: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.grey[900],
    borderRadius: '5px',
  },
  formBtn: {
    backgroundColor: '#f9c11c',
  },
}));

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState({
    open: false,
    msg: '',
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal } = alert;
  const [showSnack, setShowSnack] = useState('');

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // const handleClick = (newState, msg) => () => {
    //   setAlert({ open: true, msg: msg, ...newState });
    //   setTimeout(() => {
    //     setAlert(!alert);
    //   }, 6000);
    // };

    if (name && emailIsValid(email) && message) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: name.trim(),
          email: email,
          message: message.trim(),
        }),
      })
        .then((res) => {
          console.log(`hello`);
          setShowSnack('success');
          setTimeout(() => {
            setShowSnack('');
          }, 6000);
          // let msg = 'success';
          // handleClick(msg);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => console.log('catch'));
    } else {
      console.log('else');
      setShowSnack('error');
      setTimeout(() => {
        setShowSnack('');
      }, 6000);
    }
  };

  console.log(`snackstate is ${showSnack}`);
  const classes = useStyles();
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div id='contact'>
          <Container maxWidth='lg' className={classes.contactContainer}>
            <Grid container className={classes.gridContainer}>
              <Grid container justify='space-between' item xs={12}>
                <Grid container item xs={12} justify='space-between'>
                  <Typography
                    variant='h2'
                    gutterBottom
                    className={classes.Typo0}
                  >
                    Contact
                  </Typography>
                  <Typography></Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.subGridItemTop}>
                <Typography variant='h5' className={classes.Typo1} gutterBottom>
                  Reach to me by e-mail
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                  className={classes.Typo2}
                >
                  <Link
                    href='mailto:suat.bayrak@bilgiedu.net'
                    className={classes.Typo2Link}
                    style={{ textDecoration: 'none' }}
                  >
                    <LinkIcon style={{ color: '#f9c11c' }}></LinkIcon>
                    <Typography className={classes.Typo2mail}>
                      suat.bayrak@bilgiedu.net
                    </Typography>
                  </Link>
                </Typography>
              </Grid>

              <Grid
                container
                item
                xs={12}
                className={classes.subGridItemBottom}
              >
                <Grid item xs={12} className={classes.gridItemIcon}>
                  <EmailIcon className={classes.emailIcon}></EmailIcon>
                </Grid>
                <Grid container item xs={12} className={classes.gridForm}>
                  <form
                    noValidate
                    autoComplete='off'
                    className={classes.form}
                    onSubmit={handleSubmit}
                    data-netlify='true'
                    name='contact'
                    method='post'
                  >
                    <input
                      type='hidden'
                      name='form-name'
                      value='contact'
                    ></input>
                    <CssTextField
                      label='Your name'
                      variant='outlined'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={classes.formTxt}
                      color='secondary'
                    ></CssTextField>
                    <CssTextField
                      label='Your e-mail'
                      name='email'
                      variant='outlined'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={classes.formTxt}
                    ></CssTextField>
                    <CssTextField
                      label='Your message'
                      variant='outlined'
                      name='message'
                      multiline
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={classes.formTxt}
                      rows={10}
                    />
                    <Button
                      variant='contained'
                      type='submit'
                      className={`${classes.formTxt}  ${classes.formBtn}`}
                      onSubmit={handleSubmit}
                    >
                      Send <SendIcon style={{ marginLeft: '5px' }}></SendIcon>
                    </Button>
                  </form>

                  {showSnack === 'error' ? (
                    <Snackbar
                      autoHideDuration={6000}
                      anchorOrigin={{ vertical, horizontal }}
                      open={showSnack}
                      message='I love snacks'
                      key={vertical + horizontal}
                    >
                      <Alert severity='error'>Please check your fields.</Alert>
                    </Snackbar>
                  ) : (
                    <Snackbar
                      autoHideDuration={6000}
                      anchorOrigin={{ vertical, horizontal }}
                      open={showSnack}
                      message='I love snacks'
                      key={vertical + horizontal}
                    >
                      <Alert severity='success'>
                        Success! Your message delivered.
                      </Alert>
                    </Snackbar>
                  )}
                  {/* <Snackbar
                    autoHideDuration={6000}
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    message='I love snacks'
                    key={vertical + horizontal}
                  >
                    <Alert severity={alert.msg}>
                      Success! Your message delivered.
                    </Alert>
                  </Snackbar> */}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </Fragment>
  );
};

export default Contact;
