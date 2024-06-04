import useStyles from "./styles.tsx";
import xIcon from "../../assets/xIcon.png";
import fIcon from "../../assets/fIcon.png";
import iIcon from "../../assets/InstagramIcon.png";
import { useLoginModal } from "../../context/LoginModalContext.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";

const Footer = () => {
  const classes = useStyles();
  const { openLoginModal } = useLoginModal();
  const isAuth = useSelector((state: RootState) => state.users.isAuth);
  const SubscribeClick = () => {
    if (!isAuth) openLoginModal();
  };

  return (
    <footer className={classes.footer}>
      <div className={`${classes.titleBottom}`}>
        <div
          className={`row ${classes.bottomLinkContainer}`}
          style={{ marginLeft: 65 }}
        >
          <a href="tel:+6494461709" className={classes.bottomLink}>
            Contact Us
          </a>
          <a href="#" className={classes.bottomLink}>
            Delivery Information
          </a>
          <a href="#" className={classes.bottomLink}>
            Returns & Refunds
          </a>
          <a href="#" className={classes.bottomLink}>
            Customer Service
          </a>
          <a href="#" className={classes.bottomLink}>
            Payment
          </a>
          <a href="#" className={classes.bottomLink}>
            Size Guide
          </a>
          <a href="#" className={classes.bottomLink}>
            FAQs
          </a>
        </div>
        <div
          className={`row ${classes.bottomLinkContainer}`}
          style={{ marginLeft: 170 }}
        >
          <a href="#" className={classes.bottomLink}>
            About ModaMingle
          </a>
          <a href="#" className={classes.bottomLink}>
            Student Discount
          </a>
          <a href="#" className={classes.bottomLink}>
            Sustainability
          </a>
          <a href="#" className={classes.bottomLink}>
            Suppliers List
          </a>
          <a href="#" className={classes.bottomLink}>
            ModaMingle Resell
          </a>
          <a href="#" className={classes.bottomLink}>
            Product Care
          </a>
          <a href="#" className={classes.bottomLink}>
            Careers
          </a>
        </div>
        <div className={classes.iconContainer}>
          <a href="https://www.facebook.com/">
            <img alt="" className={classes.iconSocial} src={fIcon} />
          </a>
          <a style={{ marginLeft: 20, marginRight: 21 }} href="https://x.com/">
            <img alt="" className={classes.iconSocial} src={xIcon} />
          </a>
          <a href="https://www.instagram.com/">
            <img alt="" className={classes.iconSocial} src={iIcon} />
          </a>
        </div>
        <div className={classes.bottomEmailContainer}>
          <h3 className={classes.bottomEmailHeader}>
            Subscribe To Our Newsletters
          </h3>
          <h4 className={classes.bottomEmailDescription}>
            SUBSCRIBE TO GET 15% OFF YOUR FIRST ORDER
          </h4>
          <input
            className={classes.bottomEmailInput}
            type="text"
            placeholder="Enter email adress"
          />
          <button
            className={classes.bottomEmailButton}
            onClick={SubscribeClick}
          >
            Sign up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
