import { useStyles } from "./NotFoundPageStyle.ts";
import { useTranslation } from "react-i18next";

const NotFoundPage = () =>{
  const classes = useStyles();
  const {t} = useTranslation();

  return(
    <>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <p className={classes.textNumber}>404</p>
          <p className={classes.textNotFound}>{t('NotFound')}</p>
          <p className={classes.textError}>{t('NotFoundError')}</p>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage;
