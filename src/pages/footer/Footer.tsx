
import useStyles from './styles';
import {Button} from "react-bootstrap";
import xIcon from "../../assets/xIcon.png";
import fIcon from "../../assets/fIcon.png";
import iIcon from "../../assets/InstagramIcon.png";

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
                    <a href="#" className={classes.bottomLink}>Contact Us</a>
                    <a href="#" className={classes.bottomLink}>Delivery Information</a>
                    <a href="#" className={classes.bottomLink}>Returns & Refunds</a>
                    <a href="#" className={classes.bottomLink}>Customer Service</a>
                    <a href="#" className={classes.bottomLink}>Payment</a>
                    <a href="#" className={classes.bottomLink}>Size Guide</a>
                    <a href="#" className={classes.bottomLink}>FAQs</a>
                </div>
                <div className={`row ${classes.bottomLinkContainer}`} style={{marginLeft: 170}}>
                    <a href="#" className={classes.bottomLink}>Contact Us</a>
                    <a href="#" className={classes.bottomLink}>Delivery Information</a>
                    <a href="#" className={classes.bottomLink}>Returns & Refunds</a>
                    <a href="#" className={classes.bottomLink}>Customer Service</a>
                    <a href="#" className={classes.bottomLink}>Payment</a>
                    <a href="#" className={classes.bottomLink}>Size Guide</a>
                    <a href="#" className={classes.bottomLink}>FAQs</a>
                </div>
                <div className={classes.iconContainer}>
                    <a  href="#"><img alt='' className={classes.iconSocial} src={fIcon}/></a>
                    <a style={{marginLeft: 20, marginRight: 21}}  href="#"><img alt='' className={classes.iconSocial} src={xIcon}/></a>
                    <a  href="#"><img alt='' className={classes.iconSocial} src={iIcon}/></a>
                </div>
            </div>
        </footer>
    )

};

export default Footer;
