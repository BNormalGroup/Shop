import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {
    backgroundColor: "#f2f2f2",
    border: "2px solid #dddddd",
    padding: "4px",
    margin: "4px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    textAlign: "center",
    fontFamily: "Oswald",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "26.68px",
    color: "black",
    marginBottom: "0px",
    paddingRight: "10px",
  },
});
export default useStyles;
