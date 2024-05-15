import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  headerWrapper: {
    height: "60px",
    position: "fixed",
    zIndex: "1000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: '14px 65px'
  },
  lineHeader: {
    color: "black",
    height: "1px",
    opacity: "1",
    width: "100%",
  },
  headerText: {
    fontFamily: "Source Serif",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "22.55px",
    color: "black",
  }
});
