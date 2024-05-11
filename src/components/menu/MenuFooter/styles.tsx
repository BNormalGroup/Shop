import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    height: 220,
    backgroundColor: "#D4D2B4",
    textAlign: "center", // Центруємо текст по горизонталі
    color: "#282826", // Змініть колір тексту за потребою
    fontSize: 16, // Змініть розмір шрифту за потребою
    //bottom: 0,
    width: "100%",
    //position: "absolute", /* Встановлюємо абсолютну позицію */
    //left: 0,
  },
  title: {
    fontFamily: "OswaldFontLight, sans-serif",
    fontWeight: 300,
    fontSize: 35,
    textTransform: "uppercase",
    paddingTop: 22,
    marginBottom: 55,
  },
  titleNav: {},
  titleButton: {
    height: 40,
    margin: "0px 36px",
    backgroundColor: "#00000000",
    border: "2px solid #282826",
    color: "#282826",
    lineHeight: '31.12px',
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#282826",
      color: "white",
      border: "2px solid #282826",
    },
    fontSize: 15,
    fontWeight: 400,
    fontFamily: "OswaldFont, sans-serif",
    display: "flex", // Встановлюємо flex контейнер
    alignItems: "center", // Вертикальне центрування
    justifyContent: "center", // Горизонтальне центрування
  },
});
export default useStyles;
