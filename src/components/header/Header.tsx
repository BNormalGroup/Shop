import React from "react";
import { useStyles } from "./HeaderStyle.jss.ts";
import { Stack } from "react-bootstrap";
import { Logo } from "../../assets/Logo.tsx";
import { useTranslation } from "react-i18next";
import { SearchHeader } from "../searchHeader/SearchHeader.tsx";
import { LanguageSwitcher } from "../languageSwitcher/LanguageSwitcher.tsx";
import { AccountIcon } from "../../assets/icons/AccountIcon.tsx";
import { LikeIcon } from "../../assets/icons/LikeIcon.tsx";
import { BasketIcon } from "../../assets/icons/BasketIcon.tsx";

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
          <a className={classes.genderText}>{t("womenHeader")}</a>
          <a className={classes.genderText}>{t("menHeader")}</a>
          <SearchHeader />
          <LanguageSwitcher />
          <AccountIcon />
          <LikeIcon />
          <BasketIcon />
        </Stack>
      </div>
    </>
  );
};
