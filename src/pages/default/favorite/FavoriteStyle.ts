import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  Container: {
    marginBottom: 56,
    padding: 0,
    minHeight: 1000,
  },
  Wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  BreadcrumbWrapper: {
    float: "left",
    maxWidth: "200px",
    marginTop: "10px",
  },
  Center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  PageTitle: {
    marginTop: "31px",
    fontSize: "35px",
    fontWeight: "400",
    lineHeight: "43.86px",
    fontFamily: "Source Serif Pro",
  },
  CountItems: {
    color: "#686747",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20.05px",
    fontFamily: "Source Serif Pro",
  },
  ItemsWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "20px",
  },
});
