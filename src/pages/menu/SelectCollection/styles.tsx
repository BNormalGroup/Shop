import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        overflow: "hidden",
        display: "flex",
        justifyContent: "center"
    },
    imageWrapper: {
        position: "relative",
        float: "left",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column'

    },
    imageWrapperMan: {
        marginRight: 10
    },
    imageWrapperWoman: {
        marginLeft: 10
    },
    image: {
        width: "100%",
        height: "auto",
        display: "block",
    },
    nameCollection: {
        fontFamily: "SourceSerifProSemiBold, sans-serif",
        fontSize: 35,
        color: '#686747',
        marginTop: 48,
        marginBottom: 56,
        padding: 0
    },
    secondNameCollection: {
        fontFamily: "SourceSerifPro, sans-serif",
        fontSize: 21,
        color: '#686747',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 0,
        padding: 0
    },
});

export default useStyles;
