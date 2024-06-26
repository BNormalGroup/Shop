import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  stackVertical: {
    display: "flex",
    gap: "9px",
    flexDirection: "column",
  },
  images: {
    width: "91px",
    height: "119px",
    objectFit: "contain",
    cursor: "pointer",
  },
  imageMain: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
  },
  imageMainWrapper: {
    width: "534px",
    height: "761px",
    position: "relative",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
});
