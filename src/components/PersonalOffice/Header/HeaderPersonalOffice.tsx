import useStyles from "./style.tsx";


const MenuHeader = () => {
    const classes = useStyles();


    return (
        <div style={{ backgroundColor: "#282826" }}>
            <div
                id="panelMenuContainer"
                className={`container ${classes.headerWrapper}`}
            >
                Personal Office
            </div>
        </div>
    );
};

export default MenuHeader;
