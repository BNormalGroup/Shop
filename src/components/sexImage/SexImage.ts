import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  imageDiv: {
    maxWidth: "1440px",
    width: "100%",
    height: "651px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundSize: "auto 100%" /* Розтягуємо зображення по висоті */,
    backgroundPosition: "center",
  },
  buttonWhite: {
    height: "50px",
    backgroundColor: "#F5F5F5",
    width: "215px",
    fontFamily: "OswaldFont",
    fontSize: "35px",
    fontWeight: "400",
    lineHeight: "51.87px",
    color: "#282826",
    border: "0",
    marginBottom: "38px",
    marginTop: "auto",
    "&:hover": {
      color: "#F5F5F5",
      backgroundColor: "#282826",
    },
  },
  buttonBlack: {
    height: "50px",
    backgroundColor: "#282826",
    width: "215px",
    fontFamily: "OswaldFont",
    fontSize: "35px",
    fontWeight: "400",
    border: "0",
    lineHeight: "51.87px",
    color: "#F5F5F5",
    marginBottom: "38px",
    marginTop: "auto",
    "&:hover": {
      color: "#282826",
      backgroundColor: "#F5F5F5",
    },
  },
});
