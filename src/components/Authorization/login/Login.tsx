import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useStyles } from "../AuthorizationStyle.ts";
import { Register } from "../register/Register.tsx";

export const Login = ({ setClose }: { setClose: () => void }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState<boolean>(false);

 if (!isRegister) return (
    <>
      <div className={classes.overlay} onClick={setClose} />
      <div className={classes.content}>
        <div className={classes.contentContainer}>
          <p className={classes.contentText}>{t("LoginAccount")}</p>
          <div className={classes.inputsContainer}>
            <div className={classes.validationInput}>
              <label className={classes.textValidation}>
                {t('ValidationRegisterEmail')}
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
            <button className={classes.buttonBack} onClick={()=>{setIsRegister(true)}}>
              {t("CreateAnAccount")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
 else
   return (
    <Register setClose={setClose} backLogin={()=>{setIsRegister(false)}}/>
   );
};
