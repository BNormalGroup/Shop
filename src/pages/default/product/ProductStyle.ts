import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  Container: {
    marginBottom: 56,
    padding: 0,
  },
  BreadcrumbWrapper: {
    float: "left",
    marginTop: "10px",
  },
  TopWrapper: {
    display: "flex",
    gap: "20px",
  },
  flexDirection: "row",

  leftStack: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "28px",
  },
});
