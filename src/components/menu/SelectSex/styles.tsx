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
  textSelectSex: {
    fontFamily: "OswaldFont, sans-serif",
    fontSize: 25,
    fontWeight: 400,
    color: "white",
    textDecoration: "none",
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
    color: "#F5F5F5",
    border: "none",
    cursor: "pointer",
    display: "flex", // Встановлюємо flex контейнер
    alignItems: "center", // Вертикальне центрування
    justifyContent: "center", // Горизонтальне центрування
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#F5F5F5",
      color: "#282826",
    },
  },
});

export default useStyles;
