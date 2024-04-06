import React from "react";
import { useStyles } from "./HeaderStyle.ts";
import { Stack } from "react-bootstrap";
import { Logo } from "../../assets/Logo.tsx";
import { useTranslation } from "react-i18next";
import { SearchHeader } from "../searchHeader/SearchHeader.tsx";
import { LanguageSwitcher } from "../languageSwitcher/LanguageSwitcher.tsx";
import { BasketIcon } from "../../assets/icons/BasketIcon.tsx";
import accountIcon from "../../assets/account.png";
import likeIcon from "../../assets/likeIcon.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <div className={classes.headerWrapper}>
        <Stack
          direction="horizontal"
          gap={5}
          style={{ justifyContent: "center" }}
        >
          <Logo />
          <Link to="/women" className={classes.genderText}>
            {t("womenHeader")}
          </Link>
          <Link to="/men" className={classes.genderText}>
            {t("menHeader")}
          </Link>
          <SearchHeader />
          <LanguageSwitcher />
          <img src={accountIcon} className={classes.icon} />
          <img src={likeIcon} className={classes.icon} />
          <BasketIcon />
        </Stack>
      </div>
    </>
  );
};
