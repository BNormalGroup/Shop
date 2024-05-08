import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "91px",
    height: "141px",
    objectFit: "contain",
  },
  name: {
    fontFamily: "Source Serif 4, serif",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19.19px",
    color: "black",
  },
  properties: {
    fontFamily: "Source Serif 4, serif",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "16.45px",
    color: "black",
  },
  price: {
    fontFamily: "Source Serif 4, serif",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16.45px",
    color: "black",
  },
  mainBox: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  photoBox: {
    display: 'flex',
  },
  line: {
    color: "black",
    height: "1px",
  },
});
export default useStyles;
