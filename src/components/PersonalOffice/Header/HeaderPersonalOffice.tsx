import useStyles from "./style.tsx";
import { useTranslation } from "react-i18next";

const MenuHeader = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "#282826" }}>
      <div
        id="panelMenuContainer"
        className={`container ${classes.headerWrapper}`}
      >
        {t("Personal office")}
      </div>
    </div>
  );
};

export default MenuHeader;
