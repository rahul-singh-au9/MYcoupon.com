import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },

  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },

  userName: {
    display: 'flex',
    alignItems: 'center',
  },

}));