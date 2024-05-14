import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  itemsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: "20px",
    padding: "20px 65px",
    rowGap: "20px",
  },
  message: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
  },
});
export default useStyles;
