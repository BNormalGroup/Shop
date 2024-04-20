import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 25,
  },
  image: {
    width: "269px",
    height: "403px",
  },
  text: {
    fontFamily: "SourceSerifPro, sans-serif",
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "26.31px",
    textAlign: "center",
    textDecoration: "none",
    color: "#686747",
    width: "269px",
  },
});

export default useStyles;
