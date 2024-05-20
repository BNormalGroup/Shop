import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  modalButtonContainer: {
    fontFamily: 'Oswald',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '47.42px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    padding: '20px',

  },
  modalButton:{
    textTransform: 'uppercase'
  },
  bodyContainer: {
    fontFamily: 'Oswald',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '47.42px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '0px'
  },

});

export default useStyles;
