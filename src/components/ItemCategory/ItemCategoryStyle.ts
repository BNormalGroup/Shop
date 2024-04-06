import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      cursor: "pointer",
    },
  },
  image: {
    width: "423px",
    height: "633px",
  },
  text: {
    fontFamily: "SourceSerifPro, sans-serif",
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "26.31px",
    textAlign: "center",
    textDecoration: "none",
    color: "#686747",
    width: "423px",
  },
});
