import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(40, 40, 38, 0.3)",
    zIndex: 9999,
  },
  content: {
    width: "459px",
    height: "100vh",
    margin: "auto",
    backgroundColor: "#F5F5F5",
    zIndex: 10000,
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
  },
  contentContainer: {
    padding: "10px 0px 31px 28px",
    display: "flex",
    flexDirection: "column",
  },
  contentText: {
    fontWeight: 400,
    fontSize: "21px",
    lineHeight: "31.12px",
    color: "#000000",
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "27px",
  },
  validationInput: {
    display: "flex",
    flexDirection: "column",
  },
  inputRegister: {
    border: "none",
    borderBottom: " 1px solid #282826",
    padding: "5px 0px",
    backgroundColor: "transparent",
    outline: "none",
    width: "400px",
    "&::placeholder": {
      color: "#5A5A5A",
      fontFamily: "Source Serif",
      fontSize: "14px",
      lineHeight: "17.54px",
      fontWeight: "400",
    },
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "31px",
  },
  buttonCreate: {
    backgroundColor: "#282826",
    width: "401px",
    height: "50px",
    fontSize: "18px",
    color: "#F5F5F5",
    lineHeight: "26.68px",
    fontWeight: "400",
    fontFamily: "Oswald, sans-serif",
    border: "0",
  },
  buttonBack: {
    backgroundColor: "#F5F5F5",
    width: "401px",
    height: "50px",
    fontSize: "18px",
    color: "#282826",
    lineHeight: "26.68px",
    fontWeight: "400",
    fontFamily: "Oswald, sans-serif",
    border: "1px solid #282826",
  },
  textValidation: {
    color: "#C10000",
    fontSize: "11px",
    lineHeight: "13.78px",
    fontFamily: "Source Serif",
  },
  forgotPasswordText: {
    cursor: "pointer",
    color: "black",
    fontSize: "14px",
    lineHeight: "17.54px",
    fontFamily: "Source Serif",
  },
});
