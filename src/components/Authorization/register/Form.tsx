import { ErrorMessage, useFormikContext } from "formik";
import { useStyles } from "../AuthorizationStyle.ts";
import { IUserRegister } from "../types/types.ts";
import { useTranslation } from "react-i18next";

export const FormRegister = () => {
  const classes = useStyles();
  const formik = useFormikContext<IUserRegister>();
  const { t } = useTranslation();

  return (
    <>
      <p className={classes.contentText}>{t("CreateAnAccount")}</p>
      <div className={classes.inputsContainer}>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="firstName"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputRegister}
            placeholder={t("CreateName")}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            name="firstName"
          />
        </div>
        <div className={classes.validationInput}>
          <ErrorMessage
            name="email"
            component="label"
            className={classes.textValidation}
          />
          <input
            className={classes.inputRegister}
            placeholder={t("CreateEmail")}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
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
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
      </div>
    </>
  );
};
