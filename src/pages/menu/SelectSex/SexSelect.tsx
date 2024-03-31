import womanImage from "../../../assets/menu/woman_menu.jfif";
import manImage from "../../../assets/menu/man_menu.jfif";
import useStyles from "./styles";
import {useTranslation} from "react-i18next";
const SexSelect = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={womanImage} />
          <button className={classes.button} style={{ right: 15 }}>
            {t("sexSelectWomen")}
          </button>
        </div>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={manImage} />
          <button className={classes.button} style={{ left: 15 }}>
            {t("sexSelectMen")}
          </button>
        </div>
      </div>
    </>
  );
};

export default SexSelect;
