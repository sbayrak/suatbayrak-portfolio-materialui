import './App.css';
import Navbar from './components/layout/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  bg: { backgroundColor: theme.palette.grey[900] },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={`App ${classes.bg}`}>
      <Helmet>
        <meta
          name='description'
          content='Suat Bayrak Web Developer, MERN Stack'
        />
        <title>Suat Bayrak</title>
      </Helmet>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
