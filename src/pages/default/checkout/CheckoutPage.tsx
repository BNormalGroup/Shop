import { useStyles } from "./CheckoutPageStyle.ts";
import { HeaderLogo } from "../../../assets/HeaderLogo.tsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductBag } from "../../../components/productBag/ProductBag.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { IOrderCreate } from "../../../utils/types.ts";
import { Form, Formik } from "formik";
import { defaultData } from "./default-data.ts";
import { validationSchema } from "./validation-schema.ts";
import { CheckoutForm } from "./CheckoutForm.tsx";

const CheckoutPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const products = useSelector((state: RootState) => state.bag.products);
  const totalCost = products.reduce((total, product) => {
    return total + product.product.price * product.quantity;
  }, 0);
  const user = useSelector((state: RootState) => state.users);
  const handleSubmit = async (data: IOrderCreate) => {};

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
        <div className={classes.leftWrapper}>
          <Formik
            initialValues={
              user.isAuth
                ? {
                    ...defaultData,
                    address: {
                      ...defaultData.address,
                      email: user.user.email,
                    },
                  }
                : defaultData
            }
            onSubmit={handleSubmit}
            validationSchema={() => validationSchema(t)}
          >
            <Form>
              <CheckoutForm />
              <div style={{display: 'flex'}}>
                <button className={classes.buttonConfirm} type="submit">
                  {t("Confirm")}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
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
