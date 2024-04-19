import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        width: "100%",
        position: "flex",
        flexDirection:'column'
    },
    imageContainer: {
        position: "relative",
    },
    image: {
        width: "100%",
    },
    title: {
        margin: 0,
        marginTop: '10px',
        fontFamily: 'SourceSerifPro',
        fontSize: '16px',
        fontWeight: 500,
        color: '#000000'
    },
    price: {
        margin: 0,
        marginTop: '3px',
        fontFamily: 'SourceSerifPro',
        fontSize: '16px',
        fontWeight: 500,
        color: '#000000'
    },
    color: {
        margin: 0,
        marginTop: '3px',
        fontFamily: 'SourceSerifProLight',
        fontSize: '16px',
        fontWeight: '300',
        color: '#000000'
    },
    likeBtn: {
        all: 'initial',
        position: "absolute",
        bottom: '5px',
        right: '5px',
    }

});
export default useStyles;
