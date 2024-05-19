import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  th: {
    backgroundColor: "#f2f2f2",
    border: "1px solid #dddddd",
    padding: "8px",
    textAlign: "left",
    fontFamily: "Oswald",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "26.68px",
    color: "#282826",
  },
  td: {
    border: "1px solid #dddddd",
    padding: "8px",
    textAlign: "left",
    fontFamily: "Oswald",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "26.68px",
    color: "#282826",
  },
  backgroundSecond: {
    backgroundColor: '#282826',
    color: '#f2f2f2'
  }
});

export default useStyles;
