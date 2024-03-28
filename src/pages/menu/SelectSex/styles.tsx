import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    margin: "0 auto",
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
    float: "left",
    width: "50%",
    maxHeight: 700,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    transform: "translateY(-25px)", // Піднімаємо зображення на 20 пікселів
  },
  button: {
    position: "absolute",
    bottom: 102,
    width: 215,
    height: 50,
    backgroundColor: "#282826",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontFamily: "OswaldFont, sans-serif",
    fontSize: 35,
    fontWeight: 400,
    display: "flex", // Встановлюємо flex контейнер
    alignItems: "center", // Вертикальне центрування
    justifyContent: "center", // Горизонтальне центрування
  },
});

export default useStyles;
