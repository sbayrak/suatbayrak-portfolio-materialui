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
}));

export default useStyles;
export { theme, ThemeProvider };
