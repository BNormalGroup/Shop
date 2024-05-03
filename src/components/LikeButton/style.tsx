import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  likeBtn: {
    width: "40px",
    height: "40px",
    backgroundColor: "white",
    position: "absolute",
    bottom: "5px",
    right: "4px",
    border: "0",
    borderRadius: "50%",
  },
  likeIcon: {
    width: "24px",
    height: "24px",
  },
});
export default useStyles;
