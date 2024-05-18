import { ErrorMessage, useFormikContext } from "formik";
import { IOrderCreate } from "../../../utils/types.ts";
import VisaCard from "../../../assets/cardsImage/visa.png";
import MasterCard from "../../../assets/cardsImage/masterCard.png";
import Klarna from "../../../assets/cardsImage/klarna.png";
import PayPal from "../../../assets/cardsImage/payPal.png";
import React from "react";
import { useStyles } from "./PaymentMethodStyle.ts";
import { useTranslation } from "react-i18next";

export const PaymentMethod = () => {
  const formik = useFormikContext<IOrderCreate>();
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <p className={classes.PaymentMethodText}>{t("PaymentMethod")}</p>
      <div className={classes.radioButtonContainer}>
        <input
          type="radio"
          className={classes.radioButton}
          name="paymentMethod"
          value="visaMasterKlarna"
          onChange={formik.handleChange}
          checked={formik.values.paymentMethod === "visaMasterKlarna"}
        />
        <div className={classes.cardsStack}>
          <div className={classes.whiteCardWrapper}>
            <img src={VisaCard} className={classes.cardImage} />
          </div>
          <div className={classes.whiteCardWrapper}>
            <img src={MasterCard} className={classes.cardImage} />
          </div>
          <div className={classes.pinkCardWrapper}>
            <img src={Klarna} className={classes.cardImage} />
          </div>
        </div>
      </div>

      <div className={classes.radioButtonContainer}>
        <input
          type="radio"
          className={classes.radioButton}
          name="paymentMethod"
          value="paypal"
          onChange={formik.handleChange}
          checked={formik.values.paymentMethod === "paypal"}
        />
        <div className={classes.whiteCardWrapper}>
          <img src={PayPal} className={classes.cardImage} />
        </div>
      </div>
      <div className={classes.radioButtonContainer}>
        <input
          type="radio"
          className={classes.radioButton}
          name="paymentMethod"
          value="paymentOnDelivery"
          onChange={formik.handleChange}
          checked={formik.values.paymentMethod === "paymentOnDelivery"}
        />
        <p className={classes.PaymentMethodText}>{t("PaymentOnDelivery")}</p>
      </div>
      <div className={classes.dataWrapper}></div>
      {formik.values.paymentMethod === "visaMasterKlarna" && (
        <>
          <div className={classes.containerData}>
            <div className={classes.validationInput}>
              <ErrorMessage
                name="bankCard.name"
                component="label"
                className={classes.textValidation}
              />
              <label className={classes.inputLabel}>{t("CardName") + "*"}</label>
              <input
                className={classes.inputFull}
                onChange={formik.handleChange}
                value={formik.values.bankCard.name}
                name={"bankCard.name"}
              />
            </div>
          </div>
          <div className={classes.containerData}>
            <div className={classes.validationInput}>
              <ErrorMessage
                name="bankCard.number"
                component="label"
                className={classes.textValidation}
              />
              <label className={classes.inputLabel}>{t("CardNumber") + "*"}</label>
              <input
                className={classes.inputFull}
                onChange={formik.handleChange}
                value={formik.values.bankCard.number}
                name={"bankCard.number"}
              />
            </div>
          </div>
          <div className={classes.containerData}>
            <div className={classes.validationInput}>
              <ErrorMessage
                name="bankCard.expirationMonth"
                component="label"
                className={classes.textValidation}
              />
              <label className={classes.inputLabel}>{t("ExpirationMonth") + "*"}</label>
              <input
                className={classes.inputMain}
                onChange={formik.handleChange}
                placeholder="MM"
                value={formik.values.bankCard.expirationMonth}
                name={"bankCard.expirationMonth"}
              />
            </div>
            <div className={classes.validationInput}>
              <ErrorMessage
                name="bankCard.expirationYear"
                component="label"
                className={classes.textValidation}
              />
              <label className={classes.inputLabel}>{t("ExpirationYear") + "*"}</label>
              <input
                className={classes.inputMain}
                onChange={formik.handleChange}
                placeholder="YYYY"
                value={formik.values.bankCard.expirationYear}
                name={"bankCard.expirationYear"}
              />
            </div>
          </div>
          <div className={classes.containerData}>
            <div className={classes.validationInput}>
              <ErrorMessage
                name="bankCard.cvv"
                component="label"
                className={classes.textValidation}
              />
              <label className={classes.inputLabel}>CVV*</label>
              <input
                className={classes.inputMain}
                onChange={formik.handleChange}
                value={formik.values.bankCard.cvv}
                name={"bankCard.cvv"}
              />
            </div>
            <div className={classes.validationInput}>
              <ErrorMessage
                name="bankCard.postalCode"
                component="label"
                className={classes.textValidation}
              />
              <label className={classes.inputLabel}>{t("PostalCode") + "*"}</label>
              <input
                className={classes.inputMain}
                onChange={formik.handleChange}
                value={formik.values.bankCard.postalCode}
                name={"bankCard.postalCode"}
              />
            </div>
          </div>
          <div className={classes.dataWrapper}></div>
        </>
      )}
    </>
  );
};
