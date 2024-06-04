import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  image: {
    width: "312px",
    height: "468px",
    padding: '0px 10px'
  },
  arrowWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  carousel: {
    justifyContent: "center",
    alignItems: "center",
  },
});
