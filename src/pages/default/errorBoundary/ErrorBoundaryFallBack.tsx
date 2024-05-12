import { useTranslation } from "react-i18next";
import { useStyles } from "./ErrorBoundaryStyle.ts";

const ErrorBoundaryFallBack = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <p className={classes.text}>{t("SomethingWentWrong")}</p>
          <button className={classes.button}>
            <a href="/" className={classes.textButton}>{t("ReturnToHome")}</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorBoundaryFallBack;
