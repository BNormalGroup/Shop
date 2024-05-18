import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  textValidation: {
    color: "#C10000",
    fontSize: "11px",
    lineHeight: "13.78px",
    fontFamily: "Source Serif",
  },
  validationInput: {
    display: "flex",
    flexDirection: "column",
  },
  containerData: {
    marginBottom: "58px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deliveryAddressText: {
    fontFamily: '"Source Serif 4", serif',
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "28.79px",
    color: "black",
    marginBottom: "56px",
    marginTop: "40px",
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
  inputFull: {
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
});
