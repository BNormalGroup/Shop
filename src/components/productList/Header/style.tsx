import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  containerHead: {
    backgroundColor: "#D4D2B4",
  },
  container: {
    maxHeight: 260,
    backgroundColor: "#D4D2B4",
    textAlign: "center", // Центруємо текст по горизонталі
    color: "#282826", // Змініть колір тексту за потребою
    fontSize: 16, // Змініть розмір шрифту за потребою
    width: "100%",
    position: "relative",
  },
  title: {
    fontFamily: "Oswald, sans-serif",
    fontSize: "30px",
    fontWeight: 400,
    lineHeight: "44.46px",
    color: "#000000",
    maxWidth: "770px",
    margin: "20px 0px",
  },
  description: {
    fontFamily: "SourceSerifPro",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17.54px",
    color: "#000000",
    maxWidth: "770px",
    margin: 0,
  },
  containerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  breadcrumb: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px 53px",
  },
  titleNav: {
    margin: "0px 53px",
    padding: "20px 0px",
    display: "flex",
    justifyContent: "center",
  },
  titleButton: {
    maxHeight: 35,
    padding: 10,
    backgroundColor: "#00000000",
    border: "1.65px solid #282826",
    color: "#282826",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    maxWidth: 200,
    "&:last-child": {
      marginRight: 0,
    },
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#282826",
      color: "white",
      border: "1.5px solid #282826",
    },
    textDecoration: "none",
    fontFamily: "SourceSerifPro",
    fontSize: "14px",
    fontWeight: 600,
    marginRight: "56px",
  },
});
export default useStyles;
