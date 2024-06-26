import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  genderText: {
    fontWeight: 600,
    fontSize: "21px",
    lineHeight: "31px",
    color: "#000000",
    fontFamily: "Oswald, sans-serif",
    textDecoration: "none",
  },
  headerWrapper: {
    height: "60px",
    width: "100%",
    position: "fixed",
    zIndex: 1000,
    backgroundColor: "white",
    padding: "10px 63px",
  },
  icon: {
    height: "23px",
  },
  buttonIcon: {
    backgroundColor: "transparent",
    border: 0,
  },
});
