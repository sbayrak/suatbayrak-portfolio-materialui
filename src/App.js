import './App.css';
import Navbar from './components/layout/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/sections/Home';

const useStyles = makeStyles((theme) => ({
  bg: { backgroundColor: theme.palette.grey[900] },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={`App ${classes.bg}`}>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default App;
