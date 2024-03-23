import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    height: 220,
    backgroundColor: "#D4D2B4",
    textAlign: "center", // Центруємо текст по горизонталі
    color: "#282826", // Змініть колір тексту за потребою
    fontSize: 16, // Змініть розмір шрифту за потребою
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  title: {
    fontFamily: "OswaldFont, sans-serif",
    fontWeight: 300,
    fontSize: 35,
    textTransform: "uppercase",
    marginTop: 22,
    marginBottom: 41,
    height: 52,
  },
  titleNav: {},
  titleButton: {
    height: 38,
    margin: "0px 36px",
    padding: "5px 0px",
    backgroundColor: "#00000000",
    border: "2px solid #282826",
    color: "#282826",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#282826",
      color: "white",
      border: "2px solid #282826",
    },
    fontSize: 21,
    fontWeight: 400,
    fontFamily: "OswaldFont, sans-serif",
    display: "flex", // Встановлюємо flex контейнер
    alignItems: "center", // Вертикальне центрування
    justifyContent: "center", // Горизонтальне центрування
  },
  titleBottom: {
    height: 365,
    backgroundColor: "white",
    marginTop: 58,
    display: "flex",
  },
  bottomLink: {
    height: 23,
    marginBottom: 10,
    color: "#000000",
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "SourceSerifPro, sans-serif",
    textDecoration: "none",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
  },
  bottomLinkContainer: {
    marginTop: 57,
    height: 170,
    width: 227,
    display: "flex",
  },
});
export default useStyles;
