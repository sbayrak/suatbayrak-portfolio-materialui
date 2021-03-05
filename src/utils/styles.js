import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    flexGrow: 1,
    listStyle: 'none',
  },
  gridItem: {
    border: '1px solid black',
  },
}));

export default useStyles;
