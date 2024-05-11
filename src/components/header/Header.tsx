import React, { useState } from "react";
import { useStyles } from "./HeaderStyle.ts";
import { Stack } from "react-bootstrap";
import { Logo } from "../../assets/Logo.tsx";
import { useTranslation } from "react-i18next";
import { SearchHeader } from "../searchHeader/SearchHeader.tsx";
import { LanguageSwitcher } from "../languageSwitcher/LanguageSwitcher.tsx";
import accountIcon from "../../assets/account.png";
import likeIcon from "../../assets/likeIcon.png";
import bagIcon from "../../assets/bagImage.png";
import { Link } from "react-router-dom";
import { Login } from "../Authorization/login/Login.tsx";

export const Header = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);

  return (
    <>
      <div className={`${classes.headerWrapper}`}>
        <Stack
          className="container"
          direction="horizontal"
          gap={5}
          style={{
            justifyContent: "center",
            paddingLeft: 53,
            paddingRight: 53,
          }}
        >
          <Logo />
          <Link to="/woman" className={classes.genderText}>
            {t("womenHeader")}
          </Link>
          <Link to="/man" className={classes.genderText}>
            {t("menHeader")}
          </Link>
          <SearchHeader />
          <LanguageSwitcher />
          <button
            className={classes.buttonIcon}
            onClick={() => {
              setRegisterOpen(!registerOpen);
            }}
          >
            <img src={accountIcon} className={classes.icon} />
          </button>
          <Link to="/favorite">
            <img src={likeIcon} className={classes.icon} />
          </Link>
          <Link to={'/review-bag'}>
            <img src={bagIcon} className={classes.icon}/>
          </Link>
        </Stack>
      </div>
      {registerOpen ? (
        <Login
          setClose={() => {
            setRegisterOpen(false);
          }}
        />
      ) : null}
      <div style={{ height: 60 }}></div>
    </>
  );
};
