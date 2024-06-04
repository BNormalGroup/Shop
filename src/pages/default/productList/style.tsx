import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  itemsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: "20px",
    padding: "20px 65px",
    rowGap: "20px",
  },
  btnLoadMore: {
    width: "30%",
    backgroundColor: "#282826",
    fontFamily: "Source Serif Pro",
    fontSize: "18px",
    fontWeight: "600",
    borderColor: "#282826",
    transition: "0.3s ease",
    "&:hover": {
      borderColor: "#282826",
      color: "#282826",
    },
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px",
  },
});
export default useStyles;
