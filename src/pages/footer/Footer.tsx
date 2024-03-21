import useStyles from './styles';
import {Button} from "react-bootstrap";
const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <h2 className={classes.title}>More to explore</h2>
            <div className={`row ${classes.titleNav}`}>
                <Button className={`col ${classes.titleButton}`}>WOMEN'S COATS & JACKETS</Button>
                <Button className={`col ${classes.titleButton}`}>WOMEN'S KNITWEAR</Button>
                <Button className={`col ${classes.titleButton}`}>WOMEN'S DRESSES</Button>
                <Button className={`col ${classes.titleButton}`}>MEN'S COATS & JACKETS</Button>
                <Button className={`col ${classes.titleButton}`}>MEN'S TROUSERS</Button>
            </div>
            <div className={`${classes.titleBottom}`}>
                <div className={`row ${classes.bottomLinkContainer}`} style={{marginLeft: 65}}>
                    <a className={classes.bottomLink}>Contact Us</a>
                    <a className={classes.bottomLink}>Delivery Information</a>
                    <a className={classes.bottomLink}>Returns & Refunds</a>
                    <a className={classes.bottomLink}>Customer Service</a>
                    <a className={classes.bottomLink}>Payment</a>
                    <a className={classes.bottomLink}>Size Guide</a>
                    <a className={classes.bottomLink}>FAQs</a>
                </div>
                <div className={`row ${classes.bottomLinkContainer}`} style={{marginLeft: 170}}>
                    <a className={classes.bottomLink}>Contact Us</a>
                    <a className={classes.bottomLink}>Delivery Information</a>
                    <a className={classes.bottomLink}>Returns & Refunds</a>
                    <a className={classes.bottomLink}>Customer Service</a>
                    <a className={classes.bottomLink}>Payment</a>
                    <a className={classes.bottomLink}>Size Guide</a>
                    <a className={classes.bottomLink}>FAQs</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
