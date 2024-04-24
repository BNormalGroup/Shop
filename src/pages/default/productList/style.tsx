import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  itemsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: "20px",
    padding: "20px 65px",
    rowGap: "20px",
  },
});
export default useStyles;
