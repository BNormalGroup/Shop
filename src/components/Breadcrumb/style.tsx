import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    textDecoration: "none",
    margin: 0,
    padding: 0,
  },
  arrow: {
    paddingBottom: '2px'
  },
  link: {
    fontFamily: "SourceSerifPro",
    fontSize: "12px",
    fontWeight: 300,
    lineHeight: "15.04px",
    color: "#000000",
    textDecoration: "none",
  },
  point: {
    padding: "0px 5px",
    margin: 0,
  },
  disabled: {
    pointerEvents: "none",
  },
});
export default useStyles;
