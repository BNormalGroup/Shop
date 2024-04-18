import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    footer: {
        height: 220,
        backgroundColor: "#D4D2B4",
        textAlign: "center", // Центруємо текст по горизонталі
        color: "#282826", // Змініть колір тексту за потребою
        fontSize: 16, // Змініть розмір шрифту за потребою
        bottom: 0,
        width: "100%",
        borderTop: "2px solid black",
    },
    title: {
        fontFamily: "OswaldFontLight, sans-serif",
        fontWeight: 300,
        fontSize: 35,
        textTransform: "uppercase",
        paddingTop: 22,
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
        display: "flex",
        justifyContent: "center",
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
    iconContainer: {
        marginTop: 57,
        marginLeft: 264,
    },
    iconSocial: {
        height: 25,
        width: 29,
    },
    bottomEmailContainer: {
        display: "flex",
        justifyContent: "left",
        flexDirection: "column",
        marginLeft: 170,
        marginTop: 57,
    },
    bottomEmailHeader: {
        color: "#000000",
        fontSize: 21,
        fontFamily: "SourceSerifProSemiBold, sans-serif",
        textAlign: "left",
        marginBottom: 31,
    },
    bottomEmailDescription: {
        color: "#686747",
        fontSize: 16,
        fontFamily: "SourceSerifProLight, sans-serif",
        textAlign: "left",
        marginBottom: 30,
    },
    bottomEmailInput: {
        fontSize: 14,
        fontFamily: "SourceSerifProLight, sans-serif",
        textAlign: "left",
        minHeight: 50,
        border: "2px solid #282826",
        paddingLeft: 17,
        marginBottom: 20,
        "&::placeholder": {
            color: "#D4D2B4",
            fontSize: 14,
            fontFamily: "SourceSerifProLight, sans-serif",
        },
    },
    bottomEmailButton: {
        backgroundColor: "#282826",
        minHeight: 50,
        color: "#F5F5F5",
        fontFamily: "OswaldFont, sans-serif",
        fontSize: 18,
        transition: "background-color 0.3s, color 0.3s",
        "&:hover": {
            backgroundColor: "#F5F5F5",
            color: "#282826",
        },
    },
});
export default useStyles;
