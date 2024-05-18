import * as Yup from "yup";
import { TFunction } from "i18next";

export const validationSchema = (t: TFunction) => {
  return Yup.object().shape({
    bankCard: Yup.object().shape({
      name: Yup.string().required(t("CardName") + " " + t("is required")),
      number: Yup.string()
        .matches(/^\d{16}$/, t("CardNumber must be 16 digits"))
        .required(t("CardNumber") + " " + t("is required")),
      expirationMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, t("Invalid expiration month"))
        .required(t("ExpirationMonth") + " " + t("is required")),
      expirationYear: Yup.string()
        .matches(/^\d{4}$/, t("Invalid expiration year"))
        .required(t("ExpirationYear") + " " + t("is required")),
      cvv: Yup.string()
        .matches(/^\d{3}$/, t("Invalid CVV"))
        .required(t("CVV") + " " + t("is required")),
      postalCode: Yup.string()
        .matches(/^\d{5}$/, t("Invalid postal code"))
        .required(t("PostalCode") + " " + t("is required")),
    }),
    address: Yup.object().shape({
      email: Yup.string()
        .email(t("EmailInvalid"))
        .required(t("ValidationRegisterEmail")),
      firstName: Yup.string().required(t("FirstName") + " " + t("is required")),
      lastName: Yup.string().required(t("LastName") + " " + t("is required")),
      phoneNumber: Yup.string()
        .required(t("PhoneNumber") + " " + t("is required"))
        .matches(/^\+?[1-9]\d{1,14}$/, t("Invalid phone number")),
      country: Yup.string().required(t("Country") + " " + t("is required")),
      postcode: Yup.string()
        .required(t("Postcode") + " " + t("is required"))
        .matches(/^\d{5}$/, t("Invalid postcode")),
      city: Yup.string().required(t("City") + " " + t("is required")),
      streetAddress: Yup.string().required(
        t("StreetAddress") + " " + t("is required"),
      ),
    }),
  });
};
