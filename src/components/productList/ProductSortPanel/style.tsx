import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    position: "flex",
    flexDirection: "column",
    padding: "0px 65px",
  },
  select: {
    marginBottom: "1em",
    padding: "0.25em",
    border: "0",
    borderRadius: "0",
    backgroundColor: "transparent",
    fontFamily: "Source Serif Pro",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "20.05px",
    textAlign: "right",

    // Вкладені стилі для псевдокласів
    "&:focus, &:active": {
      outline: "0", // Видаляє стандартний outline
    },
  },
  option: {
    border: "0",
    borderRadius: "0",
    backgroundColor: "transparent",
  },
});
export default useStyles;
