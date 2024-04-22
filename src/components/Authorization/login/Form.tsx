import React from "react";
import { useStyles } from "../AuthorizationStyle.ts";
import { useTranslation } from "react-i18next";
import { ErrorMessage, useFormikContext } from "formik";
import { IUserLogin } from "../types/types.ts";

export const FormLogin = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const formik = useFormikContext<IUserLogin>();

  return (
    <>
      <p className={classes.contentText}>{t("LoginAccount")}</p>
      <div className={classes.inputsContainer}>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="email"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputRegister}
            placeholder={t("CreateEmail")}
            onChange={formik.handleChange}
            value={formik.values.email}
            name={"email"}
          />
        </div>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="password"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputRegister}
            placeholder={t("CreatePassword")}
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <p className={classes.forgotPasswordText}>{t("ForgotPassword")}</p>
      </div>
    </>
  );
};
