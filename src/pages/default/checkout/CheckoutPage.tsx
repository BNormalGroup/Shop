import { useStyles } from "./CheckoutPageStyle.ts";
import { HeaderLogo } from "../../../assets/HeaderLogo.tsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductBag } from "../../../components/productBag/ProductBag.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";

const CheckoutPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const products = useSelector((state: RootState) => state.bag.products);
  const totalCost = products.reduce((total, product) => {
    return total + product.product.price * product.quantity;
  }, 0);

  return (
    <>
      <div className={classes.headerWrapper}>
        <HeaderLogo />
        <Link to={"/"} className={classes.headerText}>
          Back to shop
        </Link>
        <div className={classes.lineHeader} />
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.leftWrapper}></div>
        <div className={classes.rightWrapper}>
          <p className={classes.summaryText}>{t("OrderSummary")}</p>
          {products.map((item, key) => {
            return (
              <div key={key}>
                <ProductBag product={item} canEdit={false} />
              </div>
            );
          })}
          <hr className={classes.line} />
          <div
            className={`${classes.stackSummaryData} ${classes.subtotalMargin} `}
          >
            <p className={classes.dataSummaryText}>{t("Subtotal")}</p>
            <p className={classes.dataSummaryText}>${totalCost} USD</p>
          </div>
          <div className={classes.stackSummaryData}>
            <p className={classes.dataSummaryText}>{t("Delivery")}</p>
            <p className={classes.dataSummaryText}>{t("FreeShipping")}</p>
          </div>
          <hr className={classes.line} />
          <div className={classes.stackSummaryData}>
            <p className={classes.totalText}>{t("Total")}</p>
            <p className={classes.totalText}>${totalCost} USD</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
