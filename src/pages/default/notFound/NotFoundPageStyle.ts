import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    height: '100vh',
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: '100%',
    alignItems: "center",
  },
  textNumber: {
    fontFamily: 'Oswald',
    fontWeight: '300',
    fontSize: '128px',
    margin: '0',
    color: 'black',
    lineHeight: '189.7px'
  },
  textNotFound: {
    marginTop: '59px',
    fontFamily: 'Oswald',
    fontWeight: '300',
    fontSize: '64px ',
    lineHeight: '94.85px',
    color: 'black',
  },
  textError: {
    marginTop: '19px',
    fontFamily: 'Oswald',
    fontWeight: '300',
    fontSize: '20px  ',
    lineHeight: '29.64px',
    color: 'black',
  }
});
