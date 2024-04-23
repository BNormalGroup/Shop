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
  likeButton: {
    width: '40px',
    height: '40px',
    backgroundColor: 'white',
    position: "absolute",
    bottom: "5px",
    right: "4px",
    border: '0',
    borderRadius: '50%'
  },
  likeIcon: {
    width: '24px',
    height: '24px'
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
});
