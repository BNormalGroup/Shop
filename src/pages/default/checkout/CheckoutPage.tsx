import { useStyles } from "./CheckoutPageStyle.ts";
import { HeaderLogo } from "../../../assets/HeaderLogo.tsx";

const CheckoutPage = () => {
  const classes = useStyles();

  return (
    <>
     <div className={classes.headerWrapper}>
       <HeaderLogo/>
       <p className={classes.headerText}>Back to shop</p>
     </div>
    <hr className={classes.lineHeader}/>
    </>
  );
};

export default CheckoutPage;
