import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  Wrapper: {
    width: "645px",
    height: "39px",
    display: "flex",
    position: "relative",
  },
  InputSearch: {
    width: "100%",
    height: "100%",
    paddingRight: "34px",
    border: "1px solid black",
  },
  IconWrapper: {
    position: "absolute",
    right: "8px",
    top: "6px",
    width: "24px",
    height: "24px",
  },
  SearchResults: {
    position: "absolute",
    marginTop: "50px", // Додайте потрібний відступ зверху
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
});
