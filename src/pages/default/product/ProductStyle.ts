import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  Container: {
    marginBottom: 56,
    padding: 0,
    minHeight: 1000,
  },
  BreadcrumbWrapper: {
    float: "left",
    marginTop: "10px",
  },
  TopWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  leftStack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '28px'
  }
});
