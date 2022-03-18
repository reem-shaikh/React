import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  //creating a custom hook called useStyles 
  container: {
    //lhs- camelcase: rhs- strin
    padding: theme.spacing(2, 0, 6),
    marginLeft: '700px',
  },
  icon: {
    marginRight: '20px',
  },
  cardGrid: {
    padding: '20px 0',
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: '1',
  }
}))

export default useStyles