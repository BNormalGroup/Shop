import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    menu: {
        margin: 0,
        minWidth: '200px',
        padding: 0,
    },
    menuItem: {
        paddingTop: '21px',
        alignItems: 'start',
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
    },
    item: {
        marginBottom: '21px',
        textDecoration: 'none',
        fontFamily: 'Oswald',
        fontSize: '18px',
        fontWeight: 400,
        lineHeight: '26.68px',
        textAlign: 'left',
        color: '#282826'
    }
});

export default useStyles;
