import { useTranslation } from "react-i18next";
import React from "react";
import { useStyles } from "../AuthorizationStyle.ts";

export const Login = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.overlay} onClick={()=>{}} />
      <div className={classes.content}>
        <div className={classes.contentContainer}>
          <p className={classes.contentText}>{t("LoginAccount")}</p>
          <div className={classes.inputsContainer}>
            <input
              className={classes.inputRegister}
              placeholder={t("CreateName")}
            />
            <div className={classes.validationInput}>
              <label className={classes.textValidation}>
                Please enter valid email address
              </label>
              <input
                className={classes.inputRegister}
                placeholder={t("CreateEmail")}
              />
            </div>
            <input
              className={classes.inputRegister}
              placeholder={t("CreatePassword")}
              type="password"
            />
            <p className={classes.forgotPasswordText}>{t('ForgotPassword')}</p>
          </div>
          <div className={classes.buttonsContainer}>
            <button className={classes.buttonCreate}>
              {t("LoginButton")}
            </button>
            <button className={classes.buttonBack} onClick={()=>{}}>
              {t("CreateAnAccount")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
