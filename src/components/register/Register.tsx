import { useStyles } from "./RegisterStyle.ts";
import { useTranslation } from "react-i18next";

export const Register = ({ setClose }: { setClose: () => void }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.overlay} onClick={setClose} />
      <div className={classes.content}>
        <div className={classes.contentContainer}>
          <p className={classes.contentText}>{t("CreateAnAccount")}</p>
          <div className={classes.inputsContainer}>
            <input
              className={classes.inputRegister}
              placeholder={t("CreateName")}
            />
            <div className={classes.validationInput}>
              <label className={classes.textValidation}>Please enter valid email address</label>
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
          </div>
          <div className={classes.buttonsContainer}>
            <button className={classes.buttonCreate}>
              {t("CreateButton")}
            </button>
            <button className={classes.buttonBack} onClick={setClose}>
              {t("BackButton")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
