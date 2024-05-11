import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    height: "636px",
    backgroundColor: "#D4D2B4",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Source Serif",
    color: "#686747",
    fontWeight: "600",
    fontSize: "35px",
    lineHeight: "43.86px",
    textDecoration: "underline",
  },
  carouselWrapper: {
    marginBottom: "56px",
  },
  categoryItemWrapper: {
    marginTop: "20px",
  },
  gridContainer: {
    display: "grid",
    gap: "10px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});
