import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  headerWrapper: {
    height: "60px",
    width: "100%",
    zIndex: 1000,
    backgroundColor: "#282826",
    padding: "0px 53px",
    justifyContent: "start",
    display: "flex",
    alignItems: "center",
  },
  linkButton: {
    color: "#F5F5F5",
    height: "100%",
    fontFamily: "OswaldFont, sans-serif",
    fontSize: 18,
    textDecoration: "none",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#D4D2B4",
      color: "#282826",
      "& ~ #panelMenuHeader": {
        visibility: "visible",
        color: "red",
      },
    },
    padding: "0px 10px",
    justifyContent: "start",
    display: "flex",
    alignItems: "center",
  },
  panelMenuHeader: {
    height: 200,
    width: "100%",
    maxWidth: 1440,
    backgroundColor: "#D4D2B4",
    visibility: "hidden",
  },
  overlay: {
    position: "absolute",
    zIndex: 999,
  },
  show: {
    backgroundColor: "#D4D2B4",
    color: "#282826",
  },
});

export default useStyles;
