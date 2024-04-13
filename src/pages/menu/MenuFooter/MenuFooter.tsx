import useStyles from "./styles";
import { useTranslation } from "react-i18next";
import {Button} from "react-bootstrap";

const MenuFooter = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <footer className={classes.footer}>
            <h2 className={classes.title}>More to explore</h2>
            <div className={`row ${classes.titleNav}`}>
                <Button className={`col ${classes.titleButton}`}>
                    WOMEN'S COATS & JACKETS
                </Button>
                <Button className={`col ${classes.titleButton}`}>
                    WOMEN'S KNITWEAR
                </Button>
                <Button className={`col ${classes.titleButton}`}>
                    WOMEN'S DRESSES
                </Button>
                <Button className={`col ${classes.titleButton}`}>
                    MEN'S COATS & JACKETS
                </Button>
                <Button className={`col ${classes.titleButton}`}>MEN'S TROUSERS</Button>
            </div>
        </footer>
    );
};

export default MenuFooter;
