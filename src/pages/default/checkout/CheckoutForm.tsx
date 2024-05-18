import { useStyles } from "./CheckoutPageStyle.ts";
import { useTranslation } from "react-i18next";
import { ErrorMessage, useFormikContext } from "formik";
import { IOrderCreate } from "../../../utils/types.ts";
import React from "react";
import { PaymentMethod } from "../../../components/Checkout/PaymentMethod/PaymentMethod.tsx";
import { DeliveryAddress } from "../../../components/Checkout/DeliveryAddress/DeliveryAddress.tsx";

export const CheckoutForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const formik = useFormikContext<IOrderCreate>();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.validationInput}>
          <p className={classes.emailText}>{t("EnterEmail")}</p>
          <ErrorMessage
            name="address.email"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputMain}
            placeholder={t("CreateEmail") + "*"}
            onChange={formik.handleChange}
            value={formik.values.address.email}
            name={"address.email"}
            style={{ marginBottom: "100px" }}
          />
        </div>
        <hr className={classes.line} />
        <DeliveryAddress />
        <hr
          className={classes.line}
          style={{ marginBottom: "87px", marginTop: "87px" }}
        />
        <PaymentMethod />
        <div className={classes.validationInput}>
          <div className={classes.termsWrapper}>
            <input
              required={true}
              className={classes.checkboxTerms}
              name="termsConditions"
              type="checkbox"
            />
            <p className={classes.textTerms}>{t("TermsConditions")}</p>
          </div>
        </div>
        <div className={classes.termsWrapper}>
          <input className={classes.checkboxTerms} type="checkbox" />
          <p className={classes.textTerms}>{t("PrivacyPolicy")}</p>
        </div>
      </div>
    </>
  );
};
