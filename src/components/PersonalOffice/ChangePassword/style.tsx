import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  title: {
    fontFamily: 'Oswald',
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: '47.42px',
    textAlign: 'left',
    marginTop: '19px',
    marginBottom: '34px',

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '200px'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '18px',
    width: '240px'
  },
  input: {
    border: "1px solid #282826",
    borderRadius: '0px',
    fontFamily: 'Oswald',
    fontSize: '18px',
    fontWeight: 300,
    marginTop: '9px',
    maxWidth: '240px',
    minWidth: '40px',
    height:'39px',
  },
  inputLabel: {
    fontFamily: 'Oswald',
    fontSize: '18px',
    fontWeight: 300,
  },
  inputRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5px',
  },
  buttonSave: {
    border: "1px solid #282826",
    borderRadius: '0px',
    backgroundColor: '#282826',
    color: '#FFFFFF',
    fontFamily: 'Oswald',
    fontSize: '18px',
    fontWeight: 400,
    marginTop: '20px',
    maxWidth: '240px',
    minWidth: '40px',
    height:'39px',
    transition: 'background-color 0.4s ease',
    '&:active': {
      backgroundColor: '#FFFFFF', // Зміна кольору фону при натисканні
    },
    textTransform: 'uppercase',
  }
});

export default useStyles;
