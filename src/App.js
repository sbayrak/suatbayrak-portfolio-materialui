import './App.css';
import Navbar from './components/layout/Navbar';
import { Typography } from '@material-ui/core';
import useStyles from './utils/styles';

function App() {
  const classes = useStyles();
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Typography variant='h2' className={classes.test}>
        Suat
      </Typography>
    </div>
  );
}

export default App;
