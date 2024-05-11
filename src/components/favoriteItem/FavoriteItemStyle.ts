import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "313px",
    height: "463px",
    objectFit: "cover",
  },
  textName: {
    marginTop: "10px",
    fontSize: "14px",
    fontWeight: "400",
    textDecoration: "none",
    color: "black",
    lineHeight: "17.54px",
    fontFamily: "Source Serif",
  },
  textPrice: {
    marginTop: "3px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "17.54px",
    fontFamily: "Source Serif",
  },
  textColor: {
    marginTop: "3px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "17.54px",
    fontFamily: "Source Serif",
  },
  addButton: {
    height: "50px",
    backgroundColor: "#282826",
    width: "313px",
    color: "#F5F5F5",
    fontFamily: "Oswald",
    fontSize: "18px",
    lineHeight: "26.68px",
    fontWeight: "600",
    marginTop: "17px",
  },
});
