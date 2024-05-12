import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    height: "100vh",
  },
  box: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  text: {
    fontFamily: "Oswald",
    fontWeight: "300",
    fontSize: "128px",
    color: "black",
    lineHeight: "189.7px",
  },
  button: {
    width: 215,
    height: 50,
    backgroundColor: "#282826",
    color: "#F5F5F5",
    border: "none",
    cursor: "pointer",
  },
  textButton: {
    color: "#F5F5F5",
    fontFamily: "Oswald",
    fontWeight: "300",
    textDecoration: "none",
  },
});
