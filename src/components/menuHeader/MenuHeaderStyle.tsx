import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    headerWrapper: {
        minHeight: "60px",
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#282826",
        padding: "0px 43px",
        justifyContent: "start",
        display: "flex",
        alignItems: "center",
    },
    linkButton: {
        color: "#F5F5F5",
        height: "100%",
        minHeight: 60,
        fontFamily: "OswaldFont, sans-serif",
        fontSize: 18,
        textDecoration: "none",
        transition: "background-color 0.3s, color 0.3s",
        "&:hover": {
            backgroundColor: "#D4D2B4",
            color: "#282826",
            "& ~ #panelMenuHeader": {
                visibility: "visible",
                color: "red",
            },
        },
        padding: "0px 10px",
        justifyContent: "start",
        display: "flex",
        alignItems: "center",
    },
    '@media (max-width: 990px)': {
        headerWrapper: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            padding: "10px 0px",
        },
        linkButton: {
            paddingTop: 5,
            minHeight: 0,
            paddingBottom: 5,
            alignItems: 'center', // Розмістити текст по центру
            justifyContent: 'center',
        },
    },
    panelMenuHeader: {
        minHeight: 200,
        width: "100%",
        padding: '35px 0px',
        backgroundColor: "#D4D2B4",
        visibility: "hidden",
        display: 'flex',
        flexDirection: 'row'
    },
    overlay: {
        position: "absolute",
        zIndex: 999,
    },
    show: {
        backgroundColor: "#D4D2B4",
        color: "#282826",
    },
    imageContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        marginRight: 190,
    },
    linkContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 190,
        marginRight: 25
    },
    linkContainerHeader: {
        fontFamily: 'OswaldFont',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '23.71px',
        textAlign: 'left',
    },
    listLink: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        columnGap: 50
    },
    link: {
        fontFamily: 'SourceSerifPro',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '17.54px',
        textAlign: 'left',
        textDecoration: 'none',
        display: 'inline-block',
        color: '#282826',
        marginTop: '5px',
    },
});

export default useStyles;
