import { useStyles } from "./DeliveryAddressStyle.ts";
import React from "react";
import { useTranslation } from "react-i18next";
import { ErrorMessage, useFormikContext } from "formik";
import { IOrderCreate } from "../../../utils/types.ts";

export const DeliveryAddress = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const formik = useFormikContext<IOrderCreate>();

  return (
    <>
      <p className={classes.deliveryAddressText}>{t("DeliveryAddress")}</p>
      <div className={classes.containerData}>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="address.firstName"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputMain}
            placeholder={t("FirstName") + "*"}
            onChange={formik.handleChange}
            value={formik.values.address.firstName}
            name={"address.firstName"}
          />
        </div>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="address.lastName"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputMain}
            placeholder={t("LastName") + "*"}
            onChange={formik.handleChange}
            value={formik.values.address.lastName}
            name={"address.lastName"}
          />
        </div>
      </div>
      <div className={classes.containerData}>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="address.phoneNumber"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputMain}
            placeholder={t("PhoneNumber") + "*"}
            onChange={formik.handleChange}
            value={formik.values.address.phoneNumber}
            name={"address.phoneNumber"}
          />
        </div>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="address.country"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputMain}
            placeholder={t("Country") + "*"}
            onChange={formik.handleChange}
            value={formik.values.address.country}
            name={"address.country"}
          />
        </div>
      </div>
      <div className={classes.containerData}>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="address.postcode"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputMain}
            placeholder={t("Postcode") + "*"}
            onChange={formik.handleChange}
            value={formik.values.address.postcode}
            name={"address.postcode"}
          />
        </div>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="address.city"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputMain}
            placeholder={t("City") + "*"}
            onChange={formik.handleChange}
            value={formik.values.address.city}
            name={"address.city"}
          />
        </div>
      </div>
      <div className={classes.validationInput}>
        <ErrorMessage
          name="address.streetAddress"
          component="label"
          className={classes.textValidation}
        />
        <input
          className={classes.inputFull}
          placeholder={t("StreetAddress") + "*"}
          onChange={formik.handleChange}
          value={formik.values.address.streetAddress}
          name={"address.streetAddress"}
        />
      </div>
    </>
  );
};
