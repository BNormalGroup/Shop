import womanImage from "../../../assets/menu/CollectioinSelectWoman.png";
import manImage from "../../../assets/menu/CollectionSelectMan.png";
import useStyles from "./styles.tsx";
import { useTranslation } from "react-i18next";

const CollectionSelect = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.nameCollection}>{t("collectionName")}</h2>
      </div>
      <div className={classes.container}>
        <div className={`${classes.imageWrapper} ${classes.imageWrapperMan}`}>
          <img alt="" className={classes.image} src={manImage} />
          <p className={classes.secondNameCollection}>
            {t("collectionNameMen")}
          </p>
        </div>
        <div className={`${classes.imageWrapper} ${classes.imageWrapperWoman}`}>
          <img alt="" className={classes.image} src={womanImage} />
          <p className={classes.secondNameCollection}>
            {t("collectionNameWomen")}
          </p>
        </div>
      </div>
    </>
  );
};

export default CollectionSelect;
