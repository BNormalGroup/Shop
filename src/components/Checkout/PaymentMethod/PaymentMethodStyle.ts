import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  validationInput: {
    display: "flex",
    flexDirection: "column",
    width: '100%'
  },
  containerData: {
    marginBottom: '29px',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textValidation: {
    color: "#C10000",
    fontSize: "11px",
    lineHeight: "13.78px",
    fontFamily: "Source Serif",
  },
  inputMain: {
    border: "none",
    borderBottom: " 1px solid #282826",
    padding: "5px 0px",
    backgroundColor: "transparent",
    outline: "none",
    width: "368px",
    "&::placeholder": {
      color: "#585852",
      fontFamily: "Source Serif",
      fontSize: "14px",
      lineHeight: "17.54px",
      fontWeight: "400",
    },
  },
  dataWrapper: {
    marginTop: '56px'
  },
  inputFull: {
    height: '39px',
    border: "none",
    borderBottom: " 1px solid #282826",
    padding: "5px 0px",
    backgroundColor: "transparent",
    outline: "none",
    width: "100%",
    "&::placeholder": {
      color: "#585852",
      fontFamily: "Source Serif",
      fontSize: "14px",
      lineHeight: "17.54px",
      fontWeight: "400",
    },
  },
  inputLabel: {
    fontFamily: '"Source Serif 4", serif',
    fontWeight: "300",
    fontSize: "14px",
    lineHeight: "19.19px",
    color: "#585852",
  },
  radioButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '18px',
    alignItems: 'center',
    marginTop: '20px'
  },
  cardsStack: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px'
  },
  radioButton: {
    border: '1px solid #282826',
    width: '12px',
    height: '12px',
    accentColor: '#282826'
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  whiteCardWrapper: {
    width: "50px",
    height: "30px",
    border: "0.5px solid #282826",
    backgroundColor: "#FFFFFF",
    padding: "0px 2px",
  },
  PaymentMethodText: {
    fontFamily: '"Source Serif 4", serif',
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "28.79px",
    color: "black",
    margin: 0
  },
  pinkCardWrapper: {
    width: "50px",
    height: "30px",
    border: "0.5px solid #282826",
    backgroundColor: "#FFB3C7",
    padding: "0px 2px",
  },
});
